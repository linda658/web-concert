const buttons = document.querySelectorAll('.ticket-btn');
  const images = document.querySelectorAll('.ticket-img');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const type = button.getAttribute('data-type');

      images.forEach(img => img.classList.add('hidden'));

      const selected = document.querySelectorAll(`.ticket-img.${type}`);
      selected.forEach(img => img.classList.remove('hidden'));
    });
  });

  