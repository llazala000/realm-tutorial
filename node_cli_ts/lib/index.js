#!/usr/bin/env node
"use strict";
var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var path = require('path');
var program = require('commander');
var inquirer = require('inquirer');
var ui = new inquirer.ui.BottomBar();
var start = function () {
    clear();
    console.log(chalk.red(figlet.textSync('realm-cli', { horizontalLayout: 'full' })));
    inquirer.prompt(mainLoop).then(mainAnswers);
};
var mainLoop = {
    type: 'rawlist',
    name: 'toplevel',
    message: "What would you like to do?",
    choices: ['Create a task',
        'Show all of my tasks',
        'Get a specific task',
        'Change a task status',
        'Edit a task',
        'Delete a task'
    ],
};
var mainAnswers = function (answers) {
    console.log(answers.toplevel);
    /*switch (answers.toplevel){
       case 'Create a task':
          ui.log.write('something just happened.');
          break;
       default:
             ui.log.write('other')
             break;
    }*/
    //start();
};
//inquirer.prompt(mainLoop).then(mainAnswers);
try {
    start();
}
catch (err) {
    console.log(err);
}
/*inquirer.prompt({
  type: 'list',
  name: 'beverage',
  message: 'And your favorite beverage?',
  choices: ['Pepsi', 'Coke', '7up', 'Mountain Dew', 'Red Bull'],
});*/ 
