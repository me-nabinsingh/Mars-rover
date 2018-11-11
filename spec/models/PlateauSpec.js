describe("Mars", function() {
    let Plateau = require('../../models/Plateau');
    let plateau;
  
    beforeEach(function() {
        plateau = new Plateau(10, 10);
    });
  
    it("Should have upper coordinate of 10, 10", function() {
      expect(plateau.x).toEqual(10);
      expect(plateau.y).toEqual(10);
    });

  });