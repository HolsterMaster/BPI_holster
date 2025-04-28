document.addEventListener('DOMContentLoaded', function() {
    function openModal(imgSrc, description) {
        const modal = document.getElementById('modal');
        modal.classList.add('active');
        document.body.classList.add('no-scroll');
        modal.querySelector('img').src = imgSrc;
        modal.querySelector('.description').textContent = description;
    }
    function closeModal() {
        const modal = document.getElementById('modal');
        modal.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
    document.querySelector('.logo img').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.querySelectorAll('.modal-close').forEach(function(btn) {
        btn.addEventListener('click', closeModal);
    });
    document.getElementById('modal').addEventListener('click', function(e) {
        if (e.target === e.currentTarget) closeModal();
    });
    const images = [
        { src: "img/img_ignore/EliAti.jpeg?v=1", desc: "Zwei Herren in den Bergen" },
        { src: "img/img_ignore/Almount.jpeg?v=1", desc: "Winterausflug Alina" },
        { src: "img/img_ignore/Algolf.jpeg?v=1", desc: "Mini-Golf Alina" },
        { src: "img/img_ignore/AtElMoMoj.jpeg?v=1", desc: "Herren und Eisbahn" },
        { src: "img/img_ignore/Bergen.jpeg?v=1", desc: "Bergen -_-" },
        { src: "img/img_ignore/Fari.jpeg?v=1", desc: "Farid😘" },
        { src: "img/img_ignore/FiElUs.jpeg?v=1", desc: "Herren und Schnee" },
        { src: "img/img_ignore/HerrenUndFrauAebi.jpeg?v=1", desc: "Frau Aebi und Mini-Golf" },
        { src: "img/img_ignore/GruppenFotoEisbahn.jpeg?v=1", desc: "Ziehen Sie sich warm an, da Sie möglicherweise krank werden" },
        { src: "img/img_ignore/GruppenFotoinsMigros.jpeg?v=1", desc: "Migros-Rundgang" },
        { src: "img/img_ignore/GruppenFotoVelo.jpeg?v=1", desc: "Sport war на Fahrrädern" },
        { src: "img/img_ignore/Mar.jpeg?v=2", desc: "Hey, was machst du?... Spaß, Spaß" },
        { src: "img/img_ignore/MoElUsG.jpeg?v=1", desc: "Wieder Golf." },
        { src: "img/img_ignore/Poretti.jpeg?v=1", desc: "Gas Gas Gas! I'm gonna step on the gas..." },
        { src: "img/img_ignore/LazyAsf.jpeg?v=1", desc: "Einige zufällige Leute stehen" },
        { src: "img/img_ignore/Victoria.jpeg?v=1", desc: "Victoria.jpeg und Ton(nicht .jpeg)" }
    ];
    const galleryContainer = document.getElementById('gallery-container');
    const fragment = document.createDocumentFragment();
    images.forEach(function(img) {
        const card = document.createElement('div');
        card.className = 'card photo-card';
        card.setAttribute('data-description', img.desc);
        card.innerHTML = '<img src="' + img.src + '" alt="Photo" loading="lazy"><div class="card-body"><p class="desc">' + img.desc + '</p></div>';
        fragment.appendChild(card);
    });
    galleryContainer.appendChild(fragment);
    galleryContainer.addEventListener('click', function(e) {
        const target = e.target;
        if (target.tagName === 'IMG' && target.closest('.photo-card')) {
            const card = target.closest('.photo-card');
            openModal(target.src, card.dataset.description);
        }
    });
});
