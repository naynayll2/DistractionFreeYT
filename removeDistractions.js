function mutationCallback(mutationList, observer) {
    console.log("in mutation callback");
    for (const mutation of mutationList) {
        if (mutation.type === "childList") {
            removeDistractions();
        }
    }
}

function removeDistractions() {
    const grid = document.querySelector("#contents.ytd-rich-grid-renderer");
    const chips = document.querySelector("#chips.ytd-feed-filter-chip-bar-renderer");
    const sidebar = document.querySelector("#contentContainer.tp-yt-app-drawer");
    const container = document.querySelector("#container.style-scope.ytd-masthead");
    const end = document.querySelector("#end.style-scope.ytd-masthead");
    const search = document.getElementById('search');

    if (end) {
        end.style.display = 'none';
    }
    if (search) {
        const width = screen.width
    }
    if (container) {
        container.style.flexDirection = "column";
    }
    if (sidebar) {
        sidebar.style.display = 'none';
    }
    if (chips) {
        chips.style.display = 'none';
    }
    if (grid) {
        grid.style.display = 'none';
    }
 
    console.log("Distractions removed");
}

function observeDOM() {
    const observer = new MutationObserver(mutationCallback);
    const config = {
        childList : true,
        subtree : true
    };
    console.log("observing");
    observer.observe(document.documentElement, config);
}

console.log("executing");

if (document.readyState !== "loading") {
    console.log("ready");
    observeDOM();
} else {
    document.addEventListener("DOMContentLoaded", function () {
        console.log("in listener callback");
        observeDOM();
    });
}