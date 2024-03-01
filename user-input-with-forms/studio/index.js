document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let formData = {
        name: name,
        email: email,
        message: message
    }
    
    submitForm(formData);
    getAllMessages();
});


function submitForm(formData){
    fetch("https://r31jbh92tk.execute-api.us-east-1.amazonaws.com/dev/submit_message", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
    .then(response => console.log("Success"))
    .catch(error => console.log("Error"))
}

async function getAllMessages(){
    try {
        const response = await fetch("https://r31jbh92tk.execute-api.us-east-1.amazonaws.com/dev/get_all_messages", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        return console.log(response.json());
    } catch (error) {
        return console.log("Error");
    }
}