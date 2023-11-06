const findTheOldest = function (persons) {
    let ages = 0;
    let oldest = null
    const currentDate = new Date();
    const presentYear = currentDate.getFullYear();
    for (const person of persons) {
        if (person.yearOfDeath != null) {
            if ((person.yearOfDeath - person.yearOfBirth) > ages) {
                ages = person.yearOfDeath - person.yearOfBirth
                oldest = person
            }
        }
        else {
            if ((presentYear - person.yearOfBirth) > ages) {
                ages = presentYear - person.yearOfBirth
                oldest = person
            }
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
