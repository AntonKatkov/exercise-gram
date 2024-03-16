document.addEventListener('DOMContentLoaded', (event) => {
    let darkModeSwitch = document.getElementById('darkModeSwitch');
    if (darkModeSwitch) { // Überprüfe, ob das Element existiert
        // Überprüfe den gespeicherten Dark Mode Zustand
        if (localStorage.getItem('darkMode') === 'enabled') {
            darkModeSwitch.checked = true;
            toggleDarkMode(true);
        } else {
            darkModeSwitch.checked = false;
            toggleDarkMode(false);
        }
        
        darkModeSwitch.addEventListener('change', function() {
            toggleDarkMode(this.checked);
        });
    }
});

function toggleDarkMode(isEnabled) {

    if (isEnabled) {
        document.body.classList.add("dark-mode");
        localStorage.setItem('darkMode', 'enabled');


    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem('darkMode', 'disabled');
    }
}



function toggleDarkMode(isEnabled) {
    if (isEnabled) {
        document.body.classList.add("dark-mode");
        localStorage.setItem('darkMode', 'enabled');
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem('darkMode', 'disabled');
    }
}

