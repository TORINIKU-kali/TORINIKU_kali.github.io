const dark = document.querySelector('#darkBTN');

dark.addEventListener('click', () => {
    document.body.classList.toggle('darkMode');

    if(dark.textContent === 'LightMode'){
        dark.textContent = 'DarkMode';
    } else {
        dark.textContent = 'LightMode';
    }
});