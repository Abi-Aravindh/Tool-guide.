// Search functionality
document.getElementById('searchBar').addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  const cards = document.querySelectorAll('.tool-card');

  cards.forEach(card => {
    const title = card.querySelector('h2').textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

// Button action
document.querySelectorAll('.more-btn').forEach(button => {
  button.addEventListener('click', () => {
    alert('More details will be added soon!');
  });
});