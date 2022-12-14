// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

const submitButton = document.getElementById('submit-button');

const page = document.getElementById('contact-page')

submitButton.onclick = onSubmitButtonClicked;

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

function onSubmitButtonClicked(event) {
    event.preventDefault();

    const target = event.target;

    console.log(target);

    const page = document.getElementById('contact-page')
    page.innerHTML = "Thank you for your message!"
}

