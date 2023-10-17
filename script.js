$('.fa-bars').click(function() {
    $('.navbar').slideToggle();
});


//market-link
const marketLink = document.getElementById("market-link");
const graphLink = document.getElementById("graph-link");
const dealLink = document.getElementById("deal-link");
const openDealBtn = document.getElementById("open-deal-btn");
const closeDealBtn = document.getElementById("close-deal-btn");

const marketSection = document.getElementById("market-section");
const graphSection = document.getElementById("graph-section");
const dealSection = document.getElementById("deal-section");
const openDealSection = document.getElementById("open-deal-section");
const closeDealSection = document.getElementById("close-deal-section");

function showSection(section) {
    marketSection.style.display = "none";
    graphSection.style.display = "none";
    dealSection.style.display = "none";

    section.style.display = "block";
}


function showOpenDeal() {
    openDealSection.style.display = "block";
    closeDealSection.style.display = "none";
}

function showCloseDeal() {
    openDealSection.style.display = "none";
    closeDealSection.style.display = "block";
}

showOpenDeal();

marketLink.addEventListener("click", function() {
    showSection(marketSection);
});

graphLink.addEventListener("click", function() {
    showSection(graphSection);
});

dealLink.addEventListener("click", function() {
    showSection(dealSection);
});


openDealBtn.addEventListener("click", showOpenDeal);
closeDealBtn.addEventListener("click", showCloseDeal);

//