const inquirer = require("inquirer");
const fs = require("fs")
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Manager = require("./lib/manager");
// const util = require('util');
const generateHTML = require("./lib/main");



const employees = [];


function newEmployee() {
   inquirer.prompt([
        {
        type: "list",
        name: 'role',
        message: "What is the employee position",
        choices: ["Manager", "Engineer", "Intern", "I dont't want to add any more team members"]
    }
    ]).then(({role}) => {
        console.log(role);
        switch(role){
            case"Manager":
            managerInput();
            break
            case"Engineer":
            engineerInput();
            break
            case"Intern":
            internInput();
            break
            case"I dont't want to add any more team members":
            const htmlPageContent = generateHTML(employees)
            fs.writeFile("./dist/index.html", htmlPageContent, (err) =>
            err ? console.log(err) : console.log("successfully created")
            );
            break
    }
    })
}

function managerInput () {
 let managerPropmt = [
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the team manager's id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email?",
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's office number?",
    },
];
 inquirer.prompt(managerPropmt).then(answers => {
    const manager1 = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    employees.push(manager1)
    newEmployee()
});
}

// }

function  engineerInput(){
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the team engineer name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the team engineer id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team engineer email?",
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the team engineer gitHub?",
    },
]).then(function (answers){
    const engineer1 = new Engineer( answers.name, answers.id, answers.email, answers.github)
    employees.push(engineer1)
    newEmployee()
})
}

function internInput(){
    inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the team  intern name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the team  intern id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team intern email?",
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the team intern school?",
    },

]).then(function(answers) {
    const intern1 = new Intern( answers.name, answers.id, answers.email, answers.school)
    employees.push(intern1)
    newEmployee()
})

}


newEmployee()











// function generateHTML() {
//     fs.writeFileSync()
    
// }