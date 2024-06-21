function runScheduler() {
    const operation = document.getElementById('operation').value.trim();
    const algorithm = document.getElementById('algorithm').value.trim();
    const lastInstant = document.getElementById('last_instant').value.trim();
    const processCount = document.getElementById('process_count').value.trim();
    const processData = document.getElementById('process_data').value.trim();

    const input = `${operation}\n${algorithm}\n${lastInstant} ${processCount}\n${processData}`;

    fetch('/run_scheduler', {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        },
        body: input
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('output').textContent = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
