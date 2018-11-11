'use strict';
var fs = require('fs');

function Input(fileName){
    try {
        //read commands file
        this.commands = fs.readFileSync(fileName).toString().split("\n");
    } catch (e) {
        if (e.code === 'ENOENT') {
            console.log('File not found!');
        } else {
            throw e;
        }
    }
    
}


/***
 * Check if the plateau has valid upper right coordinates so that robots can land there
 * @returns {boolean}
 */
Input.prototype.isValidPlateauDimension = function() {
    var isValid = true;
    var command = this.commands[0];
    var commandDetails = command.split(" ");

    if(commandDetails.length === 2) {
        commandDetails.forEach(c => {
            c = Number(c);
            if(typeof(c) !== 'number') {
                isValid = false;
            }
        });
    }

    return isValid;
}

/***
 * Get plateau dimension
 * @returns {Array}
 */
Input.prototype.getPlateauDimension = function() {
    const commands = this.commands;
    const plateauDimensionString = commands[0];
    return plateauDimensionString.split(" ");
}

/***
 * Get all robots  instructions
 * @returns {Array}
 */
Input.prototype.getAllRobotsInstructions = function() {
    const commands = this.commands;
    const robotCommands = commands.splice(1)
    const optimizedRobotCommands = [];

    for(let i = 0; i < robotCommands.length; i = i+2) {
        const eachRobotCommand = {
            landingPosition: robotCommands[i],
            moveOrder: robotCommands[i + 1]
        }
        optimizedRobotCommands.push(eachRobotCommand);
    }
    return optimizedRobotCommands;
}

//export the class
module.exports = Input;