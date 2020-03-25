// FORSIDE
let burgermenu = document.querySelector("#menuknap");
let lukkeknap = document.querySelector("#lukkeknap");
let dropDwonMenu = document.querySelector("#menu");





window.addEventListener("load", () => {

    burgermenu.addEventListener("click", clickBurgermenu)

});

function clickBurgermenu() {
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



//Søjlediagram
const values = [21.42,
            18.76,
            49.06,
            55.86,
            65.66,
            86.38
        ];

const total = values.reduce((sum, value) => sum + value);
const output = document.querySelector("#output");

document.querySelectorAll(".bars line").forEach((bar, i) => {
    bar.setAttribute("y1", 100 - values[i]);
    //            bar.setAttribute("data-value", values[i]);
    //            bar.setAttribute("data-procent", values[i] / total * 100);
    bar.addEventListener("mouseover", e => vis(e))
    bar.addEventListener("mouseout", skjul)
});

function vis(e) {
    output.textContent = e.target.dataset.value + " millioner liter";
    output.style.display = "block";
    window.addEventListener("mouseover", followMouse);
}

function followMouse(e) {
    output.style.top = (e.clientY - 50) + 'px';
    output.style.left = (e.clientX) + 'px';
}

function skjul() {
    output.style.display = "none";
    window.removeEventListener("mouseover", followMouse);
}
