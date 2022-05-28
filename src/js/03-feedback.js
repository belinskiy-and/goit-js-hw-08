const feedbackForm = document.querySelector(".feedback-form");
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

const getStorageData = () => {
    try {
        dataJSON = localStorage.getItem("feedback-form-state");
        data = JSON.parse(dataJSON);
        
        emailInput.value = data.email;
        messageInput.value = data.message;
    }
    catch (error) {
        console.log(error);
    }    
}

const inputEvents = event => {
    const data = {
        email: emailInput.value,
        message: messageInput.value,
    }

    try {
        dataJSON = JSON.stringify(data);
        localStorage.setItem("feedback-form-state", dataJSON);
    }
    catch (error) {
        console.log(error);
    }    
}

const submitEvents = event => {
    event.preventDefault();

    try {
        emailInput.value = "";
        messageInput.value = "";

        dataJSON = localStorage.getItem("feedback-form-state");
        data = JSON.parse(dataJSON);
        
        console.log(data);

        localStorage.removeItem("feedback-form-state");        
    }
    catch (error) {
        console.log(error);
    }    
}


getStorageData();
feedbackForm.addEventListener("keyup", _.throttle(inputEvents), 500);
// feedbackForm.addEventListener("keyup", inputEvents);
feedbackForm.addEventListener("submit", submitEvents);

