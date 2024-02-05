(function () {
    const colors = ['#1a237e', '#1e304d', '#0d243d', '#0a1f31', '#1e88e5'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];

    // Set background color
    document.querySelector('.gone-container').style.backgroundColor = randomColor;

})();
