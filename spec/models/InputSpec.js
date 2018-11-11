describe("Input", function() {
    let Input = require('../../models/Input');
    let input;
    let filePath = "testdata/data.txt";
  
  
    beforeEach(function() {
      input = new Input(filePath);
    });
  
    it("has valid upper right coordinate", function() {
      expect(input.isValidPlateauDimension()).toBe(true);
    });
  
    it("Should get platue dimension", function() {
      const platueDimension = input.getPlateauDimension();
      expect(platueDimension.length).toBe(2);
      expect(platueDimension).toEqual(['5', '5']);
    });
  
    it("Should have two robots instructions", function() {
      const robotInstructions = input.getAllRobotsInstructions();
      expect(robotInstructions.length).toBe(2);
    });
    
  });