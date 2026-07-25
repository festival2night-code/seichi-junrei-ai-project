let squad = [];
let firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
};

let remainingCrew = [
    { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
    { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
    { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
    { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
    { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
    { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
    { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
    { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
    { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 }
];

function addCrewMember(crew, astronaut) {
    for (let idCheck in crew) {
        if (crew[idCheck].id === astronaut.id) {
            console.log(`Duplicate ID: ${astronaut.id}`);
            return;
        }
    }
    crew.push(astronaut);
}

addCrewMember(squad, firstAstronaut);

for (let count in remainingCrew) {
    addCrewMember(squad, remainingCrew[count]);
}

function swapCrewMembers(crew, fromIndex, toIndex) {
    let updatedCrew = crew.slice();
    if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) {
        console.log("Invalid crew indices");
        return;
    }
    updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];
    return updatedCrew;
}

let updatedSquad = swapCrewMembers(squad, 2, 5);

function sortByPriorityDescending(crew) {
    for (let i = 0; i < crew.length - 1; i++) {
        for (let j = 0; j < crew.length - 1 - i; j++) {
            if (crew[j].priority < crew[j + 1].priority) {
                const temp = crew[j];
                crew[j] = crew[j + 1];
                crew[j + 1] = temp;
            }
        }
    }
}

function getEVAReadyCrew(crew) {
    let eligible = [];
    for (let count in crew) {
        if (crew[count].isEVAEligible) {
            eligible.push(crew[count]);
        }
    }
    sortByPriorityDescending(eligible);
    return eligible;
}

let EVAReadySquad = getEVAReadyCrew(updatedSquad);

function chunkCrew(crew, size) {
    if (size <= 0) {
        console.log("Chunk size must be >= 1");
        return;
    }
    const chunks = [];
    for (let i = 0; i < crew.length; i += size) {
        chunks.push(crew.slice(i, i + size));
    }
    return chunks;
}

let EVAChunks = chunkCrew(EVAReadySquad, 3);

/*for (let i = 0; i < EVAChunks.length; i++) {
        console.log(`Chunk ${i + 1}:`);
        for (let j = 0; j < EVAChunks[i].length; j++) {
                console.log(EVAChunks[i][j].name);
        }
} */

function printCrewSummary(crew) {
    let sorted = crew.slice();
    sortByPriorityDescending(sorted);
    for (let count in sorted) {
        console.log(sorted[count].name);
    }
}

printCrewSummary(updatedSquad);
