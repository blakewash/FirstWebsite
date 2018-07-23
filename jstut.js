document.write("typing this from an external js file.  Did it work?");

function button_click(element) {
    alert("You clicked the button!")
    element.style.backgroundColor = "red";
    element.style.color = "green";
    document.getElementsByTagName("H1")[0].style.color = "blue";
}