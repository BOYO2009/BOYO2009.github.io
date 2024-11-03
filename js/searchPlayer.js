// Player data with file paths
const players = [
  // Players in Influential-players-2.html
  { 
    name: 'Michael Jordan', 
    id: 'michael-jordan',
    file: 'Influential-players-2.html'
  },
  { 
    name: 'LeBron James', 
    id: 'lebron-james',
    file: 'Influential-players-2.html'
  },
  { 
    name: 'Kareem Abdul-Jabbar', 
    id: 'kareem-abdul-jabbar',
    file: 'Influential-players-2.html'
  },
  // Players in rule-changes-2.html
  { 
    name: 'George Mikan', 
    id: 'george-mikan',
    file: 'rule-changes-2.html'
  },
  // Add all your players here with their respective file paths
];

// Initialize search functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('navPlayerSearch');
  const resultsDiv = document.getElementById('navSearchResults');

  if (searchInput && resultsDiv) {
    // Add input event listener
    searchInput.addEventListener('input', function(e) {
      const searchTerm = e.target.value.toLowerCase();
      
      if (searchTerm.length < 2) {
        resultsDiv.style.display = 'none';
        return;
      }

      const matches = players.filter(player => 
        player.name.toLowerCase().includes(searchTerm)
      );

      if (matches.length > 0) {
        resultsDiv.style.display = 'block';
        resultsDiv.innerHTML = matches
          .map(player => `
            <a class="dropdown-item" 
               href="${player.file}#${player.id}" 
               onclick="selectPlayer('${player.id}', '${player.file}')">
              ${player.name}
            </a>
          `)
          .join('');
      } else {
        resultsDiv.style.display = 'none';
      }
    });

    // Close search results when clicking outside
    document.addEventListener('click', function(event) {
      if (!resultsDiv.contains(event.target) && event.target !== searchInput) {
        resultsDiv.style.display = 'none';
      }
    });
  }
});

// Function to select and scroll to player
function selectPlayer(playerId, filePath) {
  // If we're already on the correct page
  if (window.location.pathname.endsWith(filePath)) {
    const element = document.getElementById(playerId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('navSearchResults').style.display = 'none';
      document.getElementById('navPlayerSearch').value = '';
    }
  } else {
    // If we need to navigate to a different page
    window.location.href = `${filePath}#${playerId}`;
  }
}

// Search button click handler
function searchPlayer() {
  const searchTerm = document.getElementById('navPlayerSearch').value.toLowerCase();
  const match = players.find(player => 
    player.name.toLowerCase().includes(searchTerm)
  );
  
  if (match) {
    selectPlayer(match.id, match.file);
  }
}

// Handle automatic scrolling when page loads with a hash
window.addEventListener('load', function() {
  if (window.location.hash) {
    const playerId = window.location.hash.substring(1); // Remove the # symbol
    const element = document.getElementById(playerId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Small delay to ensure proper scrolling
    }
  }
});