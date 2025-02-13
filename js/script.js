// Ini file javasript
document.addEventListener("DOMContentLoaded", function () {
    let isCelcius = true; // Default mode: Celcius ke Fahrenheit

    let validateForm = function () {
        let input = document.getElementById('main-input');
        let result = document.getElementById('main-result');
        let caraKonversi = document.getElementById('cara-konversi');

        // Debugging: Pastikan elemen ditemukan
        if (!input || !result || !caraKonversi) {
            console.error("Elemen tidak ditemukan!");
            return;
        }

        console.log("Input value:", input.value);

        if (input.value === '') {
            alert('Tolong isi inputan');
        } else {
            let calc;
            if (isCelcius) {
                calc = convertToFahrenheit(input.value);
                result.value = calc;
                caraKonversi.value = input.value + '°C × 9/5 + 32 = ' + calc + '°F';
            } else {
                calc = convertToCelcius(input.value);
                result.value = calc;
                caraKonversi.value = '(' + input.value + '°F - 32) × 5/9 = ' + calc + '°C';
            }
            console.log('Berhasil di Eksekusi');
        }
    };

    let convertToFahrenheit = function (input) {
        return (input * 9 / 5) + 32;
    };

    let convertToCelcius = function (input) {
        return (input - 32) * 5 / 9;
    };

    let resetButton = function () {
        document.getElementById('main-input').value = '';
        document.getElementById('main-result').value = '';
        document.getElementById('cara-konversi').value = '';
    };

    let reverseButton = function () {
        isCelcius = !isCelcius;

        let inputLabel = document.querySelector("label[for='main-input']");
        let resultLabel = document.querySelector("label[for='main-result']");
        let inputField = document.getElementById('main-input');

        if (!inputLabel || !resultLabel || !inputField) {
            console.error("Label elemen tidak ditemukan!");
            return;
        }

        if (isCelcius) {
            inputLabel.innerHTML = "Celcius :";
            resultLabel.innerHTML = "Fahrenheit :";
            inputField.placeholder = "Masukkan suhu dalam Celcius"; // Ubah placeholder
        } else {
            inputLabel.innerHTML = "Fahrenheit :";
            resultLabel.innerHTML = "Celcius :";
            inputField.placeholder = "Masukkan suhu dalam Fahrenheit"; // Ubah placeholder
        }

        resetButton(); // Reset input saat mode diubah
    };

    // Pasang event listener ke tombol
    document.querySelector(".bg-confirm").addEventListener("click", validateForm);
    document.querySelector(".bg-reset").addEventListener("click", resetButton);
    document.querySelector(".bg-reverse").addEventListener("click", reverseButton);
});