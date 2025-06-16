
document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('hourlyChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"],
      datasets: [{
        label: 'Trips',
        data: [5, 3, 2, 2, 4, 8, 15, 30, 50, 60, 55, 70, 80, 90, 95, 100, 85, 75, 60, 40, 25, 15, 10, 5],
        backgroundColor: 'orange'
      }]
    }
  });
});
