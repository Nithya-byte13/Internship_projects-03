document.addEventListener('DOMContentLoaded', () => {
    const temperatureInput = document.getElementById('temperature-input');
    const unitSelector = document.getElementById('unit-selector');
    const convertButton = document.getElementById('convert-btn');
    const resultArea = document.getElementById('result-area');
    convertButton.addEventListener('click', () => {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelector.value;
        if (isNaN(temperature)) {
            resultArea.textContent = 'Please enter a valid number!';
            return;
        }
        let convertedTemperature;
        let convertedUnit;
        if (unit === 'celsius') {
            const convertedTemperatureF = (temperature * 9/5) + 32; 
            const convertedTemperatureK = temperature + 273.15; 
            const convertedUnitF = 'Fahrenheit';
            const convertedUnitK = 'Kelvin';
            resultArea.textContent = `Converted: \n${convertedTemperatureF.toFixed(2)}° ${convertedUnitF}\n${convertedTemperatureK.toFixed(2)} K`;
        } else if (unit === 'fahrenheit') {
            const convertedTemperatureC = (temperature - 32) * 5/9; 
            const convertedTemperatureK = (temperature - 32) * 5/9 + 273.15; 
            const convertedUnitC = 'Celsius';
            const convertedUnitK = 'Kelvin';
            resultArea.textContent = `Converted: \n${convertedTemperatureC.toFixed(2)}° ${convertedUnitC}\n${convertedTemperatureK.toFixed(2)} K`;
        } else {
            const convertedTemperatureC = temperature - 273.15; 
            const convertedTemperatureF = (temperature - 273.15) * 9/5 + 32; 
            const convertedUnitC = 'Celsius';
            const convertedUnitF = 'Fahrenheit';
            resultArea.textContent = `Converted: \n${convertedTemperatureC.toFixed(2)}° ${convertedUnitC}\n${convertedTemperatureF.toFixed(2)}° ${convertedUnitF}`;
        }
    });
});
