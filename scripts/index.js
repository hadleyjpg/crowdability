/**
 * 
 * CHART NAVIGATION
 *  
 */

const twoNine = document.getElementById('twoNine');
const elevenNine = document.getElementById('elevenNine');
const image29 = document.getElementById('image29');
const image119 = document.getElementById('image119');

twoNine.addEventListener('click', () => {
    image29.classList.remove('hide');
    image119.classList.add('hide');
});

elevenNine.addEventListener('click', () => {
    image29.classList.add('hide');
    image119.classList.remove('hide');
});



/**
 * 
 * VALIDATORS
 *  
 */

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("mail");


// The telephone number must be in the format of (555) 555-5555
function isValidTelephone(phone) {
    return /^\D*\d{3}\D*\d{3}\D*\d{4}\D*$/.test(phone);
}

// Must be a valid email address
function isValidEmail(mail) {
return /^[^@]+@[^@.]+\.[a-z]+$/i.test(mail);
}

/**
 * 
 * FORMATTING FUNCTIONS
 * 
 */

function formatTelephone(text) {
    const expression = /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/;
    return text.replace(expression, "($1) $2-$3");
  }

function createListener(validator) {
return e => {
    const text = e.target.value;
    const valid = validator(text);
};
};

phoneInput.addEventListener("input", createListener(isValidTelephone));

phoneInput.addEventListener("blur", e => {
  e.target.value = formatTelephone(e.target.value);
});

emailInput.addEventListener("input", createListener(isValidEmail));