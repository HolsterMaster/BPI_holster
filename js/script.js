document.querySelector('.logo img').addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });
document.querySelectorAll('.photo-card img').forEach(img => img.addEventListener('click', function() {
    const modal = document.getElementById('modal'); modal.classList.add('active'); modal.querySelector('img').src = img.src;
    modal.querySelector('.description').textContent = img.closest('.photo-card').dataset.description;
}));
document.querySelectorAll('.modal-close').forEach(btn => btn.addEventListener('click', () => btn.closest('.modal').classList.remove('active')));
document.getElementById('modal').addEventListener('click', e => { if (e.target === e.currentTarget) e.currentTarget.classList.remove('active'); });
