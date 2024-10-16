// Data for 12 teams (You can manually update the scores, levels, etc.)
const teams = [
    { "name": "phoenix",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },

    { "name": "Fireball09",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },

    { "name": "Tech_Titans",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "VITalize",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "Sushanthxteam",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "PRAY_nixon",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "Crackheads",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "Sherlock_Homies4",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "Maggicrypters",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "Sparks",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "Coconut_4",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "Inferno_squad4",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "Jugadu",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "Error404_Found",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "Quest_Masters",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "DecryptorsOnDuty",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "Ctrl_Alt_Defeat",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "Zero_Knowledge_Ninjas04",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "Team_Mystery_Mavericks",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "Team_Chokers",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "Intellectual_09",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "Golden_Quadrilateral",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "TT24",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "Shield",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "POOKIE_HACKERS",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "Cyberhead_007",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "Team_ninjas2024",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "Cyber_Squad07",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "Shikari",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "Nagshakti",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "socialcyphers",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "MCD_69420",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "Meow_meow07",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "SPARK",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "Cypher",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "Predators",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "Tech_Titans04",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "24Cr",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "PaceRunerz",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "Gold_diggers4",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "1_stree_3_purush",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    
    { "name": "Slackers",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },

    { "name": "AURA11",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },

    { "name": "Dkr_6969",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },

    { "name": "DKD_Warriors",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },

    { "name": "Black_shadow35",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    { "name": "Blaze",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    { "name": "royals",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" },
    { "name": "spardan",  "score":"5", "level":"1", "timestamp": "2024-10-16T09:15:00Z" }
    
];


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