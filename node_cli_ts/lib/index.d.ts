#!/usr/bin/env node
declare const chalk: any;
declare const clear: any;
declare const figlet: any;
declare const path: any;
declare const program: any;
declare const inquirer: any;
declare var ui: any;
declare let start: () => void;
declare let mainLoop: {
    type: string;
    name: string;
    message: string;
    choices: string[];
};
declare let mainAnswers: (answers: {
    toplevel: any;
}) => void;
