function calculateBMI() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    if (isNaN(weight) || isNaN(height)) {
        alert("Please enter valid numbers for weight and height.");
        return;
    }
    let bmi = weight / (height * height);
    displayResult(bmi);
}

function displayResult(bmi) {
    document.getElementById('bmi-value').innerText = bmi.toFixed(1);
    
    // Show the result section
    document.getElementById('result-section').style.display = 'block';

    // Additional logic if you want to add condition-based messages for different BMI ranges
    if (bmi >= 23 && bmi < 25) {
        document.querySelector("#result-section h2").innerText = "Berat Badan Lebih";
        document.querySelector("#result-section p").innerText = "Anda memiliki berat badan berlebih";
    } else {
        // Add conditions for other BMI ranges if needed
    }
}

function resetFields() {
    document.getElementById('weight').value = '';
    document.getElementById('age').value = '';
    document.getElementById('height').value = '';
    document.querySelector('input[name="gender"][value="Pria"]').checked = true;
    document.getElementById('result-section').style.display = 'none';
}

function downloadBMIResult() {
    alert("Download Hasil BMI (functionality to be implemented)");
}

function consultNutritionist() {
    alert("Konsultasi Ahli Gizi Via Aplikasi (functionality to be implemented)");
}

function registerNutritionist() {
    alert("Registrasi Online Ahli Gizi (functionality to be implemented)");
}

function consultDoctor() {
    alert("Konsultasi Dokter Via Aplikasi (functionality to be implemented)");
}

function registerDoctor() {
    alert("Registrasi Online Sekarang (functionality to be implemented)");
}
