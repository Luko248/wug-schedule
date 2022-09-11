/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Resources/Scripts/data/schedule.ts":
/*!********************************************!*\
  !*** ./Resources/Scripts/data/schedule.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.data = void 0;
const track1Name = 'Aula';
const track2Name = 'SF 2.162';
const track3Name = 'SF 1.141';
exports.data = [
    {
        'days': [
            {
                'date': '2022-09-13',
                'name': 'úterý',
                'tracks': [
                    {
                        "title": track1Name,
                        "sessions": [
                            {
                                "title": "Azure SQL Managed Instance Intro",
                                "description": "O možnostech provozu SQL Serveru v Azure Virtual Machines a o Azure SQL Database toho padlo již mnoho, služba která však zůstávala neprávem m4imo pozornost je Azure SQL Managed Instance. Tato služba je svým profilem a možnostmi v rámci cloud workload asi nejblíže klasickému on-premise SQL Serveru. Pojďme si společně ukázat, co všechno Azure SQL MI umí, jak ji správně nasadit, zabezpečit a využít pro migraci on-prem workloadu.",
                                "dateTimeStart": "2022-09-12T09:00:00",
                                "dateTimeEnd": "2022-09-12T10:15:00",
                                "speakers": [
                                    {
                                        "name": "Marek Chmel",
                                        "photo": "https://www.wug.cz/ContentPages/GetFile.ashx?PhotoID=697&ThumbnailSizeName=medium",
                                        "role": "MCT, MCSE, Microsoft"
                                    }
                                ]
                            },
                            {
                                "title": "Lessons learned from Azure SQL Servers",
                                "description": "Resource allocation in Azure is not as straightforward as it may look. Let's discuss the caveats and solutions we identified in the last few years. We will talk about storage performance, memory pressure, CPU monitoring & reporting in Azure, and our issues with SOS_Scheduler_Yield & SMT_Stories we published.",
                                "dateTimeStart": "2022-09-12T10:30:00",
                                "dateTimeEnd": "2022-09-12T11:45:00",
                                "speakers": [
                                    {
                                        "name": "Michal Tinthofer",
                                        "photo": "https://www.wug.cz/ContentPages/GetFile.ashx?PhotoID=2587&ThumbnailSizeName=medium",
                                        "role": "MCT, MCITP, MCTS, Woodler"
                                    }
                                ]
                            },
                            {
                                "title": "Běžné hříchy v konfiguraci SQL Serveru",
                                "description": "Instalací SQL Serveru jeho nasazení nekončí. V přednášce se praktickou formou seznámíme s tím, jak prověřit, a případně napravit, konfigurace, které se při instalaci SQL Serveru buď nedají nastavit, nebo se často zanedbávají.",
                                "dateTimeStart": "2022-09-12T13:00:00",
                                "dateTimeEnd": "2022-09-12T14:15:00",
                                "speakers": [
                                    {
                                        "name": "Vladimír Mužný",
                                        "photo": "https://www.wug.cz/ContentPages/GetFile.ashx?PhotoID=1682&ThumbnailSizeName=medium",
                                        "role": "MVP, MCT, MCSE"
                                    }
                                ]
                            },
                            {
                                "title": "Microsoft SQL Servers in AWS",
                                "description": "Amazon AWS dává architektům několik možností, jakou databázi vybrat pro své řešení. V naší přednášce se zaměříme na Microsoft SQL Server a možnosti jeho využití v rámci různých AWS služeb. Pojďme si společně ukázat jak SQL Server v AWS nasadit, spravovat, zabezpečit a vyřešit HA\/DR scénáře.",
                                "dateTimeStart": "2022-09-12T14:30:00",
                                "dateTimeEnd": "2022-09-12T15:15:00",
                                "speakers": [
                                    {
                                        "name": "Marek Chmel",
                                        "photo": "https://www.wug.cz/ContentPages/GetFile.ashx?PhotoID=697&ThumbnailSizeName=medium",
                                        "role": "MCT, MCSE, Microsoft"
                                    }
                                ]
                            },
                            {
                                "title": "Základy automatizace správy SQL Serveru",
                                "description": "Administrátor, který má na starost mnoho různých technologií v rámci své firemní infrastruktury, může být při administraci SQL Serveru ztracený. Přednáška ukazuje a vysvětluje, jak správně zajistit nasazeným databázím dlouhý život a vysokou spolehlivost.",
                                "dateTimeStart": "2022-09-12T15:30:00",
                                "dateTimeEnd": "2022-09-12T16:45:00",
                                "speakers": [
                                    {
                                        "name": "Vladimír Mužný",
                                        "photo": "https://www.wug.cz/ContentPages/GetFile.ashx?PhotoID=1682&ThumbnailSizeName=medium",
                                        "role": "MVP, MCT, MCSE"
                                    }
                                ]
                            },
                            {
                                "title": "Zabezpečení Microsoft SQL Serveru",
                                "description": "Na přednášce si představíme bezpečnostní model Microsoft SQL Serveru a vysvětlíme si, jak vhodným způsobem zabezpečit přístup k našim datům, abyste se vyvarovali častým chybám vedoucím k útoku na vaše databáze. Vysvětlíme si klíčové prvky bezpečnostního modelu Microsoft SQL Serveru, seznámíte se se zabezpečením instance i jednotlivých databází. Jako administrátoři se dozvíte, jak správně zpřístupnit vybrané databáze vašim aplikacím. Jako vývojáři se dozvíte, jak vhodně přiřadit oprávnění ve vašich databázích, abyste vašim aplikacím nedali zbytečně veliká oprávnění, která mohou být zneužita při útoku na vaše aplikace. Na přednášce budou představeny často zneužívané útoky a pobavíme se i o ochraně dat s pomocí šifrování.",
                                "dateTimeStart": "2022-09-12T17:00:00",
                                "dateTimeEnd": "2022-09-12T18:15:00",
                                "speakers": [
                                    {
                                        "name": "David Gešvindr",
                                        "photo": "https://www.wug.cz/ContentPages/GetFile.ashx?PhotoID=2335&ThumbnailSizeName=medium",
                                        "role": "MVP, MCT, MCSE"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "title": track2Name,
                        "sessions": [
                            {
                                "title": "Novinky v Microsoft SQL Serveru 2022",
                                "description": "Na přednášce si představíme novinky pro vývojáře i administrátory, které Microsoft připravuje pro příští verzi Microsoft SQL Serveru a na praktických ukázkách si předvedeme, proč je důvod se na příští verzi Microsoft SQL Serveru těšit.",
                                "dateTimeStart": "2022-09-12T09:00:00",
                                "dateTimeEnd": "2022-09-12T10:15:00",
                                "speakers": [
                                    {
                                        "name": "David Gešvindr",
                                        "photo": "https://www.wug.cz/ContentPages/GetFile.ashx?PhotoID=2335&ThumbnailSizeName=medium",
                                        "role": "MVP, MCT, MCSE"
                                    }
                                ]
                            },
                            {
                                "title": "Parametr, literál nebo proměnná – proč bych se měl zajímat?",
                                "description": "K sestavení optimálního exekučního plánu vyžaduje SQL Server pokud možno co nejreprezentativnější statistické informace o množině dotazovaných dat. Jako vývojáři mu však můžeme tento proces (ne)chtěně trochu zkomplikovat. Jaké jsou výhody a nevýhody parametrizovaných dotazů, použití proměnných nebo snad v jaké situaci použít literál? Jaký bude dopad jejich použití na procedure cache, rychlost zpracování a samotný exekuční plán? Nejen to bude předmětem přednášky, jejímž cílem bude ukázat trochu skrytá zákouti SQL Serveru, která by však každý vývojář měl bezpečně znát.",
                                "dateTimeStart": "2022-09-12T10:30:00",
                                "dateTimeEnd": "2022-09-12T11:45:00",
                                "speakers": [
                                    {
                                        "name": "Pavel Málek",
                                        "photo": "https://www.wug.cz/ContentPages/GetFile.ashx?PhotoID=2930&ThumbnailSizeName=medium"
                                    }
                                ]
                            },
                            {
                                "title": "Pokročilé funkce Azure Cosmos DB, které možná neznáte",
                                "description": "O Cosmos DB se na SQL Server Bootcampu hovořilo v minulých letech již několikrát, nicméně hodí se připomenout, že tato databáze dostává stále nové a nové funkce, a obsahuje mnoho řadu featur, o kterých ne každý ví.\r\nNa této přednášce se podíváme, jak pracovat s transakčními dávkami, kdy a jak používat hierarchické partition keys, jak zajistit optimistickou konkurenčnost, k čemu lze využít TTL u kontejnerů, a pár dalších zajímavostí.",
                                "dateTimeStart": "2022-09-12T13:00:00",
                                "dateTimeEnd": "2022-09-12T14:15:00",
                                "speakers": [
                                    {
                                        "name": "Tomáš Herceg",
                                        "photo": "https://www.wug.cz/ContentPages/GetFile.ashx?PhotoID=2217&ThumbnailSizeName=medium",
                                        "role": "MVP, RIGANTI s.r.o."
                                    }
                                ]
                            },
                            {
                                "title": "Autoincrement (identity) není jediná možnost jak generovat PK",
                                "description": "Hromada aplikací využívá ve spojení s EF Core klasický autoincrement (identity) a není na tom nic špatného. Ale existují i jiné možnosti jak PK generovat a v některých případech může být jejich použití výhodnější. Ukážeme si jaké možnosti to jsou a jaké jsou (ne)výhody.",
                                "dateTimeStart": "2022-09-12T14:30:00",
                                "dateTimeEnd": "2022-09-12T15:15:00",
                                "speakers": [
                                    {
                                        "name": "Jiří Činčura",
                                        "photo": "https://www.wug.cz/ContentPages/GetFile.ashx?PhotoID=1269&ThumbnailSizeName=medium",
                                        "role": "MVP"
                                    }
                                ]
                            },
                            {
                                "title": "Real-life experience from SQL Server performance tuning",
                                "description": "Let’s talk about some of our exciting success stories with customers. You may find value in how we approached various cases. It could be more of a discussion than a presentation. We want to talk about several cases: Tracing the sync\/async column statistics update and its impact on execution plans. Columnstore index builds background task issues. Real-life partitioning solution to archive data in under one second. How to bulk insert data faster than to heap. How to monitor and tune recursive triggers containing dynamic TSQL constructs? Or chains of triggers firing other triggers? Extended Events and SMT monitoring help! We will go through our real-life cases and how we handled them.",
                                "dateTimeStart": "2022-09-12T15:30:00",
                                "dateTimeEnd": "2022-09-12T16:45:00",
                                "speakers": [
                                    {
                                        "name": "Michal Tinthofer",
                                        "photo": "https://www.wug.cz/ContentPages/GetFile.ashx?PhotoID=2587&ThumbnailSizeName=medium",
                                        "role": "MCT, MCITP, MCTS, Woodler"
                                    }
                                ]
                            },
                            {
                                "title": "„Otestuj“ ma ak to dokážeš?!",
                                "description": "Akým spôsobom testujete Vaše dátové projekty? Testujete ich vôbec? Nalejme si čistého vína, riešenia, ktoré spracovávajú dáta sú veľmi málo testované... Preto začneme od základov testovania (nie len dátových skladov a BI riešení), z čoho by ste mali byť znepokojení (dnes) a ako tomu predísť a zaistiť si kľudný spánok (v budúcnu). Joyful Craftsmeni Petr Pařík a Jaroslav Reken Vám ukážu kúsok teórie ale hlavne praktické príklady z reálnych projektov ... hlavne aby Vás dostali mimo Vašu komfortnú zónu.",
                                "dateTimeStart": "2022-09-12T17:00:00",
                                "dateTimeEnd": "2022-09-12T18:15:00",
                                "speakers": [
                                    {
                                        "name": "Jaroslav Reken",
                                        "photo": "https://www.wug.cz/ContentPages/GetFile.ashx?PhotoID=3357&ThumbnailSizeName=medium",
                                        "role": "Joyful Craftsmen"
                                    },
                                    {
                                        "name": "Petr Pařík",
                                        "photo": "https://www.wug.cz/ContentPages/GetFile.ashx?PhotoID=3355&ThumbnailSizeName=medium",
                                        "role": "Joyful Craftsmen"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        'title': track3Name,
                        "sessions": [
                            {
                                "title": "Power BI 101",
                                "description": "Přednášku berte jako úvod do Power BI. Uvidíte všechny kroky, které musíte udělat, abyste mohli analyzovat data a výsledky s kolegy. Začneme získáním a transformací dat, dále se budeme věnovat vytvoření datového modelu a základům DAX (výpočty). Pokračovat budeme vizualizací a analýzou. Nakonec uvidíte, jak data sdílet s kolegy, aby každý viděl, jen to co má.",
                                "dateTimeStart": "2022-09-12T09:00:00",
                                "dateTimeEnd": "2022-09-12T10:15:00",
                                "speakers": [
                                    {
                                        "name": "Štěpán Bechynský",
                                        "photo": "https://www.wug.cz/ContentPages/GetFile.ashx?PhotoID=1282&ThumbnailSizeName=medium"
                                    }
                                ]
                            },
                            {
                                "title": "Interaktivní reporty v Power BI a calculation groups",
                                "description": "Na přednášce si ukážeme, jak v Power BI reportech přepínat metriku s použitím sliceru z nenavázané dimenze. Ukážeme si příklady s použitím časových kalkulací, použití proměnných pro optimalizaci kódu a v neposlední řadě calculation groups a jaké problémy s nimi jsme schopni vyřešit.",
                                "dateTimeStart": "2022-09-12T10:30:00",
                                "dateTimeEnd": "2022-09-12T11:45:00",
                                "speakers": [
                                    {
                                        "name": "Jiří Neoral",
                                        "photo": "https://www.wug.cz/ContentPages/GetFile.ashx?PhotoID=1855&ThumbnailSizeName=medium",
                                        "role": "MVP"
                                    }
                                ]
                            },
                            {
                                "title": "Microsoft Purview a Data Governance",
                                "description": "Na přednášce si představíme problematiku Data Governance a proč by nás také měla zajímat, a ukážeme si, jak nám s ní může pomoci nástroj Microsoft Purview. Na praktické ukázce si představíme rozhraní tohoto nástroje a ukážeme si práci s Data Map\/Data Catalog, Data Classification, Business Glossary a také programatický přístup přes REST API.\r\n",
                                "dateTimeStart": "2022-09-12T13:00:00",
                                "dateTimeEnd": "2022-09-12T14:15:00",
                                "speakers": [
                                    {
                                        "name": "Dominik Stodolovský",
                                        "photo": "https://www.wug.cz/ContentPages/GetFile.ashx?PhotoID=3354&ThumbnailSizeName=medium",
                                        "role": "Joyful Craftsmen"
                                    },
                                    {
                                        "name": "Filip Eichenmann",
                                        "photo": "https://www.wug.cz/ContentPages/GetFile.ashx?PhotoID=3353&ThumbnailSizeName=medium",
                                        "role": "Joyful Craftsmen"
                                    }
                                ]
                            },
                            {
                                "title": "Power BI - sledování změn",
                                "description": "Znáte ten pocit, kdy jste si přepsali nějakou složitější measure a rádi byste jí vrátili do stavu, jak vypadala před hodinou? Nebo kolega něco upravil ve vašem modelu, ale vy ani nevíte co? Při vývoji jakéhokoliv  řešení je dnes normální vše verzovat, většinou v Git. Měli bychom to dělat i při práci s Power BI? A jde to vůbec? Projděme si, jaké máme možnosti a jaké jsou k dispozici nástroje.",
                                "dateTimeStart": "2022-09-12T14:30:00",
                                "dateTimeEnd": "2022-09-12T15:15:00",
                                "speakers": [
                                    {
                                        "name": "Petr Pařík",
                                        "photo": "https://www.wug.cz/ContentPages/GetFile.ashx?PhotoID=3355&ThumbnailSizeName=medium",
                                        "role": "Joyful Craftsmen"
                                    }
                                ]
                            },
                            {
                                "title": "Power BI a SSAS tabular optimalizace výkonu prakticky",
                                "description": "Jak funguje Power BI a tabular uvnitř? Popíšeme si jak Power BI vyhodnocuje dotazy, typické zabijáky výkonu při tvorbě reportů. Co je storage engine, formula engine, jak funguje komprese a v neposlední řadě jak tohle všechno využít v náš prospěch při ladění a optimalizaci Power BI reportů.",
                                "dateTimeStart": "2022-09-12T15:30:00",
                                "dateTimeEnd": "2022-09-12T16:45:00",
                                "speakers": [
                                    {
                                        "name": "Jiří Neoral",
                                        "photo": "https://www.wug.cz/ContentPages/GetFile.ashx?PhotoID=1855&ThumbnailSizeName=medium",
                                        "role": "MVP"
                                    }
                                ]
                            },
                            {
                                "title": "Paginated reporty a DAX jako dotazovací jazyk",
                                "description": "Paginated reporty se používají jednak v technologii reporting services (SSRS), jsou ale dostupné i v Power BI službě od licenčního modelu PPU (Premium Per User). Pro jaké scénáře jsou paginated reporty vhodné a jak si sami můžeme report vytvořit a napsat si v jazyce DAX? Jak by dopadlo srovnání mezi MDX dotazem a DAX dotazem proti SSAS tabular? Na tyto otázky by Vám měla odpovědět následující přednáška.",
                                "dateTimeStart": "2022-09-12T17:00:00",
                                "dateTimeEnd": "2022-09-12T18:15:00",
                                "speakers": [
                                    {
                                        "name": "Jiří Neoral",
                                        "photo": "https://www.wug.cz/ContentPages/GetFile.ashx?PhotoID=1855&ThumbnailSizeName=medium",
                                        "role": "MVP"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];


/***/ }),

