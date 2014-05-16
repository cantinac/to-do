/* global Zepto */

;(function( $ ) {
    'use strict';

    //var todoApp = todoApp || {};
    //todoApp.models = todoApp.models || {};

    var $field;
    var newTodo;
    var listItem;

    $( '.create-item-form__field' ).keyup( function( event ) {
        if ( event.which === 13 ) { // Enter key code
            $field = $( this );

            // Verify field not empty
            if ( $field.val() !== '' ) {
                $field.siblings( '.js-create-item' ).trigger( 'click' );
            }
        }
    });

    $( '.js-create-item' ).click( function() {
        $field = $( this ).closest( 'button' ).siblings( '.create-item-form__field' );

        // Verify field not empty
        if ( $field.val() !== '' ) {
            newTodo = $field.val();

            listItem = '<li class="todo-list__item"><input class="checkbox" type="checkbox"><label class="label">' + newTodo + '</label></li>';

            // Clear field
            $field.val( '' );

            // Add new todo item to list
            $( '.todo-list' ).append( listItem );
        }
    });
})( Zepto );
