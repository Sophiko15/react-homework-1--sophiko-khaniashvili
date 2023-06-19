// davaleba 1

const namber = [
    {
        positive: 10,
        negative: -10,
    },
    {
        positive: 9,
        negative: -9,
    },
    {
        positive: 25,
        negative: -25,
    },
];
const totalpositive = namber.reduce((total, curertvalue) => {
  return total + curertvalue.positive;
}, 0);
console.log(totalpositive);

// davaleba 2

const arrCity = ['Tbilisi', 'signagi', 'Batumi', 'signagi', 'Telavi', 'gurjaani', 'Tbilisi', 'signagi', 'gurjaani']

const cityCount = arrCity.reduce((cityAcc, city) => {
        if (!cityAcc[city]) { 
            cityAcc[city] = 1
        } else {
            cityAcc[city]++
        }
        return cityAcc
    }
, {})

console.log(cityCount)


// davaleba 3

class Car {
 constructor(brand, model, speed = 0, motion = `The car is not moving`){
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.motion = motion;
 }
showCar(){
    console.log(`brand - ${this.brand} model- ${this.model} speed - ${this.speed} motion - ${this.motion}`);
}
check_motion (){
    if (this.speed === 0) {
        this.motion = `manqana gacherebulia`
    }else{
        this.motion = `manqana modzraobs`
    }
    console.log(`this.motion`);
}
accelerate (speed){
    this.speed = speed;
    console.log(`accelerate`);
    this.check_motion();
}
brake (speed){
    if (speed => this.speed) {
        console.log(`brake damuxruchebisas sichqare ar unda iyos amjamindeli sichqaris toli`);
    }else{
        this.speed = speed;
        console.log(`brake`);
    }
    this.check_motion();
}
emergency_brake (speed){
    if (speed === 0) {
        console.log(`brake gacherebis sichqare iyos nuli`);
    }else{
        this.speed = speed;
        console.log(`emergency brake`);
    }
    this.check_motion();
}   
    status () {
            console.log(`manqana ${this.brand} ${this.model} modzraobs ${this.speed} km/st sichqarit da statusia: ${this.motion}`)
        }
    }

const car = new Car('honda', 'cr-v')
car.showCar()
car.check_motion()
car.accelerate(50)
car.brake(100)
car.brake(10)
car.status()
car.emergency_brake(5)
car.emergency_brake(0)
car.status()


// davaleba 4

const value = 15;
const promise = new Promise ((resolve,reject) => {
    if (value === 15) {
        resolve("value is 15");
    }else {
        reject("error");
    }
})
promise
   .then((val) => console.log(val))
   .catch((error) => console.log(error))
console.log("promis is async");