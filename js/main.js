/* IE9: Stub out console */
if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function() {};
if (!window.console.error) window.console.error = function() {};


var Todo = (function() {

    var applicationModel,
        todoCollection;

    // Models

    var ApplicationModel = Backbone.Model.extend({
        initialize: function(){
            console.log("application init'd");
        }
    });


    var TodoModel = Backbone.Model.extend({
        initialize: function() {
            console.log("a todo model init'd");
        },
        defaults: {
            text: "",
            completed: "false"
        }

    });

    // Collections

    var TodoCollection = Backbone.Collection.extend({
            initialize: function() {
                console.log("TodoCollection is initialized");
                this.on("add", this.onAdd);
            },

            model: TodoModel,

            onAdd: function() {
                console.log("Todo added to collection");
                applicationView.render();
            }

    });


    // Views

    var ApplicationView = Backbone.View.extend({

        template: _.template($('#tpl-application').html()),

        thisEl: {},

        initialize: function() { 
            this.listenTo(this.model, 'change', this.render);           
            console.log("set application Views");
            this.thisEl = $(this.el);
            this.render();
        },

        render: function() {
            console.log("should render applicationView");

            this.thisEl.html(this.template());

            // cycle the TodoCollection and write a todo for every one in the list
            _.each(todoCollection.models, function(model, i) {
                new TodoView({ el: this.thisEl.find('#todoUl').append('<li></li>') , model: model })
            }, this); 

        },

        addTodoItem: function(e) {
            e.preventDefault();
            todoCollection.add( new TodoModel({text: this.thisEl.find('#inputField').val(), completed: "false"}) );
        },

        events: {
            "mouseup #addTodoButton": "addTodoItem"
        }

    });

    var TodoView = Backbone.View.extend({

        template: _.template($('#tpl-todo').html()),

        initialize: function() { 
            this.render();
        },

        render: function() {
                console.log("should render todoView");
                var templateArgs = { 
                    todoText: this.model.attributes.text, 
                    itemChecked: this.model.attributes.completed 
                };
                $(this.el).html(this.template(templateArgs));
        },

        startHandler: function() {
            // change viewState to Monitor
//            applicationModel.set({activeView: "monitorView"});
        },

        events: {
//            "mouseup .start-monitor": "startHandler"
        }

    });




    // AMQ client housing

    var AmqClient = function(_monitorModel, _monitorView) {


        var _monitorModel = _monitorModel,
            _monitorView = _monitorView,
            fakeAMQinterval,
            lastUpdateTime = new Date().getTime(),
            AMQopen,
            initialTimeOut = 2000;      

        function getAthleteMetricsById(id, metricsObjectArray) {
            for (i = metricsObjectArray.length - 1; i >= 0; i--) {
                if (metricsObjectArray[i].athleteId == id) {
                    return metricsObjectArray[i];
                }
            }
            return false;
        }

        function writeClubModelPlayers() {
            // dupe our dummy data templates
            var choppedPlayerData = teamMetrics.slice();
            var thisTeamPlayers = $.extend({},teamPlayers);
            // randomly pick athletes to drop from data
            for (i=0; i<6; i++) {
                var iToDrop = Math.round(Math.random() * (choppedPlayerData.length - 1) );
                choppedPlayerData.splice(iToDrop, 1);
            }
            for (j = 0; j < thisTeamPlayers.club.players.length; j++ ) {
                var thisId = thisTeamPlayers.club.players[j].id;
                var thisIdMetrics = getAthleteMetricsById(thisId,choppedPlayerData);
                thisIdMetrics.disabled = false;
                var naMetrics = {
                    "id": thisId,
                    "acceleration": offlineMetricOutput,
                    "distance": offlineMetricOutput, 
                    "power": offlineMetricOutput, 
                    "speed": offlineMetricOutput,
                    "disabled": "true"
                };
                if (thisIdMetrics != false) {
                    $.extend(thisTeamPlayers.club.players[j], thisIdMetrics);
                }
                else {
                    $.extend(thisTeamPlayers.club.players[j], naMetrics);
                }
            }
            if (_monitorModel.attributes.clubModel != null) {
                _monitorModel.attributes.clubModel.set(thisTeamPlayers);
                // TODO:  why is trigger required here--why is model udpate not triggering 'change' event?
                _monitorModel.attributes.clubModel.trigger('change');
            }
        }   

        function executeOnePoll(_timeOut) {
            fakeAMQtimeout = setTimeout(function() {
                    // amq message handler would really set this:
                    teamMetrics = teamMetrics;
                    var timeNow = new Date().getTime()
                    var updatedValue =  timeNow - lastUpdateTime;

                    writeClubModelPlayers();    

                    updateModel.set({updatedValue: updatedValue});
                    lastUpdateTime = timeNow;
                    monitorView.$el.find('.load-report').remove();
                    executeOnePoll( (1 + Math.random()) * 1000); 
                }, _timeOut);
            AMQopen = true;
        } 

        function rcvMessage(message) {
            console.log("received "+message);
            teamMetrics = teamMetrics;
            var timeNow = new Date().getTime()
            var updatedValue =  timeNow - lastUpdateTime;

            writeClubModelPlayers();    

            updateModel.set({updatedValue: updatedValue});
            lastUpdateTime = timeNow;
            AMQopen = true;
        }



        // public methods
        return {

            start: function() {
                // start up the amq connection and specify message receipt handler
                // var amq = org.activemq.Amq;
                // var chatTopic = "queue://FOO.QUEUE"
                // amq.init({ 
                //  uri: 'http://localhost:61616/MyAjaxServlet', 
                //  logging: true,
                //  timeout: 2,
                //  clientId: (new Date()).getTime().toString()
                // });

                // amq.sendMessage(chatTopic, '<message type="chat" from="scott">message one</message>');
                // amq.sendMessage(chatTopic, '<message type="chat" from="scott">message two</message>');
                // amq.sendMessage(chatTopic, '<message type="chat" from="scott">message three</message>');
                // amq.sendMessage(chatTopic, '<message type="chat" from="scott">message four</message>');

                //amq.addListener('amqc','queue://FOO.QUEUE', rcvMessage);  
                AMQopen = true;     
                executeOnePoll(initialTimeOut);
            },
            stop: function() {
                if (AMQopen) {
                    clearTimeout(fakeAMQtimeout);
                    AMQopen = false;
                }
            }
        };


    };


// initialization of whole app on page load


    return {
        init: function() {
            console.log("todo app is init'd");

            // setup empty todo collection
            todoCollection = new TodoCollection();

            // create the app
            applicationModel = new ApplicationModel();
            applicationView = new ApplicationView({ el: $("#applicationContainer"), model: applicationModel});

        }

    }
}
)();




$(function() {  
    Todo.init();
});

