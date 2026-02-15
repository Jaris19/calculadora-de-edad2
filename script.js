document.getElementById("calculate").addEventListener("click", function () {

    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);

    // Validaciones básicas
    if (!day || !month || !year) {
        alert("Por favor completa todos los campos");
        return;
    }

    if (day > 31 || day < 1) {
        alert("El día no puede ser mayor a 31");
        return;
    }

    if (month > 12 || month < 1) {
        alert("El mes no puede ser mayor a 12");
        return;
    }

    let today = new Date();
    let birthDate = new Date(year, month - 1, day);

    if (birthDate > today) {
        alert("La fecha no puede ser futura");
        return;
    }

    let years = today.getFullYear() - year;
    let months = today.getMonth() - (month - 1);
    let days = today.getDate() - day;

    if (days < 0) {
        months--;
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;

});
