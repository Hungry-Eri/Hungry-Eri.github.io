function toggleTheme() {
    bodyvar = document.querySelector("body")
    // bodyvar.classList.toggle("toggleTheme")
    bodyvar.classList.toggle("dark-mode")
}

button = document.getElementById("toggleButton")
button.onclick = toggleTheme;