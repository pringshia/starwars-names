var expect = require("chai").expect;
var starWars = require("./index");

describe("starwars-names", function() {
    it("should work!", function() {
        expect(true).to.be.true;
    })

    describe("random", function() {
        it("should return an item", function() {
            var randomItem = starWars.random();
            expect(starWars.all).to.include(randomItem);
        })
        it("should return a an array of random items if passed a number", function() {
            var randomItems = starWars.random(3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach(function(item) {
                expect(starWars.all).to.include(item);
            })
        })
    })
});