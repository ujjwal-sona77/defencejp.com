const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var fixed_container = document.querySelector(".fixed");
var elems = document.querySelectorAll(".elem-container .elem");
var container_elem = document.querySelector(".elem-container")

container_elem.addEventListener("mouseenter" , function() {
    fixed_container.style.display = "block"
});

container_elem.addEventListener("mouseleave" , function() {
    fixed_container.style.display = "none"
});

var elem1 = document.querySelector("#elem1");
elem1.addEventListener("mouseenter" , function() {
    var image = elem1.getAttribute("data-image")
    fixed_container.style.backgroundImage = `url(${image})`;
})

