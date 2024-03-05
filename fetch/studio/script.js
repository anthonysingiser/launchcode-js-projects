//TODO: Add Your Code Below
window.addEventListener("load", function () {
    let container = this.document.getElementById("container")
    let data = fetch("https://handlers.education.launchcode.org/static/astronauts.json")
        .then((res) => {
            if (res.ok) {
                return res.json()
            }
            console.log(data)
        })
        .then(res => {
            res.forEach(element => {
                container.innerHTML += `
            <div class="astronaut">
            <h3>${element.firstName} ${element.lastName}</h3>
            <ul>
                <li>Hours in space = ${element.hoursInSpace} hours</li>
                <li>Active = ${element.active}</li>
                <li>Skills = ${element.skills} </li>
            </ul>
            <img class="avatar" src=${element.picture}>
            </div>
            `
            });
        })
})