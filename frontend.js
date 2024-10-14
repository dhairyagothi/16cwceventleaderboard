// Data for 12 teams (You can manually update the scores, levels, etc.)
const teams = [
    { "name": "Team Alpha", "score": 100, "level": 5, "timestamp": "2024-10-16T13:30:00Z" },
    { "name": "Team Bravo", "score": 90, "level": 4, "timestamp": "2024-10-16T13:30:00Z" },
    { "name": "Team Charlie", "score": 105, "level": 4, "timestamp": "2024-10-16T13:30:00Z" },
    { "name": "Team Delta", "score": 150, "level": 3, "timestamp": "2024-10-16T13:30:00Z" },
    { "name": "Team Echo", "score": 75, "level": 3, "timestamp": "2024-10-16T13:30:00Z" },
    { "name": "Team Foxtrot", "score": 70, "level": 2, "timestamp": "2024-10-16T13:30:00Z" },
    { "name": "Team Golf", "score": 65, "level": 2, "timestamp": "2024-10-16T13:30:00Z" },
    { "name": "Team Hotel", "score": 60, "level": 1, "timestamp": "2024-10-16T13:30:00Z" },
    { "name": "Team India", "score": 55, "level": 1, "timestamp": "2024-10-16T13:30:00Z" },
    { "name": "Team Juliett", "score": 50, "level": 1, "timestamp": "2024-10-16T13:30:00Z" },
    { "name": "Team Kilo", "score": 48, "level": 1, "timestamp": "2024-10-16T13:30:00Z" },
    { "name": "Team Lima", "score": 45, "level": 1, "timestamp": "2024-10-16T13:30:00Z" }
];

// Pagination variables
let currentPage = 1;
const entriesPerPage = 5;
const totalPages = Math.ceil(teams.length / entriesPerPage);

// Function to display teams based on the current page
function displayTeams(page) {
    const leaderboardRows = document.getElementById('leaderboard-rows');
    leaderboardRows.innerHTML = ''; // Clear previous rows

    // Sort teams by score in descending order
    const sortedTeams = teams.sort((a, b) => b.score - a.score);

    // Calculate start and end index for pagination
    const start = (page - 1) * entriesPerPage;
    const end = start + entriesPerPage;

    // Loop through the teams and create table rows
    sortedTeams.slice(start, end).forEach((team, index) => {
        const row = `<tr>
            <td>${start + index + 1}</td>
            <td>${team.name}</td>
            <td>${team.score}</td>
            <td>${team.level}</td>
            <td>${new Date(team.timestamp).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
                timeZone: 'Asia/Kolkata' // IST Timezone
            })}</td>
        </tr>`;
        leaderboardRows.innerHTML += row;
    });

    // Update current page display
    document.getElementById('current-page').textContent = `Page ${page}`;
}

// Event listeners for pagination buttons
document.getElementById('prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayTeams(currentPage);
    }
});

document.getElementById('next-page').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        displayTeams(currentPage);
    }
});

// Initial display
displayTeams(currentPage);
