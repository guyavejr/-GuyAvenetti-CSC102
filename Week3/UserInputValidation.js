function checkInputsAndShowSecretMessage() {
    const firstName = document.getElementById('firstNameInput').value.trim();
    const lastName = document.getElementById('lastNameInput').value.trim();
    const zipCode = document.getElementById('zipCodeInput').value.trim();

    // Combine first name and last name
    const fullName = firstName + ' ' + lastName;

    // Check if the full name has more than 20 characters
    if (fullName.length > 20) {
        alert('Full name cannot exceed 20 characters.');
        return;
    }

    // Check if the zip code has exactly 5 digits
    if (!/^\d{5}$/.test(zipCode)) {
        alert('Zip code must contain exactly 5 digits. Please re-enter zip code.');
        return;
    }

    // If all inputs are valid, display the secret message
    const secretMessage = "Congratulations! You did not mess up your own name!";
    document.getElementById('messageDisplay').textContent = secretMessage;
}