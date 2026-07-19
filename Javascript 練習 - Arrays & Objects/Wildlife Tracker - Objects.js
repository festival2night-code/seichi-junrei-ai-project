const tiger = {
    species: "Tiger",
    age: 5,
    isEndangered: true,
};

const elephant = {
    species: "Elephant",
    age: 10,
    isEndangered: true,
};

const getSpecies = (animal) => {
    return animal.species;
}
console.log(getSpecies(tiger)); // Output: Tiger

const getAge = (animal) => {
    return animal.age;
}
console.log(getAge(tiger)); // Output: 10


const addHabitat = (animal, habitat) => {
    animal.habitat = habitat;
    return animal;
}
console.log(addHabitat(tiger, "Rainforest"));

const updateAge = (animal, newAge) => {
    animal.age = newAge;
    return animal;
}
console.log(updateAge(elephant, 12)); 

const removeEndangeredStatus = (animal) => {
    delete animal.isEndangered;
    return animal;
}
console.log(removeEndangeredStatus(tiger));

const hasHabitat = (animal) => {
    return animal.hasOwnProperty("habitat");
}
console.log(hasHabitat(tiger));
console.log(hasHabitat(elephant));

const getProperty = (animal, propertyName) => {
    return animal[propertyName];
}
console.log(getProperty(tiger, "species")); // Output: Tiger
console.log(getProperty(elephant, "age")); // Output: 10