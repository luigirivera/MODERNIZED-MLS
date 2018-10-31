function responsiveIcon() {
    var x = document.getElementById("navigationMenu");
    if (x.className === "navigationMenu") {
        x.className += " responsive";
    } else {
        x.className = "navigationMenu";
    }
}
