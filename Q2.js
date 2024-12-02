function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritPointsPerKm = 5;
    const maxDemeritPoints = 12;
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        let demeritPoints = Math.floor((speed - speedLimit) / demeritPointsPerKm);
        if (demeritPoints > maxDemeritPoints) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}


