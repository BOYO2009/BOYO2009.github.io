const players = [
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
  }
  // Add more players...
];

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('navPlayerSearch');
  const resultsDiv = document.getElementById('navSearchResults');

  if (!searchInput || !resultsDiv) {
    console.error('Search elements not found');
    return;
  }

  // Search input handler
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    
    if (searchTerm === '') {
      resultsDiv.style.display = 'none';
      return;
    }

    const matches = players.filter(player => 
      player.name.toLowerCase().includes(searchTerm)
    );

    if (matches.length > 0) {
      resultsDiv.innerHTML = matches
        .map(player => `
          <div class="search-item" 
               onclick="goToPlayer('${player.id}', '${player.file}')">
            ${player.name}
          </div>
        `)
        .join('');
      resultsDiv.style.display = 'block';
    } else {
      resultsDiv.innerHTML = `<div class="search-item">No players found</div>`;
      resultsDiv.style.display = 'block';
    }
  });

  // Close results when clicking outside
  document.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !resultsDiv.contains(e.target)) {
      resultsDiv.style.display = 'none';
    }
  });
});

function goToPlayer(id, file) {
  if (window.location.pathname.endsWith(file)) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    window.location.href = `${file}#${id}`;
  }
  
  // Clear search
  const searchInput = document.getElementById('navPlayerSearch');
  const resultsDiv = document.getElementById('navSearchResults');
  searchInput.value = '';
  resultsDiv.style.display = 'none';
} 