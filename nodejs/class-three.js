// simple loops in js
// for
// stars print in trangle but decrease pattern

// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

// for(let i = 10; i > 0; i--){
//     console.log(i);
// }

// for(let i = 0; i < 10; i++){
//     console.log("*".repeat(i));
// }

// for(let i = 10; i > 0; i--){
//     console.log("*".repeat(i));
// }

// for(let i = 0; i < 10; i++){
//     console.log(i);
//     if(i == 5){
//         break;
//     }
// }

// for(let i = 0; i < 10; i++){
//     if(i == 5){
//         continue;
//     }
//     console.log(i);
// }

// for(let i = 0; i < 10; i++){
//     if(i == 5){
//         break;
//     }
//     console.log(i);
// }

// for(let i = 0; i < 10; i++){
//     if(i == 5){
//         continue;
//     }
//     console.log(i);
// }

// for(let i = 0; i < 10; i++){
//     if(i == 5){
//         break;
//     }
//     console.log(i);
// }

// for(let i = 0; i < 10; i++){
//     if(i == 5){
//         continue;
//     }
//     console.log(i);
// }

// for(let i = 0; i < 10; i++){
//     if(i == 5){
//         break;
//     }
//     console.log(i);
// }


// while
// let i = 0;
// while(i < 10){
//     console.log(i);
//     i++;
// }

// print a table of 10 by using for loop

// for(let i = 1; i <= 10; i++){
//     console.log( 10 + "x" + i +"=" + 10 * i);
// }
// function table(x){
//     for(let i = 1; i <= 10; i++){
//         console.log( x + "x" + i +"=" + x * i);
//     }
// }
// table(1)
// table(2)
// table(3)
// table(4)
// table(5)
// table(6)
// table(7)
// table(8)
// table(9)
// table(10)



// create a blood donation system in js
class Donor {
    constructor(name, age, bloodType, contact) {
        this.name = name;
        this.age = age;
        this.bloodType = bloodType;
        this.contact = contact;
    }
}

class BloodDonationSystem {
    constructor() {
        this.donors = [];
    }

    addDonor(name, age, bloodType, contact) {
        const newDonor = new Donor(name, age, bloodType, contact);
        this.donors.push(newDonor);
        console.log(`Donor ${name} added successfully.`);
    }

    findDonorsByBloodType(bloodType) {
        const matchedDonors = this.donors.filter(donor => donor.bloodType === bloodType);
        if (matchedDonors.length > 0) {
            console.log(`Donors with blood type ${bloodType}:`);
            matchedDonors.forEach(donor => {
                console.log(`Name: ${donor.name}, Age: ${donor.age}, Contact: ${donor.contact}`);
            });
        } else {
            console.log(`No donors found with blood type ${bloodType}.`);
        }
    }

    displayAllDonors() {
        if (this.donors.length > 0) {
            console.log("List of all donors:");
            this.donors.forEach(donor => {
                console.log(`Name: ${donor.name}, Age: ${donor.age}, Blood Type: ${donor.bloodType}, Contact: ${donor.contact}`);
            });
        } else {
            console.log("No donors available.");
        }
    }
}

// Example usage
const bloodDonationSystem = new BloodDonationSystem();
bloodDonationSystem.addDonor("Alice", 30, "A+", "123-456-7890");
bloodDonationSystem.addDonor("Bob", 25, "O-", "987-654-3210");
bloodDonationSystem.addDonor("Charlie", 35, "A+", "555-555-5555");

bloodDonationSystem.findDonorsByBloodType("A+");
bloodDonationSystem.displayAllDonors();

