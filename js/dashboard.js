window.onload = () => {
  renderCharts();
};

function renderCharts() {
  const ctx1 = document.getElementById('hourlyChart').getContext('2d');
  const ctx2 = document.getElementById('weekdayChart').getContext('2d');
  const ctx3 = document.getElementById('userTypeChart').getContext('2d');
  const ctx4 = document.getElementById('tripDistanceChart').getContext('2d');

  new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM'],
      datasets: [{
        label: 'Trips',
        data: [5, 10, 8, 6, 4, 3],
        backgroundColor: 'orange'
      }]
    }
  });

  new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Trips',
        data: [30, 25, 18, 26, 29, 22, 26],
        backgroundColor: 'steelblue'
      }]
    }
  });

  new Chart(ctx3, {
    type: 'pie',
    data: {
      labels: ['Subscriber', 'Casual'],
      datasets: [{
        data: [75, 25],
        backgroundColor: ['#007bff', '#ffc107']
      }]
    }
  });

  new Chart(ctx4, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      datasets: [{
        label: 'Distance (km)',
        data: [2.1, 2.3, 2.4, 2.2, 2.0],
        borderColor: 'orange',
        fill: false
      }]
    }
  });
}
