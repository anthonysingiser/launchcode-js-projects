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
    const rocketImage = document.getElementById('rocket');

    function moveRocket(direction, amount) {
        var property = direction === 'up' || direction === 'down' ? 'bottom' : 'left';
        var current = parseInt(rocketImage.style[property], 10) || 0;
        var change = direction === 'up' || direction === 'right' ? amount : -amount;
        var newPropValue = current + change;
    
        // Check if the new position is within the backgroundImage
        if (property === 'left') {
            if (newPropValue >= 0 && newPropValue <= shuttleBackground.offsetWidth - rocketImage.offsetWidth) {
                rocketImage.style[property] = newPropValue + 'px';
            }
        } else { // 'bottom'
            if (newPropValue >= 0 && newPropValue <= shuttleBackground.offsetHeight - rocketImage.offsetHeight) {
                rocketImage.style[property] = newPropValue + 'px';
            }
        }
    }

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

        rocketImage.style.bottom = '0px';
        rocketImage.style.left = '0px';
    });
    abortButton.addEventListener('click', function () {
        const response = window.confirm('Confirm that you want to abort the mission.');
        if (response) {
            flightStatus.innerText = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerText = 0;

            rocketImage.style.bottom = '0px';
            rocketImage.style.left = '0px';
        }
    });
    upButton.addEventListener('click', function() {
        spaceShuttleHeight.innerText =  Number(spaceShuttleHeight.innerText) + 10000;
    });
    downButton.addEventListener('click', function() {
        spaceShuttleHeight.innerText = Number(spaceShuttleHeight.innerText) - 10000;
    });
    rightButton.addEventListener('click', function() {
        moveRocket('right', 10);
    })
    leftButton.addEventListener('click', function() {
        moveRocket('left', 10);
    })
    upButton.addEventListener('click', function() {
        moveRocket('up', 10);
    })
    downButton.addEventListener('click', function() {
        moveRocket('down', 10);
    })

}

window.addEventListener('load', init);