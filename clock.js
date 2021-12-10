console.log("Welcome to the JavaScript Clock!");
setInterval(() =>{
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

    hrot = ((hours * 30) + (minutes / 2));
    mrot = ((minutes * 6)); //+ (seconds / 10));
    srot = ((seconds * 6));

    hour.style.transform = `rotate(${hrot}deg)`;
    minute.style.transform = `rotate(${mrot}deg)`;
    second.style.transform = `rotate(${srot}deg)`;

},1000);