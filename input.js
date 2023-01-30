import inquirer from 'inquirer';
import fs from 'fs';

const questions = [
    {
        type: 'input',
        name: 'PORT',
        message: 'Quel port souhaitez-vous utiliser pour votre application?'
    },
    {
        type: 'input',
        name: 'DATABASE',
        message: 'Quel est le nom de votre base de données?'
    },
    {
        type: 'password',
        name: 'DB_PASSWORD',
        message: 'Quel est le mot de passe de votre base de données?'
    },
    {
        type: 'list',
        name: 'THEME',
        message: 'Quel thème souhaitez-vous utiliser pour votre application?',
        choices: ['bleu', 'rouge', 'vert']
    }
];

inquirer.prompt(questions).then((answers) => {
    const envVars = Object.keys(answers).map(key => `${key}=${answers[key]}`).join('\n')
    fs.writeFile('.env', envVars, (err) => {
        if (err) throw err;
       
    })
    console.log("Env file saved");
});