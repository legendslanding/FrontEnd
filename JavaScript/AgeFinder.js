function classifyPerson(age) {
    if (age < 13) {
        return "kid";
    } else if (age >= 13 && age <= 19) {
        return "teen";
    } else {
        return "adult";
    }
}

// Example usage:
var age = 15;
var classification = classifyPerson(age);
console.log("Person with age " + age + " is a " + classification);
