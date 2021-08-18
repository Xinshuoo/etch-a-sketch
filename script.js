const container = document.querySelector("#container");

const div = document.createElement("div");

for (let i = 0; i < 16; i++) {
    div.classList.add(`div${i + 1}`);
    container.appendChild(div)
}