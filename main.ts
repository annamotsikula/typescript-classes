// console.log('Hello');

// var num = 12;
// let & const 

//immutable mutable 

let num = 12;

let str: string = 'Typescript'

let myBool: boolean = true ;
myBool = false;
// console.log(myBool)

let anyType : number = 10;

const myNumber = 9;

const ingredients = {
    tomato: 8,
    cheese: 10
}

ingredients.cheese = 20;

interface IDateModel {
    weekday: string,
    month: number,
    year: number,
    day: number
}

const today: IDateModel = {
    weekday: 'Monday',
    month: 10,
    year: 2022,
    day: 31
}

function printToday(object: IDateModel): string {
    // console.log(object.weekday);
    return `Today is ${object.day}`
}

let dateToday = printToday(today);
// console.log(dateToday)

class Plane {
    x: number;
    y:number;

    constructor(nx: number, ny: number) {
        this.x = nx;
        this.y = ny;
    }
    

    print(): void {
        console.log(`x is: ${this.x}, y is: ${this.y}`)
    }

    add(points2D: Plane): void {
        this.x += points2D.x;
        this.y += points2D.y;
    }

    create(points2D: Plane): Plane {
        this.x += points2D.x 
        this.y += points2D.y
        return new Plane(this.x, this.y)
    }

}

const a1 = new Plane(2,3);
const a2 = new Plane(-4, 0);

a1.add(a2);

// inheritance
class Space extends Plane {
    z: number;

    constructor(x: number, y: number, z:number) {
        super(x, y);
        this.z = z
    }

    print(): void {
        console.log(`x is: ${this.x}, y is: ${this.y}, z is: ${this.z}`)   
    }

    create(points3D: Space): Space {
        const coordinates = super.create(points3D)
        return new Space(coordinates.x, coordinates.y, this.z + points3D.z)
    }

}


const b1 = new Space(1,2,3);
b1.print();
const b2 = new Space(4,5,6);
console.log(b1.create(b2));