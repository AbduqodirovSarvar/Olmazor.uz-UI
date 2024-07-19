var leafletCSS = document.createElement('link');
leafletCSS.rel = 'stylesheet';
leafletCSS.href = 'https://unpkg.com/leaflet@1.6.0/dist/leaflet.css';
document.head.appendChild(leafletCSS);

document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from your API
    fetch('https://api.example.com/addresses')
        .then(response => response.json())
        .then(data => {
            // Assuming your API returns an array of addresses with latitude and longitude
            data.forEach(address => {
                // Initialize map with the first address in the response
                var map = L.map('map').setView([address.latitude, address.longitude], 14);

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);

                L.marker([address.latitude, address.longitude]).addTo(map)
                    .bindPopup(address.name)  // Display address name in popup
                    .openPopup();
            });
        })
        .catch(error => {
            console.error('Error fetching addresses:', error);
            // Fallback to default location if fetch fails
            var map = L.map('map').setView([41.35265, 69.237268], 14);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([41.352387, 69.236582]).addTo(map)
                .bindPopup('OlmaTech office')
                .openPopup();
        });
});
