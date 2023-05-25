function toggleDistractions() {
    let allowDistractions = browser.storage.local.get("distractions");
    allowDistractions.then(toggleDistractionsHelper);
}

function storageError(error) {
    console.log(`error: ${error}`)
}

function toggleDistractionsHelper(status) {
    browser.storage.local.set({
        "distractions" : !status
    });
}