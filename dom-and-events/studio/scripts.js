// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    const takeOffButton = document.getElementById('takeoff');
    const landButton = document.getElementById('landing');
    const abortButton = document.getElementById('missionAbort');
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');
    const rightButton = document.getElementById('right');
    const leftButton = document.getElementById('left');

    takeOffButton.addEventListener('click', function() {
        const response = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (response) {
            flightStatus.innerText = 'Shuttle in flight.';
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerText = 10000;
        }
    });
    landButton.addEventListener('click', function() {
        window.alert('The shuttle is landing. Landning gear engaged.');
        flightStatus.innerText = 'The shuttle has landed';
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.innerText = 0;
    });
    abortButton.addEventListener('click', function () {
        const response = window.confirm('Confirm that you want to abort the mission.');
        if (response) {
            flightStatus.innerText = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerText = 0;
        }
    });
    upButton.addEventListener('click', function() {
        spaceShuttleHeight.innerText =  Number(spaceShuttleHeight.innerText) + 10000;
    });
    downButton.addEventListener('click', function() {
        spaceShuttleHeight.innerText = Number(spaceShuttleHeight.innerText) - 10000;
    });

}

window.addEventListener('load', init);