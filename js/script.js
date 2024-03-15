// Get elements from DOM
const $profilePicture = document.getElementById("profile-picture");
const $inputFile = document.getElementById("input-file");

// Monitoring the change of the input element
$inputFile.onchange = function() {
    // Assigning the image element an object created by the input element via URL
    $profilePicture.src = URL.createObjectURL($inputFile.files[0]);
}