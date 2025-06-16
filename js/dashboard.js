document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById('tripChart').getContext('2d');

  fetch('data/summary.json')
    .then(response => response.json())
    .then(data => {
      const chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.hours,
          datasets: [{
            label: 'Trips',
            data: data.trips,
            backgroundColor: 'orange'
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
    });
});
