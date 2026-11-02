// Initialize dropdown functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    
    // Attach click event to all recipe toggle buttons
    const toggleButtons = document.querySelectorAll('.recipe-toggle');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get target dropdown ID from data attribute
            const targetId = this.getAttribute('data-target');
            const dropdown = document.getElementById(targetId);
            
            // Close any other open dropdowns first
            document.querySelectorAll('.recipe-details-dropdown.active').forEach(openDropdown => {
                if (openDropdown.id !== targetId) {
                    openDropdown.classList.remove('active');
                }
            });
            
            // Toggle current dropdown visibility
            dropdown.classList.toggle('active');
        });
    });

});

// Toggle search overlay visibility
function toggleSearch() {
    const overlay = document.getElementById('searchOverlay');
    const input = document.getElementById('searchInput');
    
    if (overlay.classList.contains('active')) {
        overlay.classList.remove('active');
        input.value = '';
        filterContent();
    } else {
        overlay.classList.add('active');
        input.focus();
    }
}

// Filter page content based on search input
function filterContent() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    // Target the individual cards, not the whole row
    const cards = document.querySelectorAll('.recipe-card-horizontal');
    
    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        
        // Use a 'hidden' class instead of display:none to preserve grid structure
        if (text.includes(input)) {
            card.classList.remove('hidden-card');
        } else {
            card.classList.add('hidden-card');
        }
    });
}