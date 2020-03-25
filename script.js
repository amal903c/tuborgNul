// FORSIDE
let burgermenu = document.querySelector("#menuknap");
let lukkeknap = document.querySelector("#lukkeknap");
let dropDwonMenu = document.querySelector("#menu");





window.addEventListener("load", () => {

    burgermenu.addEventListener("click", clickBurgermenu)

});

function clickBurgermenu(){
    console.log("Jeg har klikket på burgermenuen")

    // gør så man kan se lukkeknappen
    burgermenu.classList.add("hide");
    lukkeknap.classList.remove("hide");

    // menu kommer frem
    dropDwonMenu.classList.remove("hidden");

    // klik på lukkeknap
    lukkeknap.addEventListener("click", () => {
        console.log("Jeg har klikket på lukkeknap")

    burgermenu.classList.remove("hide");
    lukkeknap.classList.add("hide");
    dropDwonMenu.classList.add("hidden");
    })


}









// FORSIDE slut


// Det handler om hyggen
