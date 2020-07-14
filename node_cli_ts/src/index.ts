#!/usr/bin/env node

import { Main } from "./main";

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

clear();
console.log(
   chalk.red(
      figlet.textSync('realm-cli', { horizontalLayout: 'full' })
   )
);

new Main();






