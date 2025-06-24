document.addEventListener('DOMContentLoaded', function () {

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


    const logoImg = document.querySelector('.logo img');
    if (logoImg) {
        logoImg.addEventListener('click', e => {
            e.preventDefault();
            if (window.location.hash) {
                history.pushState('', document.title, window.location.pathname + window.location.search);
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }



    document.querySelectorAll('.modal-close')
        .forEach(btn => btn.addEventListener('click', closeModal));
    document.getElementById('modal')
        .addEventListener('click', e => {
            if (e.target === e.currentTarget) closeModal();
        });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('modal');
            if (modal.classList.contains('active')) {
                closeModal();
            }
        }
    });

    const images = [
        {src: "img/img_ignore/SchulePics/EliAti.jpeg?v=1", desc: "Zwei Herren in den Bergen am Schneetag"},
        {src: "img/img_ignore/SchulePics/Almount.jpeg?v=1", desc: "Winterausflug Alina"},
        {src: "img/img_ignore/SchulePics/Algolf.jpeg?v=1", desc: "Mini-Golf Alina"},
        {src: "img/img_ignore/SchulePics/AtElMoMoj.jpeg?v=1", desc: "Herren und Eisbahn"},
        {src: "img/img_ignore/SchulePics/Bergen.jpeg?v=1", desc: "Am Niederhorn"},
        {src: "img/img_ignore/SchulePics/Fari.jpeg?v=1", desc: "F.😘"},
        {src: "img/img_ignore/SchulePics/FiElUs.jpeg?v=1", desc: "Beim Schlitten"},
        {src: "img/img_ignore/SchulePics/HerrenUndFrauAebi.jpeg?v=1", desc: "Frau Aebi und Mini-Golf"},
        {
            src: "img/img_ignore/SchulePics/GruppenFotoEisbahn.jpeg?v=1",
            desc: "Ziehen Sie sich warm an, da Sie möglicherweise krank werden"
        },
        {src: "img/img_ignore/SchulePics/GruppenFotoinsMigros.jpeg?v=1", desc: "Migros-Rundgang ⟳"},
        {src: "img/img_ignore/SchulePics/GruppenFotoVelo.jpeg?v=1", desc: "Sport war auf Fahrrädern ⟳"},
        {src: "img/img_ignore/SchulePics/Mar.jpeg?v=2", desc: "In das Werkstatt... Spaß, Spaß"},
        {src: "img/img_ignore/SchulePics/MoElUsG.jpeg?v=1", desc: "Wieder Mini-Golf."},
        {src: "img/img_ignore/SchulePics/Poretti.jpeg?v=1", desc: "Gas Gas Gas! I'm gonna step on the gas~"},
        {src: "img/img_ignore/SchulePics/LazyAsf.jpeg?v=1", desc: "Einige zufällige Programmierer und Frau Poretti"},
        {src: "img/img_ignore/SchulePics/Victoria.jpeg?v=1", desc: "Victoria.jpeg und Ton (nicht .jpeg)"},
        {src: "img/img_ignore/SchulePics/EliundUsma.jpg?v=1", desc: "Seilpark"},

        {src: "img/img_ignore/SchulePics/atiusMoha.jpg?v=1", desc: "Die Jungs und der Genfersee"},
        {src: "img/img_ignore/SchulePics/essen.jpg?v=1", desc: "Essen im Klassenzimmer"},
        {src: "img/img_ignore/SchulePics/essenNoch.jpg?v=1", desc: "Kabuli Palau war sehr lecker"},
        {src: "img/img_ignore/SchulePics/fari.jpg?v=1", desc: "F.⛸️"},
        {src: "img/img_ignore/SchulePics/geff.jpg?v=1", desc: "Wir werden bald auf einem Boot segeln!"},
        {src: "img/img_ignore/SchulePics/genfAll.jpg?v=1", desc: "Gruppenfoto und Genfersee"},
        {src: "img/img_ignore/SchulePics/GenfJunge.jpg?v=1", desc: "Mehr Jungs und der Genfersee"},
        {src: "img/img_ignore/SchulePics/lehrere.jpg?v=1", desc: "Lehrerinnen und Mohammad"},
        {src: "img/img_ignore/SchulePics/mohaUndPil.jpg?v=1", desc: "Frau Pilser und Mohammad"},
        {src: "img/img_ignore/SchulePics/mrffg.jpg?v=1", desc: "Mariyam✌️"},
        {src: "img/img_ignore/SchulePics/nochEssen.jpg?v=1", desc: "Mmm, Kabuli Palau~"},
        {src: "img/img_ignore/SchulePics/samuFi.jpg?v=1", desc: "Fida ist sooo schnell"},
        {src: "img/img_ignore/SchulePics/schlitSam.jpg?v=1", desc: "Wer ist das Mädchen rechts?🤔"},
        {src: "img/img_ignore/SchulePics/stuhl.jpg?v=1", desc: "Stuhl ist gekaputtet"},
        {src: "img/img_ignore/SchulePics/stuhlUndMens.jpg?v=1", desc: "Ein phänomenal großer Stuhl und viele Sonnenbrillen"},
        {src: "img/img_ignore/SchulePics/UNO.jpg?v=1", desc: "UNO, Gruppenfoto"},
        {src: "img/img_ignore/SchulePics/zugEli.jpg?v=1", desc: "Lustiges Spiel auf dem Weg nach Genf"}
    ];

    const galleryContainer = document.getElementById('gallery-container');
    const fragment = document.createDocumentFragment();

    images.forEach(img => {
        const [fullPath] = img.src.split('?');
        const filename = fullPath.substring(fullPath.lastIndexOf('/') + 1);
        const thumbName = filename.replace(/(\.\w+)$/, '_t$1');
        const thumbSrc = `img/img_ignore/thumbnails/${thumbName}`;

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
              draggable="false"
            >
            <div class="card-body">
              <p class="desc">${img.desc}</p>
            </div>
        `;
        fragment.appendChild(card);
    });

    galleryContainer.appendChild(fragment);

    galleryContainer.addEventListener('click', e => {
        const cardEl = e.target.closest('.photo-card');
        if (!cardEl) return;
        const imgEl = cardEl.querySelector('img.thumb-img');
        if (!imgEl) return;
        openModal(imgEl.dataset.fullsrc, cardEl.dataset.description);
    });


    const texts = [
        {
            title: 'Katze',
            text: 'Die Katze lebt meistens in Haus oder im Garten. Sie ist Haustier. Katzen fressen gerne Fleisch, Fisch und manchmal Trockenfutter. Katzen sind sehr weich und haben schönes Fell. Sie sind ruhig, und manchmal ein bisschen faul. Mir gefällt an Katzen, dass sie schnurren, wenn man sie streichelt. Ich mag es, mit einer Katze zu spielen oder sie auf meinem Schoss zu haben. Manchmal kratzt eine Katze, wenn sie nicht spielen möchte. Das mag ich nicht so gern. Ich möchte eine Katze sein, weil sie den ganzen Tag schlafen und sich ausruhen kann. Ausserdem kann sie gut klettern und ist sehr schnell. Ja, ich hatte schon Kontakt mit einer Katze. Die Katze von meiner Tante heisst Schino, und ich habe sie oft gestreichelt und mit ihr gespielt. Sie ist grau und sehr freundlich.',
            img: 'img/img_ignore/animals/Katze.png',
            category: 'Tier'
        },
        {
            title: 'Adler',
            text: 'Ich bin Mohammad. Mein Lieblingstier ist die Katze, weil sie freundlich und nett ist. Wenn ich ein Tier sein muss, werde ich Adler wählen. Er lebt auf den Bergen und ist ein Wildtier. Er isst verschiedenes Essen, zum Beispiel Fisch und Fleisch. Er ist gross und wohnt oft allein. Er gefällt mir sehr, weil er fliegen kann und Freiheit hat. Er hat ein bisschen mit mir zu tun (ich bin oft allein und arbeite für mich selbst). Ich mag nicht, wenn er andere Vögel jagt. Ich möchte kein Adler sein, aber wenn ich es sein müsste, würde ich Ja sagen, weil er überall fliegen kann. Ich habe ihn auch in Afghanistan gesehen und Kontakt gehabt. Ich bin auf den Berg gegangen und dort habe ich einen Adler mit seinem Kind gesehen. Ich liebe sein Lebenssystem.',
            img: 'img/img_ignore/animals/Adler.png',
            category: 'Tier'
        },
        {
            title: 'Pferd',
            text: 'Ich mag Pferde, weil das Pferd mein Lieblingstier ist. Es lebt überall und ist ein Haustier. Als Kind bin ich mit einem Pferd geritten. Das war für mich interessant und lustig. Am Anfang war es ein bisschen schwierig, aber von Tag zu Tag konnte ich besser mit dem Pferd kommunizieren. Es frisst Gras und Heu. Es kann klein und gross sein und hat verschiedene Farben. Es hat vier Füße und einen langen Schwanz. Mit dem Pferd kannst du immer glücklich sein, aber manchmal ist es nervös und frech. Mein Vater hat mir gesagt, dass das Pferd ein Lieblingstier von Hazrat Mohammed (dem Propheten) war, deshalb mag ich das Pferd.',
            img: 'img/img_ignore/animals/Pferd.png',
            category: 'Tier'
        },
        {
            title: 'Hund',
            text: 'Mein Lieblingstier ist der Hund. Der Hund lebt im Haus. Man kann mit dem Hund viel Spass haben. Der Hund ist sehr treu. Ich hatte in Afghanistan einen grossen Hund und ich hatte viel Spass mit diesem Hund. Ich bin mit dem Hund jeden Tag draussen gegangen. Ich habe in meinem Leben keinen Menschen oder kein Tier gesehen, der so treu wie der Hund ist.',
            img: 'img/img_ignore/animals/Hund.png',
            category: 'Tier'
        },
        {
            title: 'Vogel',
            text: 'Mein Lieblingstier ist der Vogel. Ich mag Vögel, weil sie fliegen können. Es gibt verschiedene Arten von ihnen, zum Beispiel farbige Vögel hoch auf den Bäumen. Wenn wir früh am Morgen aufstehen, hören wir einen angenehmen Klang in der Natur. Es gibt zwei Arten von Vögeln: einige sind Haustiere und andere Wildtiere. Vögel leben im Nest; sie bauen Nester auf einem hohen Ort in den Bäumen, weil dort die Eier und Küken sicher sind. Sie zeigen uns Freiheit durch ihr Fliegen.',
            img: 'img/img_ignore/animals/Vogel.png',
            category: 'Tier'
        },
        {
            title: 'Igel',
            text: 'Ich möchte ein Igel sein. Der Igel ist ein kleines, aber interessantes Tier. Er lebt im Wald, im Garten oder unter der Erde und versteckt sich gern in Laub. Im Winter hält er Winterschlaf. Er frisst Insekten und Würmer und ist deshalb nützlich für die Natur. Auf seinem Rücken hat er spitze Stacheln, und mit seiner kleinen Nase kann er gut riechen. Ich mag den Igel, weil seine Stacheln wie kleine Hügel aussehen. In der Ukraine habe ich viele Igel gesehen und mich immer gefreut. Der Igel ist klein, stark und mutig. Ich möchte ein Igel sein und nachts durch die Natur laufen.',
            img: 'img/img_ignore/animals/Igel.png',
            category: 'Tier'
        },
        {
            title: 'Löwe',
            text: 'Wie Sie in der Überschrift sehen, ist der Löwe mein Lieblingstier. Löwen leben vor allem in Afrika und sind normalerweise Wildtiere, daher gefährlich für den Menschen. Sie fressen Fleisch. Männliche Löwen haben eine Mähne, und es gibt verschiedene Arten von Löwen. Eine heisst Panthera leo und ist eine der grössten Katzenarten. Opfer ist er nicht, darum gefällt er mir. Er hat einen komplexen Charakter, was ich mir in meiner Kindheit gewünscht habe. Kontrolle hat er im Griff. Diese Eigenschaft verbindet uns. Alle Tiere sind mit guten und schlechten Eigenschaften perfekt. Weil er der König der Tiere ist und im Wald die Kontrolle hat, möchte ich dieses Tier sein. Zum Glück hatte ich im Zoo Kontakt mit ihm.',
            img: 'img/img_ignore/animals/Löwe.png',
            category: 'Tier'
        },
        {
            title: 'Katze 2',
            text: 'Mein Lieblingstier ist die Katze. Ich liebe Katzen sehr, weil meine Tante eine Katze hat. Als ich in Ghana war, hatte ich eine Katze als Haustier. Der Name meiner Katze ist Mimi. Sie war die beste Katze für mich und meine Tante. Aber Mimi isst sehr viel und das mag ich nicht.',
            img: 'img/img_ignore/animals/Katze2.png',
            category: 'Tier'
        },
        {
            title: 'Katze 3',
            text: 'Mein Lieblingstier ist die Katze. Ich habe viele Katzen in meinem Haus. Das ist ein Haustier, aber ich habe auch wilde Katzen gesehen. Die Katze frisst Fleisch und Mäuse und manchmal andere kleine Tiere. Sie sehen sehr süss und nett aus. Sie haben ein weiches Fell, zwei Ohren, einen langen Schwanz und vier Beine. Ich mag Katzen, weil sie Kontakttiere sind und schnurren. Ich mag nicht, wenn Katzen aggressiv sind und Möbel zerkratzen. Ich möchte dieses Tier sein, weil ich jeden Tag spielen will. Ich möchte, dass mich alle lieben und streicheln. Als ich klein war, habe ich jeden Tag Kontakt mit Katzen gehabt. Jetzt habe ich keine mehr, aber ich möchte gern wieder eine kaufen.',
            img: 'img/img_ignore/animals/Katze3.png',
            category: 'Tier'
        },
        {
            title: 'Vogel 2',
            text: 'Der Vogel lebt in den Bäumen. Er frisst Getreide und sieht klein und harmlos aus. Mir gefällt, wie er sich um seine Küken kümmert; sie sind sehr süss. Das hat viel mit mir zu tun, deshalb möchte ich er sein. Es gibt eine besondere Atmosphäre, wenn Vögel miteinander „sprechen“ und schöne Lieder singen, besonders im Wald. Als ich ein Kind war, habe ich oft draussen Vögel mit Futter versorgt. Sie brauchten immer Essen, und ich habe ihnen gern geholfen. Sie sind klein, aber haben viel Geduld, um schwierige Aufgaben zu bewältigen, z. B. Äste für ihr Nest zu sammeln und ihre Küken zu schützen.',
            img: 'img/img_ignore/animals/Vogel2.png',
            category: 'Tier'
        },
        {
            title: 'Pferd 2',
            text: 'Ich mag Pferde, weil das Pferd mein Lieblingstier ist. Es lebt überall und ist ein Haustier. Als Kind bin ich mit einem Pferd geritten. Das war für mich interessant und lustig. Am Anfang war es ein bisschen schwierig, aber von Tag zu Tag konnte ich besser kommunizieren. Es frisst Gras und Heu. Es kann klein oder gross sein und hat verschiedene Farben. Es hat vier Füße und einen langen Schwanz. Mit dem Pferd kannst du immer glücklich sein, aber manchmal ist es nervös und frech. Mein Vater hat mir gesagt, dass das Pferd ein Lieblingstier von Hazrat Mohammed war, deshalb mag ich Pferde.',
            img: 'img/img_ignore/animals/Pferd.png',
            category: 'Tier'
        },
        {
            title: 'Fuchshai',
            text: 'Fuchshaie leben meistens im östlichen Pazifischen Ozean. Sie halten sich in etwa 550 Meter Tiefe auf, weil sie das besser finden. Diese Haie sind Wildtiere, sehr scheu und mögen Menschen nicht. Fuchshaie fressen vor allem pelagische Fischschwärme, zum Beispiel Blaufische, junge Tunfische und Makrelen. Gelegentlich fressen sie auch Tintenfische, Krustentiere oder Seevögel. Dabei benutzen sie ihre langen Schwänze wie eine Peitsche, um ihre Beute zu treffen. Zur Familie der Alopiidae gehörend, haben Fuchshaie ihren Namen von den langen Schwänzen und dem griechischen Wort für „Fuchs“. Ein gesunder Fuchshai ist ungefähr 6,1 Meter lang und wiegt etwa 500 Kilogramm. Ich liebe Fuchshaie, weil sie sehr süß aussehen. Sie sind sehr interessante Fische und ihre Schwänze finde ich ein bisschen lustig. Fuchshai und ich sind beide scheu, wir essen gerne Fisch und wir schwimmen gerne. Fuchshaie sind meine Lieblingstiere. Einzig ihr Maul mag ich nicht so gern, weil es ständig traurig aussieht.',
            img: 'img/img_ignore/animals/fuchshai.png',
            category: 'Tier'
        },


        {
            title: 'Der zweite Emmen Tag',
            text: 'Wir hatten mit einer anderen Klasse einen Ausflug gehabt. Wir haben uns in Burgdorf um 8 Uhr getroffen. Dann sind wir mit dem Zug nach Lützelflüh gefahren. Wir sind Lützelflüh bis Zollbrück gelaufen. Ich habe mit einem Mädchen viel gesprochen. Dieses Mädchen heisst Wike. Sie kommt aus Griechenland. Wir sind um 11.Uhr in Zollbrück angekommen. Dort haben wir einen warmen Tee getrunken. Ich habe viele neue Kollegen und Kolleginnen gefunden. Das war super!',
            img: 'img/img_ignore/texte-frei/emme.jpg',
            category: 'Schule'
        },
        {
            title: 'Ausflug in den Seilpark',
            text: 'Es war mein erster Ausflug in meiner ganzen Schulzeit und ich wusste gar nicht wie es geht oder was ein Seilpark ist. Aber wir waren mit der ganzen Schule dort und sind hoch in die Berge gefahren. Das war sehr interessant für mich und wir hatten viel Spass zusammen. Wir haben dort ein paar Fotos gemacht.',
            img: 'img/img_ignore/texte-frei/EliundUsma_t.jpg',
            category: 'Schule'
        },
        {
            title: 'Rückblick Ausflug an die Emme und Eislaufen',
            text: 'Der Ausflug hat am Freitag, 29.11.24 stattgefunden. Um 8:00 Uhr haben wir uns neben dem Bahnhof getroffen. Dann sind wir nach Lützelflüh gefahren. In Lützelflüh sind wir neben der Emme gelaufen. Wir sind bis Zollbrück gegangen. In Zollbrück haben wir warmen Tee getrunken. Dann sind wir nach Hasle bei Burgdorf gefahren.',
            img: 'img/img_ignore/texte-frei/eisl.jpg',
            category: 'Schule'
        },
        {
            title: 'Tag: Ausflug an der Emme',
            text: 'Wir hatten die ganze Schule einen Ausflug an der Emme in Lützelflüh. Ich bin um 6:00 Uhr aufgestanden, danach bin ich mit dem Zug gefahren, Wir sind von Burgdorf bis Lützelflüh gelaufen. Wir haben miteinander kennengelernt und auch viel Spass gehabt. Wir sind zwei Stunden gewandert. Das war sehr interessant für mich. Für mich war es sehr gut, weil wir Deutsch gesprochen haben.',
            img: 'img/img_ignore/texte-frei/emme1.jpg',
            category: 'Schule'
        },
        {
            title: 'Rückblich Schneetag',
            text: 'Am Freitag, den 28. Februar 2025 ging ich mit meiner Klasse schlitteln. Der Zug ist um 8:51 Uhr ab Burgdorf nach Thun / Beatenberg gefahren. Alle Schüler sind mit der Drahtseilbahn und mit dem Sessellift gefahren. Aber es war das erste Mal, dass ich schlitteln war, also war es sehr schwierig, aber es war auch sehr gut und schön. Wir haben dann eine Suppe getrunken und ein Brot gegessen. Wir mussten warme, wetterfeste Kleidung und Schuhe, Handschuhe, Mütze und eine Sonnenbrille tragen. Wir sind im Bahnhof Burgdorf um 17:35 angekommen.',
            img: 'img/img_ignore/texte-frei/schnee.jpeg',
            category: 'Schule'
        },


        {
            title: 'Zukunft',
            text: 'Ich versuche es, eine gute Zukunft zu haben. Wenn jemand keinen Traum hat, kann er gar nicht aufstehen. Du musst kämpfen, um zu überleben und du musst stark sein, um zu kämpfen. Einfach musst du daran bleiben und du musst nicht aufgeben.',
            img: 'img/img_ignore/texte-frei/zukunft.jpg',
            category: 'Frei Texte'
        },

        {
            title: 'Computerspiele ',
            text: 'Ich beginne mit dem Schreiben über meine Online-Spiele, die ich auf meinem PC und meiner Konsole spiele. Ich liebe es, Spiele zu spielen, weil es einfach ein sehr beliebtes Hobby von mir ist. Ich denke, ich bin wirklich gut darin, besonders wenn ich gerade erst angefangen habe, am PC zu spielen. Insgesamt bin ich aber besser auf der Konsole, und je nach dem, wie viel und wie lange ich spiele, werde ich bald besser sein als je zuvor auf dem PC.',
            img: 'img/img_ignore/texte-frei/gamer.png',
            category: 'Frei Texte'
        },


        // {
        //     title: '',
        //     text: '',
        //     img: 'img/img_ignore/texte-frei/',
        //     category: ''
        // },

    ];
    const MAX_LEN = 80;

    function populateTexts() {
        const container = document.getElementById('texts-container');
        container.innerHTML = '';
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
                    const fullText = t.text;
                    const shortText = fullText.length > MAX_LEN
                        ? fullText.slice(0, MAX_LEN) + '…'
                        : fullText;

                    const card = document.createElement('div');
                    card.className = 'card text-card';
                    card.dataset.fulltext = fullText;

                    card.innerHTML = `
                        <img src="${t.img}" alt="${t.title}" loading="lazy" draggable="false">
                        <div class="card-body">
                            <h4>${t.title}</h4>
                            <p class="text-content">${shortText}</p>
                        </div>
                    `;
                    cardsDiv.appendChild(card);
                });

            container.appendChild(cardsDiv);
        });
    }

    populateTexts();

    document.getElementById('texts-container')
        .addEventListener('click', e => {
            const card = e.target.closest('.text-card');
            if (!card) return;

            const p = card.querySelector('.text-content');
            const full = card.dataset.fulltext;
            const isExpanded = p.classList.toggle('expanded');

            if (isExpanded) {
                p.textContent = full;
            } else {
                p.textContent = full.length > MAX_LEN
                    ? full.slice(0, MAX_LEN) + '…'
                    : full;
            }
        });

    const btn = document.querySelector('.menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (btn && mobileMenu) {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            btn.classList.toggle('open');
            mobileMenu.classList.toggle('active');
        });

        document.addEventListener('click', function (e) {
            const isClickInside = btn.contains(e.target) ||
                mobileMenu.contains(e.target);
            if (!isClickInside) {
                btn.classList.remove('open');
                mobileMenu.classList.remove('active');
            }
        });
    }

    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;
    const DEAD_ZONE = 15;

    window.addEventListener('scroll', () => {
        const currentY = window.scrollY;

        if (currentY - lastScrollY > DEAD_ZONE) {
            header.classList.add('hide');
        } else if (lastScrollY - currentY > DEAD_ZONE || currentY < 50) {
            header.classList.remove('hide');
        }

        lastScrollY = currentY;
    });

    const idk = 'https://youtu.be/O9URqxy_9Lo?si=GOJBDHgEJs8o4ENr';
    let kitmavvClicks = 0;
    const kitmavvEl = document.getElementById('kitmavv');
    if (kitmavvEl) {
        kitmavvEl.addEventListener('click', () => {
            kitmavvClicks++;
            if (kitmavvClicks === 11) {
                window.open(idk, '_blank');
                kitmavvClicks = 0;
            }
        });
    }

});
