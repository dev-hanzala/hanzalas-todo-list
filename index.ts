#! /usr/bin/env node

import inquirer from "inquirer";

let todos:string[] = [];

async function addTodos(){
	let repeat = true;

	while (repeat) {
		let prompt = await inquirer.prompt(
			[
				{
					type: "input",
					name: "title",
					message: "What do you want to add to your todo list?",
				}
			]
		);
		
		if (prompt.title.length > 0) {
			todos.push(prompt.title);
			let conformation = await inquirer.prompt(
				{
					type: "confirm",
					name: "comfirmation",
					message: "Do you want to add more items to your todo list?",
					default: true,
				}
			)
			repeat = conformation.comfirmation;
		} else {
			console.log("Please write an entery to be added to your todo list");
			
		}
		
		
	};
}

let continueRunning = true;

while (continueRunning) {
	let selection = await inquirer.prompt(
		{
			type: "list",
			name: "selection",
			message: "What would you like to do?",
			choices: [
				"Add an item to your todo list",
				"View your todo list",
				"Exit",
			],
		}
	)
	
   switch (selection.selection) {
		case "Add an item to your todo list":
			await addTodos();
			break;
		case "View your todo list":
			console.table(todos);
			break;
		case "Exit":
			continueRunning = false;
         break;
		default: continueRunning = false; break;
	}
}	