/***/ "./Resources/Scripts/schedule.ts":
/*!***************************************!*\
  !*** ./Resources/Scripts/schedule.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initSchedule = void 0;
const schedule_1 = __webpack_require__(/*! ./data/schedule */ "./Resources/Scripts/data/schedule.ts");
function initSchedule() {
    generateContent();
    hideSessionContentOnTablet();
    handleSelectDay();
}
exports.initSchedule = initSchedule;
function handleSelectDay() {
    const navButtons = document.querySelectorAll('.nav__button');
    const scheduleDays = document.querySelectorAll('.schedule');
    for (let i = 0; i < scheduleDays.length; i++) {
        const button = navButtons[i];
        const day = scheduleDays[i];
        if (i + 1 === getConferenceDay()) {
            button.classList.add('nav__button--active');
            day.classList.add('schedule--active');
            getSessionsCount(day);
        }
        button.addEventListener('click', () => {
            scheduleDays.forEach(day => {
                day.classList.remove('schedule--active');
            });
            navButtons.forEach(button => {
                button.classList.remove('nav__button--active');
            });
            button.classList.add('nav__button--active');
            day.classList.add('schedule--active');
            getSessionsCount(day);
        });
    }
}
function getSessionsCount(schedule) {
    const sessionsCount = document.querySelectorAll('.schedule--active > .session').length;
    schedule.classList.add('sessions-' + sessionsCount.toString());
}
function getConferenceDay() {
    const currentDate = new Date();
    let today = currentDate.getDate();
    const firstDayDate = new Date('2022-09-12').getDate();
    const secondDayDate = new Date('2022-09-12').getDate();
    const thirdDayDate = new Date('2022-09-12').getDate();
    let conferenceDay = 0;
    if (today <= firstDayDate) {
        conferenceDay = 1;
    }
    else if (today > firstDayDate && today < thirdDayDate) {
        conferenceDay = 2;
    }
    else {
        conferenceDay = 3;
    }
    //    console.log(conferenceDay)
    return conferenceDay;
}
function hideSessionContentOnTablet() {
    const details = document.querySelectorAll('details');
    const tabletResolution = 768;
    if (window.innerWidth <= tabletResolution) {
        details.forEach(detailsElem => {
            detailsElem.removeAttribute('open');
        });
    }
}
function generateContent() {
    const scheduleWrapper = document.querySelector('.schedule__wrapper');
    schedule_1.data.map((schedule) => {
        schedule.days.map((day) => {
            scheduleWrapper.appendChild(createDay(day));
        });
    });
}
function createDay(day) {
    const dayElement = document.createElement('div');
    dayElement.setAttribute('class', 'schedule');
    dayElement.setAttribute('data-date', day.date);
    day.tracks.map((track) => {
        track.sessions.map((session) => {
            dayElement.appendChild(createSession(session, track));
        });
    });
    // console.log('Day: ' + day.date + ' generated')
    return dayElement;
}
function createSession(session, track) {
    const sessionTime = document.createElement('time');
    sessionTime.setAttribute('datetime', session.dateTimeStart);
    sessionTime.innerHTML = handleTime(new Date(session.dateTimeStart)) + ' - ' + handleTime(new Date(session.dateTimeEnd));
    const sessionTrack = document.createElement('small');
    sessionTrack.innerHTML = track.title;
    const sessionHead = document.createElement('div');
    sessionHead.setAttribute('class', 'session__head');
    sessionHead.appendChild(sessionTime);
    sessionHead.appendChild(sessionTrack);
    const sessionTitle = document.createElement('summary');
    sessionTitle.innerHTML = session.title;
    const sessionDesc = document.createElement('p');
    sessionDesc.innerHTML = session.description;
    const sessionContent = document.createElement('details');
    sessionContent.setAttribute('open', null);
    const sessionSpeakersWrapper = document.createElement('div');
    sessionSpeakersWrapper.setAttribute('class', 'session__speakers');
    session.speakers.map((speaker) => {
        sessionSpeakersWrapper.appendChild(createSpeaker(speaker));
    });
    const sessionFooter = document.createElement('div');
    sessionFooter.setAttribute('class', 'session__footer');
    session.speakers.map((speaker) => {
        const speker = document.createElement('span');
        speker.innerHTML = speaker.name;
        sessionFooter.appendChild(speker);
    });
    sessionContent.appendChild(sessionTitle);
    sessionContent.appendChild(sessionSpeakersWrapper);
    sessionContent.appendChild(sessionDesc);
    const sessionElem = document.createElement('div');
    sessionElem.setAttribute('class', 'session session--' + track.title.replace(" ", "-").replace(".", "-").toLowerCase());
    sessionElem.appendChild(sessionHead);
    sessionElem.appendChild(sessionContent);
    sessionElem.appendChild(sessionFooter);
    // console.log('Session: ' + session.title +' generated')
    return sessionElem;
}
function createSpeaker(speaker) {
    const speakerElem = document.createElement('div');
    speakerElem.setAttribute('class', 'speaker');
    const speakerPhoto = document.createElement('img');
    speakerPhoto.setAttribute('src', speaker.photo);
    speakerPhoto.setAttribute('alt', speaker.name + ' photo');
    const speakerPhotoWrapper = document.createElement('div');
    speakerPhotoWrapper.setAttribute('class', 'speaker__photo');
    speakerPhotoWrapper.appendChild(speakerPhoto);
    const speakerName = document.createElement('span');
    speakerName.innerHTML = speaker.name;
    const speakerRole = document.createElement('small');
    speakerRole.innerHTML = speaker.role;
    const speakerContentWrapper = document.createElement('div');
    speakerContentWrapper.appendChild(speakerName);
    speakerContentWrapper.appendChild(speakerRole);
    speakerElem.appendChild(speakerPhotoWrapper);
    speakerElem.appendChild(speakerContentWrapper);
    // console.log('Speaker: ' + speaker.name + ' generated')
    return speakerElem;
}
const handleTime = (dateTime) => {
    let data = new Date(dateTime);
    let hours = data.getHours();
    let hoursString = "";
    let minutes = data.getMinutes();
    let minutesString = "";
    if (hours <= 9) {
        hoursString = '0' + hours.toString();
    }
    else {
        hoursString = hours.toString();
    }
    if (minutes <= 9) {
        minutesString = '0' + minutes.toString();
    }
    else {
        minutesString = minutes.toString();
    }
    const postTime = hoursString + ':' + minutesString;
    return postTime;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!***********************************!*\
  !*** ./Resources/Scripts/init.ts ***!
  \***********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const schedule_1 = __webpack_require__(/*! ./schedule */ "./Resources/Scripts/schedule.ts");
document.addEventListener("DOMContentLoaded", () => {
    (0, schedule_1.initSchedule)();
});

})();

/******/ })()
;
//# sourceMappingURL=init.js.map