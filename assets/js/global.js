function menuClick() {
    let items = document.querySelectorAll(".item")
    items.forEach(item => {
        item.classList.toggle("active");
    });
}
