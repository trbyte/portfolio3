const checkbox = document.querySelector(".checkbox");

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
});

document.body.classList.remove("dark-mode");
checkbox.checked = false;

const sections = document.querySelectorAll("section");
const editBtn = document.getElementById("editBtn");
const saveBtn = document.getElementById("saveBtn");


if (editBtn && saveBtn) {
    editBtn.addEventListener("click", () => {
        sections.forEach(sec => sec.contentEditable = "true");
        editBtn.style.display = "none";
        saveBtn.style.display = "block";
        if (sections[0]) sections[0].focus();
    });
    saveBtn.addEventListener("click", () => {
        sections.forEach(sec => sec.contentEditable = "false");
        editBtn.style.display = "block";
        saveBtn.style.display = "none";
    });
}