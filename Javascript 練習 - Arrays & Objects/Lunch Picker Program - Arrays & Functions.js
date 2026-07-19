const lunches = [];

function addLunchToEnd(lunches, NewItem) {
    lunches.push(NewItem);
    console.log(`${NewItem} added to the end of the lunch menu.`);
    return lunches;
}

addLunchToEnd(["Pizza", "Tacos"], "Burger");

function addLunchToStart(lunches, NewItem) {
    lunches.unshift(NewItem);
    console.log(`${NewItem} added to the start of the lunch menu.`);
    return lunches;
}

addLunchToStart(["Burger", "Sushi"], "Pizza")

function removeLastLunch(lunches) {
    if (lunches.length > 0) {
        const removedItem = lunches.pop();
        console.log(`${removedItem} removed from the end of the lunch menu.`);
        return lunches;
    } else {
        console.log("No lunches to remove.");
        return lunches;
    }
}

 removeLastLunch(["Stew", "Soup", "Toast"])

function removeFirstLunch(lunches) {
    if (lunches.length > 0) {
        const removedItem = lunches.shift();
        console.log(`${removedItem} removed from the start of the lunch menu.`);
        return lunches;
    } else {
        console.log("No lunches to remove.");
        return lunches;
    }
}

removeLastLunch(["Sushi", "Pizza", "Noodles"]);

function getRandomLunch(lunches) {
    if (lunches.length > 0) {
        const randomIndex = Math.floor(Math.random() * lunches.length);
        const randomLunch = lunches[randomIndex];
        console.log(`Randomly selected lunch: ${randomLunch}`);
        return randomLunch;
    } else {
        console.log("No lunches available.");
        return null;
    }
}

function showLunchMenu(lunches) {
    if (lunches.length > 0) {
        console.log("Menu items: " + lunches.join(", "));
    } else {
        console.log("The menu is empty.");
    }
}

showLunchMenu(["Greens", " Corns", " Beans"])

showLunchMenu(["Pizza", " Burger", " Fries", " Salad"]);