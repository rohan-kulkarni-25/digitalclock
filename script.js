setInterval(function () {
    const dateNow = new Date();
    document.getElementById('date').innerText = dateNow.getDate();
    document.getElementById('month').innerText = dateNow.getMonth() + 1;
    document.getElementById('year').innerText = dateNow.getFullYear();
    document.getElementById('hour').innerText = dateNow.getHours();
    document.getElementById('min').innerText = dateNow.getMinutes();
    document.getElementById('sec').innerText = dateNow.getSeconds();
}, 1000);
