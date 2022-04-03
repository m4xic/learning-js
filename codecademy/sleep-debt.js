const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

function givenNight(night) {
    switch (night) {
        case 0:
            return 6;
        case 1:
            return 7;
        case 2:
            return 6.5;
        case 3:
            return 8;
        case 4:
            return 7;
        case 5:
            return 9;
        case 6:
            return 10;
        default:
            console.log('not a day')
    }
}

const getActualSleepHours = () => {
    let weeklySleepHours = 0;
    for (let i = 0; i < 7; i++) {
        weeklySleepHours += givenNight(i);
    }
    return weeklySleepHours;
}

const getIdealSleepHours = (idealHours) => {
    return idealHours * 7;
}

function calculateSleepDebt() {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(9);

    console.log(`${actualSleepHours} hours slept / ${idealSleepHours} hours needed`);
    if (actualSleepHours > idealSleepHours) {
        console.log(`You got ${actualSleepHours - idealSleepHours} hours more sleep than you needed. Great work!`);
    } else if (actualSleepHours < idealSleepHours) {
        console.log(`You got ${idealSleepHours - actualSleepHours} hours less sleep than you needed. Log off earlier!`);
    } else {
        console.log('You got the perfect amount of sleep. Good job!');
    }
}

calculateSleepDebt();