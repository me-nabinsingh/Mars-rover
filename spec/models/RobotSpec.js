describe("Robot", function() {
    var Robot = require('../../models/Robot');
    var Plateau = require('../../models/Plateau');
    var plateau;
    var robot;
  
    beforeEach(function() {
        robot = new Robot(3, 2, 'S');
        plateau = new Plateau(5, 5);
    });

    it("should land the robot on plateau", function() {
        expect(robot.x).toEqual(3);
        expect(robot.y).toEqual(2);
        expect(robot.direction).toBe("S");
    });

    
    it("should move one step south", function() {
        robot.moveForward(plateau);
        expect(robot.x).toEqual(3);
        expect(robot.y).toEqual(1);
        expect(robot.direction).toBe("S");
    });

    it("should not exceed the plateau bounds", function() {
        robot.moveForward(plateau);
        robot.moveForward(plateau);

        expect(robot.x).toEqual(3);
        expect(robot.y).toEqual(0);
        expect(robot.direction).toBe("S");
    });

    it("should face to east", function() {
        robot.spin90Degrees("L");

        expect(robot.direction).toBe("E");
    });

    it("should face to west", function() {
        robot.spin90Degrees("R");

        expect(robot.direction).toBe("W");
    });
});