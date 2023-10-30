const userForm = document.getElementById('userForm');
const userCard = document.getElementById('userCard');
const themeSelector = document.getElementById('theme');

// Initialize theme
setTheme(localStorage.getItem('theme') || 'light');

userForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const village = document.getElementById('village').value;
    const city = document.getElementById('city').value;

    const userData = { name, phone, village, city };
    localStorage.setItem('userData', JSON.stringify(userData));

    displayUserCard(userData);
});

themeSelector.addEventListener('change', function () {
    const selectedTheme = themeSelector.value;
    setTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme);
});

function displayUserCard(data) {
    userCard.innerHTML = `
        <h2>${data.name}</h2>
        <p>Phone: ${data.phone}</p>
        <p>Village: ${data.village}</p>
        <p>City: ${data.city}</p>
    `;
    userCard.style.display = 'block';
}

function setTheme(theme) {
    document.body.className = theme;
    themeSelector.value = theme;
}

// Check if user data exists in local storage
const storedUserData = JSON.parse(localStorage.getItem('userData'));
if (storedUserData) {
    displayUserCard(storedUserData);
}

