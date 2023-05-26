function mutationCallback(mutationList, observer) {
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
    const search = document.querySelector('#search.style-scope.ytd-masthead');
    const videoRecommended = document.querySelector('#secondary.style-scope.ytd-watch-flexy');
    const comments = document.querySelector('#sections.style-scope.ytd-comments')
    const url =  window.location.href;
    const videoPage = url.includes('watch');

    console.log(url);
    if (end) {
        end.style.display = 'none';
    }

    if (comments) {
        comments.style.display = 'none'
    }
    if (videoPage && videoRecommended) {
        videoRecommended.style.display = 'none';
    }
    if (search) {
        const width = screen.width;
        search.style.width = Math.floor(width / 3) + 'px';
    }
    if (container && !videoPage) {
        container.style.flexDirection = "column";
    } else if (videoPage) {
        container.style.flexDirection = "row";
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