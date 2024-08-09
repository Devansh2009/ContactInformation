function handleEducationChange(selectElement) {
    var otherEducationInput = document.getElementById('other-education');
    if (selectElement.value === 'other') {
        otherEducationInput.style.display = 'block';
        otherEducationInput.required = true;
    } else {
        otherEducationInput.style.display = 'none';
        otherEducationInput.required = false;
    }
}
