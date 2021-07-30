"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.totalCapacityKg = totalCapacityKg;
        this.name = name;
    }
    Rocket.prototype.sumMass = function (items) {
        var totalMass = 0;
        for (var i = 0; i < items.length; i++) {
            totalMass += items[i].massKg;
        }
        return totalMass;
    };
    Rocket.prototype.currentMassKg = function () {
        var mass = 0;
        var astronautsMass = this.sumMass(this.astronauts);
        var cargoMass = this.sumMass(this.cargoItems);
        // for (let i = 0; i < this.astronauts.length; i++) {
        //     mass += this.astronauts[i].massKg;
        // }
        // for (let i = 0; i < this.astronauts.length; i++) {
        //     mass += this.astronauts[i].massKg;
        // }
        //return mass;
        return astronautsMass + cargoMass;
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        // let result = this.canAdd(cargo);
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        //let result = this.canAdd(astronaut);
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else { // if (result === false) 
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
