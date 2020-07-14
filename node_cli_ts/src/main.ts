#!/usr/bin/env node

const inquirer = require('inquirer');
import {CreateTask} from './createTask';
import 

export class Main {
   mainPrompt: object = {
      type: 'rawlist',
      name: 'top_level',
      message: "What would you like to do?",
      choices: [ 'Create a task', 
               'Show all of my tasks', 
               'Get a specific task',
               'Change a task status',
               'Edit a task',
               'Delete a task'
   ]};

   constructor() {
      inquirer.prompt(this.mainPrompt).then((answers: { top_level: any; })=> {
         switch (answers.top_level){
         case 'Create a task':
            new CreateTask();
            break;
         default:
            console.log('other')
            break; 
      }
      }).catch((err: any)=>{
         console.log(err)
      });
   }
}