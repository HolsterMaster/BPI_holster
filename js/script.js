// script.js
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
    document.querySelector('.logo img').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.querySelectorAll('.modal-close')
        .forEach(btn => btn.addEventListener('click', closeModal));
    document.getElementById('modal')
        .addEventListener('click', e => { if (e.target === e.currentTarget) closeModal(); });


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
        { src: "img/img_ignore/GruppenFotoVelo.jpeg?v=1", desc: "Sport war auf Fahrrädern" },
        { src: "img/img_ignore/Mar.jpeg?v=2", desc: "Hey, was machst du? Spaß, Spaß" },
        { src: "img/img_ignore/MoElUsG.jpeg?v=1", desc: "Wieder Golf." },
        { src: "img/img_ignore/Poretti.jpeg?v=1", desc: "Gas Gas Gas! I'm gonna step on the gas." },
        { src: "img/img_ignore/LazyAsf.jpeg?v=1", desc: "Einige zufällige Leute stehen" },
        { src: "img/img_ignore/Victoria.jpeg?v=1", desc: "Victoria.jpeg und Ton (nicht .jpeg)" }
    ];
    const galleryContainer = document.getElementById('gallery-container');
    const fragment = document.createDocumentFragment();

    images.forEach(img => {

        const [fullPath] = img.src.split('?');
        const filename = fullPath.substring(fullPath.lastIndexOf('/') + 1);
        const thumbName = filename.replace(/(\.\w+)$/, '_t$1');
        const thumbSrc  = `img/img_ignore/thumbnails/${thumbName}`;


        const card = document.createElement('div');
        card.className = 'card photo-card';
        card.dataset.description = img.desc;

        card.innerHTML = `
    <img
      src="${thumbSrc}"
      data-fullsrc="${img.src}"
      alt="Photo thumbnail"
      loading="lazy"
      class="thumb-img"
    >
    <div class="card-body">
      <p class="desc">${img.desc}</p>
    </div>
  `;
        fragment.appendChild(card);
    });

    galleryContainer.appendChild(fragment);


    galleryContainer.addEventListener('click', e => {
        const imgEl = e.target.closest('.photo-card img');
        if (!imgEl) return;
        const fullSrc = imgEl.dataset.fullsrc;
        const desc    = imgEl.closest('.photo-card').dataset.description;
        openModal(fullSrc, desc);
    });

    const texts = [
        {
            title: 'Katze',
            text: 'Die Katze lebt meistens in Haus oder im Garten. Sie ist Haustier. Katzen fressen gerne Fleisch, Fisch und manchmal Trockenfutter. Katzen sind sehr weich und haben schönes Fell. Sie sind ruhig, und manchmal ein bisschen faul. Mir gefällt an Katzen, dass sie schnurren, wenn man sie streichelt. Ich mag es, mit einer Katze zu spielen oder sie auf meinem Schoss zu haben. Manchmal kratzt eine Katze, wenn sie nicht spielen möchte. Das mag ich nicht so gern. Ich möchte eine Katze sein, weil sie den ganzen Tag schlafen und sich ausruhen kann. Ausserdem kann sie gut klettern und ist sehr schnell. Ja, ich hatte schon Kontakt mit einer Katze. Die Katze von meiner Tante heisst Schino, und ich habe sie oft gestreichelt und mit ihr gespielt. Sie ist grau und sehr freundlich.',
            img: 'img/animals1.jpg',
            category: 'Tier'
        },
        {
            title: 'Adler',
            text: 'Ich bin Mohammad Ali Zadah. Mein Lieblingstier ist die Katze, weil sie freundlich und nett ist. Wenn ich ein Tier sein muss, werde ich Adler wählen. Er lebt auf den Bergen und ist ein Wildtier. Er isst verschiedenes Essen, zum Beispiel Fisch und Fleisch. Er ist gross und wohnt oft allein. Er gefällt mir sehr, weil er fliegen kann und Freiheit hat. Er hat ein bisschen mit mir zu tun (ich bin oft allein und arbeite für mich selbst). Ich mag nicht, wenn er andere Vögel jagt. Ich möchte kein Adler sein, aber wenn ich es sein müsste, würde ich Ja sagen, weil er überall fliegen kann. Ich habe ihn auch in Afghanistan gesehen und Kontakt gehabt. Ich bin auf den Berg gegangen und dort habe ich einen Adler mit seinem Kind gesehen. Ich liebe sein Lebenssystem.',
            img: 'img/animals2.jpg',
            category: 'Tier'
        },
        {
            title: 'Pferd',
            text: 'Ich mag Pferde, weil das Pferd mein Lieblingstier ist. Es lebt überall und ist ein Haustier. Als Kind bin ich mit einem Pferd geritten. Das war für mich interessant und lustig. Am Anfang war es ein bisschen schwierig, aber von Tag zu Tag konnte ich besser mit dem Pferd kommunizieren. Es frisst Gras und Heu. Es kann klein und gross sein und hat verschiedene Farben. Es hat vier Füße und einen langen Schwanz. Mit dem Pferd kannst du immer glücklich sein, aber manchmal ist es nervös und frech. Mein Vater hat mir gesagt, dass das Pferd ein Lieblingstier von Hazrat Mohammed (dem Propheten) war, deshalb mag ich das Pferd.',
            img: 'img/animals2.jpg',
            category: 'Tier'
        },
        {
            title: 'Hund',
            text: 'Mein Lieblingstier ist der Hund. Der Hund lebt im Haus. Man kann mit dem Hund viel Spass haben. Der Hund ist sehr treu. Ich hatte in Afghanistan einen grossen Hund und ich hatte viel Spass mit diesem Hund. Ich bin mit dem Hund jeden Tag draussen gegangen. Ich habe in meinem Leben keinen Menschen oder kein Tier gesehen, der so treu wie der Hund ist.',
            img: 'img/animals2.jpg',
            category: 'Tier'
        },
        {
            title: 'Vogel',
            text: 'Mein Lieblingstier ist der Vogel. Ich mag Vögel, weil sie fliegen können. Es gibt verschiedene Arten von ihnen, zum Beispiel farbige Vögel hoch auf den Bäumen. Wenn wir früh am Morgen aufstehen, hören wir einen angenehmen Klang in der Natur. Es gibt zwei Arten von Vögeln: einige sind Haustiere und andere Wildtiere. Vögel leben im Nest; sie bauen Nester auf einem hohen Ort in den Bäumen, weil dort die Eier und Küken sicher sind. Sie zeigen uns Freiheit durch ihr Fliegen.',
            img: 'img/animals2.jpg',
            category: 'Tier'
        },
        {
            title: 'Igel',
            text: 'Ich möchte ein Igel sein. Der Igel ist ein kleines, aber interessantes Tier. Er lebt im Wald, im Garten oder unter der Erde und versteckt sich gern in Laub. Im Winter hält er Winterschlaf. Er frisst Insekten und Würmer und ist deshalb nützlich für die Natur. Auf seinem Rücken hat er spitze Stacheln, und mit seiner kleinen Nase kann er gut riechen. Ich mag den Igel, weil seine Stacheln wie kleine Hügel aussehen. In der Ukraine habe ich viele Igel gesehen und mich immer gefreut. Der Igel ist klein, stark und mutig. Ich möchte ein Igel sein und nachts durch die Natur laufen.',
            img: 'img/animals2.jpg',
            category: 'Tier'
        },
        {
            title: 'Löwe',
            text: 'Wie Sie in der Überschrift sehen, ist der Löwe mein Lieblingstier. Löwen leben vor allem in Afrika und sind normalerweise Wildtiere, daher gefährlich für den Menschen. Sie fressen Fleisch. Männliche Löwen haben eine Mähne, und es gibt verschiedene Arten von Löwen. Eine heisst Panthera leo und ist eine der grössten Katzenarten. Opfer ist er nicht, darum gefällt er mir. Er hat einen komplexen Charakter, was ich mir in meiner Kindheit gewünscht habe. Kontrolle hat er im Griff. Diese Eigenschaft verbindet uns. Alle Tiere sind mit guten und schlechten Eigenschaften perfekt. Weil er der König der Tiere ist und im Wald die Kontrolle hat, möchte ich dieses Tier sein. Zum Glück hatte ich im Zoo Kontakt mit ihm.',
            img: 'img/animals2.jpg',
            category: 'Tier'
        },
        {
            title: 'Katze 2',
            text: 'Mein Lieblingstier ist die Katze. Ich liebe Katzen sehr, weil meine Tante eine Katze hat. Als ich in Ghana war, hatte ich eine Katze als Haustier. Der Name meiner Katze ist Mimi. Sie war die beste Katze für mich und meine Tante. Aber Mimi isst sehr viel und das mag ich nicht.',
            img: 'img/animals2.jpg',
            category: 'Tier'
        },
        {
            title: 'Katze 3',
            text: 'Mein Lieblingstier ist die Katze. Ich habe viele Katzen in meinem Haus. Das ist ein Haustier, aber ich habe auch wilde Katzen gesehen. Die Katze frisst Fleisch und Mäuse und manchmal andere kleine Tiere. Sie sehen sehr süss und nett aus. Sie haben ein weiches Fell, zwei Ohren, einen langen Schwanz und vier Beine. Ich mag Katzen, weil sie Kontakttiere sind und schnurren. Ich mag nicht, wenn Katzen aggressiv sind und Möbel zerkratzen. Ich möchte dieses Tier sein, weil ich jeden Tag spielen will. Ich möchte, dass mich alle lieben und streicheln. Als ich klein war, habe ich jeden Tag Kontakt mit Katzen gehabt. Jetzt habe ich keine mehr, aber ich möchte gern wieder eine kaufen.',
            img: 'img/animals2.jpg',
            category: 'Tier'
        },
        {
            title: 'Vogel 2',
            text: 'Der Vogel lebt in den Bäumen. Er frisst Getreide und sieht klein und harmlos aus. Mir gefällt, wie er sich um seine Küken kümmert; sie sind sehr süss. Das hat viel mit mir zu tun, deshalb möchte ich er sein. Es gibt eine besondere Atmosphäre, wenn Vögel miteinander „sprechen“ und schöne Lieder singen, besonders im Wald. Als ich ein Kind war, habe ich oft draussen Vögel mit Futter versorgt. Sie brauchten immer Essen, und ich habe ihnen gern geholfen. Sie sind klein, aber haben viel Geduld, um schwierige Aufgaben zu bewältigen, z. B. Äste für ihr Nest zu sammeln und ihre Küken zu schützen.',
            img: 'img/animals2.jpg',
            category: 'Tier'
        },
        {
            title: 'Pferd 2',
            text: 'Ich mag Pferde, weil das Pferd mein Lieblingstier ist. Es lebt überall und ist ein Haustier. Als Kind bin ich mit einem Pferd geritten. Das war für mich interessant und lustig. Am Anfang war es ein bisschen schwierig, aber von Tag zu Tag konnte ich besser kommunizieren. Es frisst Gras und Heu. Es kann klein oder gross sein und hat verschiedene Farben. Es hat vier Füße und einen langen Schwanz. Mit dem Pferd kannst du immer glücklich sein, aber manchmal ist es nervös und frech. Mein Vater hat mir gesagt, dass das Pferd ein Lieblingstier von Hazrat Mohammed war, deshalb mag ich Pferde.',
            img: 'img/animals2.jpg',
            category: 'Tier'
        },


        { title: 'Schulalltag',       text: 'Erfahrungen im Schulbetrieb...',      img: 'img/school1.jpg',  category: 'Schule' },

    ];





    function populateTexts() {
        const container = document.getElementById('texts-container');
        const categories = [...new Set(texts.map(t => t.category))];
        categories.forEach(cat => {
            const h3 = document.createElement('h3');
            h3.textContent = cat;
            h3.className = 'category-title';
            container.appendChild(h3);

            const hr = document.createElement('hr');
            container.appendChild(hr);

            const cardsDiv = document.createElement('div');
            cardsDiv.className = 'text-cards';
            texts.filter(t => t.category === cat)
                .forEach(t => {
                    const card = document.createElement('div');
                    card.className = 'card text-card';
                    card.innerHTML = `
                         <img src="${t.img}" alt="${t.title}" loading="lazy">
                         <div class="card-body">
                             <h4>${t.title}</h4>
                             <p>${t.text}</p>
                         </div>
                     `;
                    cardsDiv.appendChild(card);
                });
            container.appendChild(cardsDiv);
        });
    }

    populateTexts();
});
