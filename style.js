/* hide landscape elements while in portrait mode and vice-versa */
.portrait .landscape,
.landscape .portrait {
  display: none;
}

body, html {
  width: 100%;
  margin: 0;
  padding: 0;
}

body.landscape {
  background-color: #ccc;
}

body, body * {
  font-size: 100%;
  font-family: arial, helvetica, sans-sarif;
}

.portrait .todo-wrapper {
  width: 100%;
  margin: 0;
  padding: 0;
}

.landscape .todo-wrapper {
  width: 41em;
  margin: 5em auto;
  -webkit-box-shadow: 0 0 1em #888;
}

.todo-form {
  display: inline-block;
  width: 40em;
  padding: .5em;
  margin: 0;
  background: -webkit-linear-gradient(top, #eee, #ddd);
  background: linear-gradient(top, #ccc, #aaa);
}

.todo-form input, .todo-form button {
  display: block;
  float: left;
  margin: 0;
  height: 3em;
  vertical-align: middle;
  font-size: 1em;
  border-color: #999;
  border-style: solid;
}

.todo-form input {
  -webkit-border-radius: 5px 0 0 5px;
  border-radius: 5px 0 0 5px;
  border-width: 1px 0 1px 1px;
  width: 30em;
  padding: 0 1em;
}

.todo-form button {
  -webkit-border-radius: 0 5px 5px 0;
  border-radius: 0 5px 5px 0;
  border-width: 1px 1px 1px 0;
  padding: .5em;
  background: -webkit-linear-gradient(top, #6ca, #6aa);
  background: linear-gradient(top, #ccc, #aaa);
  color: #fff;
  -webkit-text-shadow: 1px 1px 1px #888;
  text-shadow: 1px 1px 1px #888;
}

.todo-list {
  background-color: #fff;
}
.todo-list li {
  border: 0;
  border-bottom: 1px solid #ccc;
  padding: 1em .5em;
}

.todo-item-incomplete {
  color: #000;
}

.todo-item-complete {
  color: #888;
}
