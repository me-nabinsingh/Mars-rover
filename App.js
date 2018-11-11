'use strict';
let args = process.argv.slice(2);

let Robot = require('./models/Robot');
let Input = require('./models/Input');
let Plateau = require('./models/Plateau');


if(args.length > 0){
    let commandFileUrl = args[0];
    let input = new Input(commandFileUrl);

    
    if(input.isValidPlateauDimension()) {
        const plateauDimensionArr = input.getPlateauDimension();
        let plateau = new Plateau(...plateauDimensionArr);
        
        const allRobotsInstructions = input.getAllRobotsInstructions();
        
        allRobotsInstructions.forEach(eachRobotInstructions => {
            const landingInstructionString = eachRobotInstructions.landingPosition;
            const moveInstructions = eachRobotInstructions.moveOrder;

            const landingInstructionArr = landingInstructionString.split(" ");
            if((landingInstructionArr[0] < 0) 
                || (landingInstructionArr[0] > plateau.x) 
                || (landingInstructionArr[1] < 0)
                || (landingInstructionArr[0] > plateau.x)
            )
            {
                console.error("Robot position out of plateau coordinates");
                return;
            }

            var robot = new Robot(...landingInstructionArr);
            const moveInstructionArr = moveInstructions.split('');

            moveInstructionArr.forEach(instruction => {
                switch(instruction) {
                    case 'L':
                    case 'R':
                        robot.spin90Degrees(instruction);
                        break;
                    case 'M':
                        robot.moveForward(plateau);
                        break;
                    default:
                        console.error('Invalid move command');
                }
            });

            console.log(robot.getPositionAndLocation());
        });
    }
    else {
        console.log("\n\nError: Plateau doesn't have dimension. You can't land any robots\n\n");
    }
}
else{
    console.log("\n\nError: Missing command file path\n\n");
}