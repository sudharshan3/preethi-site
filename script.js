function openPopup() {
    var popup = document.querySelector('.popup');
    var overlay = document.querySelector('.popup-overlay');
    if (popup && overlay) {
        popup.classList.add('active');
        overlay.classList.add('active');
    } else {
        console.error("Popup or overlay element not found.");
    }
}

function closePopup() {
    var popup = document.querySelector('.popup');
    var overlay = document.querySelector('.popup-overlay');
    if (popup && overlay) {
        popup.classList.remove('active');
        overlay.classList.remove('active');
    } else {
        console.error("Popup or overlay element not found.");
    }
}
