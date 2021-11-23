// Q2.1
interface Car {
    id: number,
    brand: string,
    color?: string,
    distanceUsed: number,
    showCar(): string,
    use(distance: number): number
}

// Q2.2
class EuropeCar implements Car{
    id:number;
    brand:string;
    color?: string;
    distanceUsed: number;

    constructor(id: number, brand: string, color:string, distanceUsed:number) {
        this.id = id;
        this.brand = brand;
        this.color = color;
        this.distanceUsed = distanceUsed;
    }

    showCar(){
        return `${this.brand} ${this.brand} ${this.brand}`;
    }

    use(distance:number){
        this.distanceUsed+=distance;
        return this.distanceUsed;
    }
}

// Q2.3
let euCar1 = new EuropeCar(5,"Toyota","Red",1000);
console.clear();
console.log(`Show car: ${euCar1.showCar()}`);
console.log(`Before use: ${euCar1.distanceUsed}`);
console.log(`After use: ${euCar1.use(100)}`);
console.log("================================");