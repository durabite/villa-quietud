/* chart.js chart examples */

// chart colors
var colors = ['#007bff','#28a745','#333333','#c3e6cb','#dc3545','#6c757d'];

/* large line chart */
var chLine = document.getElementById("chLine");
var chartData = {
  labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4",],
  datasets: [{
    data: [50000, 45000, 50000, 65000],
    backgroundColor: 'transparent',
    borderColor: colors[1],
    borderWidth: 4,
    pointBackgroundColor: colors[1]
  },
 /* Segunda linea de datos*/
 {
    data: [45000, 50000, 38000, 60000],
    backgroundColor: 'transparent',
    borderColor: colors[4],
    borderWidth: 4,
    pointBackgroundColor: colors[4]
  }
]
};

if (chLine) {
  new Chart(chLine, {
  type: 'line',
  data: chartData,
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false
        }
      }]
    },
    legend: {
      display: false
    }
  }
  });
}