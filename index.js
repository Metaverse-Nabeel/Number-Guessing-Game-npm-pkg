import chalk from "chalk";
import inquirer from "inquirer";
let wantToPlay = true;
console.log(chalk.red("***********************************************"));
console.log(chalk.green(chalk.red("******** ") +
    "WELCOME TO NUMBER GUESSING GAME" +
    chalk.red(" ********")));
console.log(chalk.red("***********************************************"));
const guessing = (guess) => {
    let num = Math.floor(Math.random() * 100);
    if (guess === num) {
        return { result: true, value: num };
    }
    else {
        return { result: false, value: num };
    }
};
while (wantToPlay) {
    const play = await inquirer.prompt([
        {
            type: "list",
            name: "playGame",
            message: "Do you want to play the game:",
            choices: ["Yes", "No"],
        },
    ]);
    switch (play.playGame) {
        case "Yes":
            wantToPlay = true;
            break;
        case "No":
            wantToPlay = false;
            continue;
        default:
            break;
    }
    if (play.playGame === "Yes") {
        const game = await inquirer.prompt([
            {
                type: "number",
                name: "Num",
                message: "Guess the number (1-100): ",
            },
        ]);
        let answer = guessing(game.Num);
        if (answer.result) {
            console.log(chalk.green("**** CONGRATULATIONS!!! ****"));
            console.log(chalk.green("The number was: " + chalk.blueBright.bold(answer.value)));
            console.log(chalk.green("**** YOU WON! ****"));
        }
        else {
            console.log(chalk.red("**** BAD LUCK!!! ****"));
            console.log(chalk.red("The number was: " + chalk.redBright.bold(answer.value)));
            console.log(chalk.red("**** YOU LOSE! ****"));
        }
    }
}
console.log(chalk.green("**** GOOD BYE!!! ****"));
