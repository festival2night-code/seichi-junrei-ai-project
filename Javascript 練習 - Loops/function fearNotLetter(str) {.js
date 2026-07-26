function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let startIndex = alphabet.indexOf(str[0]);
    let endIndex = alphabet.indexOf(str[str.length - 1]);
    alphabet = alphabet.slice(startIndex, endIndex + 1);
    for (let i = 0; i < alphabet.length; i++) {
        if (str.includes(alphabet[i]) === false) {
            return alphabet[i];
        }
    }
    return undefined;
}

/*console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));*/


const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData) {
    const parsedItems = [];
    const seenSkus = new Set();
    for (let i = 0; i < rawData.length; i++) {
        const parts = rawData[i].split("|");
        const sku = parts[0];
        if (seenSkus.has(sku)) {
            continue;
        }
        seenSkus.add(sku);
        parsedItems.push({
            sku: sku,
            name: parts[1],
            qty: Number(parts[2]),
            expires: parts[3],
            zone: parts[4] || "general"
        });
    }
    return parsedItems;
}

function planRestock(pantry, shipment) {
    const parsedShipment = typeof shipment[0] === "string"
        ? parseShipment(shipment)
        : shipment.map((item) => ({
            sku: item.sku,
            name: item.name,
            qty: Number(item.qty),
            expires: item.expires,
            zone: item.zone || "general"
        }));
    const pantrySkus = new Set();
    const actions = [];

    for (let i = 0; i < pantry.length; i++) {
        pantrySkus.add(pantry[i].sku);
    }

    for (let i = 0; i < parsedShipment.length; i++) {
        const item = parsedShipment[i];
        let type;

        if (item.qty <= 0) {
            type = "discard";
        } else if (pantrySkus.has(item.sku)) {
            type = "restock";
        } else {
            type = "donate";
        }

        actions.push({ type, item });
    }

    return actions;
}

function groupByZone(actions) {
    const grouped = {};

    for (let i = 0; i < actions.length; i++) {
        const action = actions[i];
        const zone = action.item.zone;

        if (!grouped[zone]) {
            grouped[zone] = [];
        }

        grouped[zone].push(action);
    }

    return grouped;
}

function clonePantry(pantry) {
    const copy = [];

    for (let i = 0; i < pantry.length; i++) {
        const item = pantry[i];
        copy.push({
            sku: item.sku,
            name: item.name,
            qty: item.qty,
            expires: item.expires,
            zone: item.zone
        });
    }

    return copy;
}

const pantryCopy = clonePantry(pantry);
const actions = planRestock(pantryCopy, rawData);
const groupedByZone = groupByZone(actions);

console.log(groupedByZone);