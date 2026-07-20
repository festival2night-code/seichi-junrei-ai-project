const Cargo = { containerId: 55, destination: "Carmel", weight: 400, unit: "lb", hazmat: false }
function normalizeUnits(manifest) {
    const normalizedManifest = { ...manifest };

    if (normalizedManifest.unit !== "kg") {
        normalizedManifest.weight = normalizedManifest.weight * 0.45;
        normalizedManifest.unit = "kg";
    };
    return normalizedManifest;
}


function validateManifest(manifest) {
    const validatedManifest = {};
    if (!Object.prototype.hasOwnProperty.call(manifest, 'containerId')) {
        validatedManifest.containerId = "Missing";
    }
    if (!Object.prototype.hasOwnProperty.call(manifest, 'destination')) {
        validatedManifest.destination = "Missing";
    }
    if (!Object.prototype.hasOwnProperty.call(manifest, 'weight')) {
        validatedManifest.weight = "Missing";
    }
    if (!Object.prototype.hasOwnProperty.call(manifest, 'unit')) {
        validatedManifest.unit = "Missing";
    }
    if (!Object.prototype.hasOwnProperty.call(manifest, 'hazmat')) {
        validatedManifest.hazmat = "Missing";
    }
    if (validatedManifest.containerId !== "Missing" && (!Number.isInteger(manifest.containerId) || manifest.containerId < 1)) {
        validatedManifest.containerId = "Invalid";
    }
    if (validatedManifest.destination !== "Missing" && (typeof manifest.destination !== "string" || manifest.destination.trim() === "")) {
        validatedManifest.destination = "Invalid";
    }
    if (validatedManifest.weight !== "Missing" && (typeof manifest.weight !== "number" || Number.isNaN(manifest.weight) || !Number.isFinite(manifest.weight) || manifest.weight <= 0)) {
        validatedManifest.weight = "Invalid";
    }
    if (validatedManifest.unit !== "Missing" && manifest.unit !== "kg" && manifest.unit !== "lb") {
        validatedManifest.unit = "Invalid";
    }
    if (validatedManifest.hazmat !== "Missing" && typeof manifest.hazmat !== "boolean") {
        validatedManifest.hazmat = "Invalid";
    }
    if (Object.keys(validatedManifest).length === 0) {
        return {};
    }else {
        return validatedManifest;
    }
}


function processManifest(manifest) {
    const validatedManifest = validateManifest(manifest);

    if (Object.keys(validatedManifest).length === 0) {
        const normalizedManifest = normalizeUnits(manifest);
        console.log(`Validation success: ${manifest.containerId}`);
        console.log(`Total weight: ${normalizedManifest.weight} ${normalizedManifest.unit}`);
    } else {
        console.log(`Validation error: ${manifest.containerId}`);
        console.log(validatedManifest);
    }  
}
processManifest(Cargo);
