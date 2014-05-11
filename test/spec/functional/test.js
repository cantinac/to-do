/* global casper */
'use strict';

casper.start('http://google.fr/');

casper.then(function() {
    this.echo('Search Google');
});

casper.thenEvaluate(function(term) {
    document.querySelector('input[name="q"]').setAttribute('value', term);
    document.querySelector('form[name="f"]').submit();
}, 'CasperJS');

casper.then(function() {
    console.log('Click 1st result');

    // Click on 1st result link
    this.click('h3.r a');
});

casper.then(function() {
    console.log('Clicked ok');
    console.log('New location is ' + this.getCurrentUrl());
});

casper.run();
