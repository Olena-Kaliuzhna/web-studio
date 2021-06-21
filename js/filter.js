const filterBox = document.querySelectorAll('.projects-item');

document.querySelector('.filters-list').addEventListener('click', event => {
  if (!event.target.classList.contains('filters-button')) return false;
  let filteClass = event.target.dataset['filter'];

  filterBox.forEach(element => {
    element.classList.remove('visually-hidden');
    if (!element.classList.contains(filteClass) && filteClass !== 'all') {
      element.classList.add('visually-hidden');
    }
  });
});
