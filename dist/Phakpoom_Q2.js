// Q2.2
class EuropeCar {
    constructor(id, brand, color, distanceUsed) {
        this.id = id;
        this.brand = brand;
        this.color = color;
        this.distanceUsed = distanceUsed;
    }
    showCar() {
        return `${this.brand} ${this.brand} ${this.brand}`;
    }
    use(distance) {
        this.distanceUsed += distance;
        return this.distanceUsed;
    }
}
// Q2.3
let euCar1 = new EuropeCar(5, "Toyota", "Red", 1000);
console.clear();
console.log(`Show car: ${euCar1.showCar()}`);
console.log(`Before use: ${euCar1.distanceUsed}`);
console.log(`After use: ${euCar1.use(100)}`);
console.log("================================");
