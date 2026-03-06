const layoutSelect = document.getElementById("layoutSelect");
const container = document.getElementById("container");

layoutSelect.addEventListener("change", function () {
    container.className = "layout " + this.value;
});