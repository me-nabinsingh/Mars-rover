'use strict';

const Robot = function(x, y, direction) {
    this.x = Number(x);
    this.y = Number(y);
    this.direction = direction;

}

Robot.prototype.getPositionAndLocation = function(){
    return `${this.x} ${this.y} ${this.direction}`;
}


Robot.prototype.moveForward = function(plateau){
    switch(this.direction) {
        case 'E':
            if(this.x < plateau.x){
                this.x += 1; 
            }
            break;
        case 'W':
            if(this.x > 0){
                this.x -= 1; 
            }
            break;
        case 'N':
            if(this.y < plateau.y){
                this.y += 1; 
            }
            break;
        case 'S':
            if(this.y > 0){
                this.y -= 1; 
            }
            break;
    }
}

Robot.prototype.spin90Degrees = function(spinDirection){
    const  turnLeft = () => {
        switch(this.direction) {
            case 'E':
                this.direction = 'N';
                break;
            case 'W':
                this.direction = 'S';
                break;
            case 'N':
                this.direction = 'W';
                break;
            case 'S':
                this.direction = 'E';
                break;
        }
    }
    
    const turnRight = () => {
        switch(this.direction) {
            case 'E':
                this.direction = 'S';
                break;
            case 'W':
                this.direction = 'N';
                break;
            case 'N':
                this.direction = 'E';
                break;
            case 'S':
                this.direction = 'W';
                break;
        }
    }
    
    switch(spinDirection) {
        case 'L':
            turnLeft();
            break;
        case 'R':
            turnRight();
    }
}


module.exports = Robot;