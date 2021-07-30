import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";
import { Payload } from "./Payload";

export class Rocket {
    // properties and methods
    totalCapacityKg : number;
    name: string;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.totalCapacityKg = totalCapacityKg;
        this.name = name;
    }

    sumMass( items: Payload[]): number {
        let totalMass = 0;
        for (let i = 0; i < items.length; i++) {
            totalMass += items[i].massKg;
        }
        return totalMass;
    }

    currentMassKg(): number {
        let mass = 0;
        let astronautsMass = this.sumMass(this.astronauts);
        let cargoMass = this.sumMass(this.cargoItems);

        // for (let i = 0; i < this.astronauts.length; i++) {
        //     mass += this.astronauts[i].massKg;
        // }
        // for (let i = 0; i < this.astronauts.length; i++) {
        //     mass += this.astronauts[i].massKg;
        // }
        //return mass;
        return astronautsMass + cargoMass;
    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        } else {
            return false;
        }
    }

    addCargo(cargo: Cargo): boolean {
       // let result = this.canAdd(cargo);

        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else{
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        //let result = this.canAdd(astronaut);

        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else { // if (result === false) 
            return false;
        }
    }


 }
 