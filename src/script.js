let temperatureData = [];
let humidityData = [];
let labels = [];

function getCurrentTime() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function convertAllDataTo(unit) {
    if (unit === 'F') {
        for (let i = 0; i < temperatureData.length; i++) {
            temperatureData[i] = celsiusToFahrenheit(temperatureData[i]);
        }
    } else {
        for (let i = 0; i < temperatureData.length; i++) {
            temperatureData[i] = (temperatureData[i] - 32) * 5/9;
        }
    }
}

async function getData() {
    try {
        const response = await fetch('http://10.0.0.103:5000/data');
        const data = await response.json();

        let formattedTemperature = parseFloat(data.temperature).toFixed(2);
        const unit = document.querySelector('.temp-btn.active').textContent;

        switch (unit) {
            case 'Fahrenheit':
                formattedTemperature = celsiusToFahrenheit(formattedTemperature).toFixed(2);
                document.getElementById('unit').textContent = '°F';
                break;
            default:
                document.getElementById('unit').textContent = '°C';
                break;
        }

        document.getElementById('temperature').textContent = formattedTemperature;
        document.getElementById('humidity').textContent = parseFloat(data.humidity).toFixed(2);

        temperatureData.push(parseFloat(formattedTemperature));
        humidityData.push(parseFloat(data.humidity));
        labels.push(getCurrentTime());

        if (temperatureData.length > 10) {
            temperatureData.shift();
            humidityData.shift();
            labels.shift();
        }

        weatherChart.update();
    } catch (error) {
        console.error("Erro ao obter os dados:", error);
    }
}

const ctx = document.getElementById('weatherChart').getContext('2d');
const weatherChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'Temperatura',
                data: temperatureData,
                borderColor: 'rgb(255, 99, 132)',
                fill: false,
                lineTension: 0
            },
            {
                label: 'Umidade (%)',
                data: humidityData,
                borderColor: 'rgb(54, 162, 235)',
                fill: false,
                lineTension: 0
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        maintainAspectRatio: false
    }
});

document.getElementById('celsiusBtn').addEventListener('click', function() {
    convertAllDataTo('C');
    this.classList.add('active');
    document.getElementById('fahrenheitBtn').classList.remove('active');
    getData();
});

document.getElementById('fahrenheitBtn').addEventListener('click', function() {
    convertAllDataTo('F');
    this.classList.add('active');
    document.getElementById('celsiusBtn').classList.remove('active');
    getData();
});

setInterval(getData, 2000);

document.getElementById('team-btn').addEventListener('mouseover', function() {
    const hoverContent = document.getElementById('team-hover-content');
    hoverContent.style.display = 'block';
    hoverContent.style.opacity = '1';
    hoverContent.style.visibility = 'visible';
    hoverContent.style.transform = 'translateX(-50%) translateY(0)';
});

document.getElementById('team-btn').addEventListener('mouseout', function() {
    const hoverContent = document.getElementById('team-hover-content');
    hoverContent.style.display = 'none';
    hoverContent.style.opacity = '0';
    hoverContent.style.visibility = 'hidden';
    hoverContent.style.transform = 'translateX(-50%) translateY(-10px)';
});
