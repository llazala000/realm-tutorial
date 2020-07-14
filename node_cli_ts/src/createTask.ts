#!/usr/bin/env node

const inquirer = require('inquirer');

export class CreateTask {
   constructor() {
         inquirer.prompt([
         {
            type: 'input',
            name: 'task_name',
            message: 'What is the task text?',
         },{
            type: 'rawlist',
            name: 'task_status',
            message: 'What is the task status?',
            choices: ['Open', 'In Progress', 'Closed'],
            default: function () {
               return 'Open';
         }
      }]).then((answers: any)=>{
         console.log(JSON.stringify(answers))
      });
   }
}
