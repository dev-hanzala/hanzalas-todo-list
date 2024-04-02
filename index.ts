#! /usr/bin/env node

import inquirer from "inquirer";

let todos = [];

let repeat = true;

while (repeat) {
	let prompts = await inquirer.prompt(
		[
			{
				type: "input",
				name: "title",
				message: "What do you want to add to your todo list?",
			},
			{
				type: "confirm",
				name: "comfirmation",
				message: "Do you want to add more items to your todo list?",
				default: true,
			}
		]
	);
	
	todos.push(prompts.title);
	
   repeat = prompts.comfirmation;
};

console.table(todos);
