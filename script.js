document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const institution = document.getElementById('institution').value;
    const skills = document.getElementById('skills').value;

    const registrationData = {
        name,
        email,
        institution,
        skills
    };  

    // Store data in local storage
    localStorage.setItem('registrationData', JSON.stringify(registrationData));

    alert('Registration successful!');
    document.getElementById('registrationForm').reset();

});
