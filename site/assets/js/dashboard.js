document.addEventListener('DOMContentLoaded', () => {
  fetch('assets/json/tickets.json')
    .then(r => r.json())
    .then(data => {
      const ctx = document.getElementById('ticketsChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.map(d => d.week),
          datasets: [{ label: 'Resolved Tickets', data: data.map(d => d.resolved) }]
        }
      });
    });
});
