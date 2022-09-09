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
                'date': '2022-09-12',
                'name': 'Den 1',
                'tracks': [
                    {
                        'title': track1Name,
                        'sessions': [
                            {
                                'title': 'Azure SQL Managed Instance Intro',
                                'description': 'O možnostech provozu SQL Serveru v Azure Virtual Machines a o Azure SQL Database toho padlo již mnoho, služba která však zůstávala neprávem mimo pozornost je Azure SQL Managed Instance. Tato služba je svým profilem a možnostmi v rámci cloud workload asi nejblíže klasickému on-premise SQL Serveru. Pojďme si společně ukázat, co všechno Azure SQL MI umí, jak ji správně nasadit, zabezpečit a využít pro migraci on-prem workloadu.',
                                'dateTimeStart': '2008-09-12T09:00',
                                'dateTimeEnd': '2008-09-12T10:15',
                                'speakers': [
                                    {
                                        'name': 'Marek Chmel',
                                        'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=697&ThumbnailSizeName=small',
                                        'role': 'MVP, MCT, MCSE'
                                    }
                                ]
                            },
                            {
                                'title': 'Lessons learned from Azure SQL Servers',
                                'description': 'Resource allocation in Azure is not as straightforward as it may look. Let\'s discuss the caveats and solutions we identified in the last few years. We will talk about storage performance, memory pressure, CPU monitoring & reporting in Azure, and our issues with SOS_Scheduler_Yield & SMT_Stories we published.',
                                'dateTimeStart': '2008-09-12T10:30',
                                'dateTimeEnd': '2008-09-12T11:45',
                                'speakers': [
                                    {
                                        'name': 'Michal Tinthofer',
                                        'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=2587&ThumbnailSizeName=small',
                                        'role': 'MCT, MCITP, MCTS, Woodler'
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        'title': track2Name,
                        'sessions': [
                            {
                                'title': 'Novinky v Microsoft SQL Serveru 2022',
                                'description': 'Na přednášce si představíme novinky pro vývojáře i administrátory, které Microsoft připravuje pro příští verzi Microsoft SQL Serveru a na praktických ukázkách si předvedeme, proč je důvod se na příští verzi Microsoft SQL Serveru těšit.',
                                'dateTimeStart': '2008-09-12T09:00',
                                'dateTimeEnd': '2008-09-12T10:15',
                                'speakers': [
                                    {
                                        'name': 'David Gešvindr',
                                        'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=2335&ThumbnailSizeName=small',
                                        'role': 'MVP, MCT, MCSE'
                                    }
                                ]
                            },
                            {
                                'title': 'Parametr, literál nebo proměnná – proč bych se měl zajímat?',
                                'description': 'K sestavení optimálního exekučního plánu vyžaduje SQL Server pokud možno co nejreprezentativnější statistické informace o množině dotazovaných dat. Jako vývojáři mu však můžeme tento proces (ne)chtěně trochu zkomplikovat. Jaké jsou výhody a nevýhody parametrizovaných dotazů, použití proměnných nebo snad v jaké situaci použít literál? Jaký bude dopad jejich použití na procedure cache, rychlost zpracování a samotný exekuční plán? Nejen to bude předmětem přednášky, jejímž cílem bude ukázat trochu skrytá zákouti SQL Serveru, která by však každý vývojář měl bezpečně znát.',
                                'dateTimeStart': '2008-09-12T10:30',
                                'dateTimeEnd': '2008-09-12T11:45',
                                'speakers': [
                                    {
                                        'name': 'Pavel Málek',
                                        'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=2930&ThumbnailSizeName=small',
                                        'role': ''
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        'title': track3Name,
                        'sessions': [
                            {
                                'title': 'Power BI 101',
                                'description': 'Přednášku berte jako úvod do Power BI. Uvidíte všechny kroky, které musíte udělat, abyste mohli analyzovat data a výsledky s kolegy. Začneme získáním a transformací dat, dále se budeme věnovat vytvoření datového modelu a základům DAX (výpočty). Pokračovat budeme vizualizací a analýzou. Nakonec uvidíte, jak data sdílet s kolegy, aby každý viděl, jen to co má.',
                                'dateTimeStart': '2008-09-12T09:00',
                                'dateTimeEnd': '2008-09-12T10:15',
                                'speakers': [
                                    {
                                        'name': 'Štěpán Bechynský',
                                        'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=1282&ThumbnailSizeName=small',
                                        'role': ''
                                    }
                                ]
                            },
                            {
                                'title': 'Interaktivní reporty v Power BI a calculation groups',
                                'description': 'Na přednášce si ukážeme, jak v Power BI reportech přepínat metriku s použitím sliceru z nenavázané dimenze. Ukážeme si příklady s použitím časových kalkulací, použití proměnných pro optimalizaci kódu a v neposlední řadě calculation groups a jaké problémy s nimi jsme schopni vyřešit.',
                                'dateTimeStart': '2008-09-12T10:30',
                                'dateTimeEnd': '2008-09-12T11:45',
                                'speakers': [
                                    {
                                        'name': 'Jiří Neoral',
                                        'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=1855&ThumbnailSizeName=small',
                                        'role': 'MVP'
                                    }
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                'date': '2022-09-13',
                'name': 'Den 2',
                'tracks': [
                    {
                        'title': track1Name,
                        'sessions': [
                            {
                                'title': '2 Day',
                                'description': 'O možnostech provozu SQL Serveru v Azure Virtual Machines a o Azure SQL Database toho padlo již mnoho, služba která však zůstávala neprávem mimo pozornost je Azure SQL Managed Instance. Tato služba je svým profilem a možnostmi v rámci cloud workload asi nejblíže klasickému on-premise SQL Serveru. Pojďme si společně ukázat, co všechno Azure SQL MI umí, jak ji správně nasadit, zabezpečit a využít pro migraci on-prem workloadu.',
                                'dateTimeStart': '2008-09-12T09:00',
                                'dateTimeEnd': '2008-09-12T10:15',
                                'speakers': [
                                    {
                                        'name': 'Marek Chmel',
                                        'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=697&ThumbnailSizeName=small',
                                        'role': 'MVP, MCT, MCSE'
                                    }
                                ]
                            },
                            {
                                'title': 'Lessons learned from Azure SQL Servers',
                                'description': 'Resource allocation in Azure is not as straightforward as it may look. Let\'s discuss the caveats and solutions we identified in the last few years. We will talk about storage performance, memory pressure, CPU monitoring & reporting in Azure, and our issues with SOS_Scheduler_Yield & SMT_Stories we published.',
                                'dateTimeStart': '2008-09-12T10:30',
                                'dateTimeEnd': '2008-09-12T11:45',
                                'speakers': [
                                    {
                                        'name': 'Michal Tinthofer',
                                        'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=2587&ThumbnailSizeName=small',
                                        'role': 'MCT, MCITP, MCTS, Woodler'
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        'title': track2Name,
                        'sessions': [
                            {
                                'title': 'Novinky v Microsoft SQL Serveru 2022',
                                'description': 'Na přednášce si představíme novinky pro vývojáře i administrátory, které Microsoft připravuje pro příští verzi Microsoft SQL Serveru a na praktických ukázkách si předvedeme, proč je důvod se na příští verzi Microsoft SQL Serveru těšit.',
                                'dateTimeStart': '2008-09-12T09:00',
                                'dateTimeEnd': '2008-09-12T10:15',
                                'speakers': [
                                    {
                                        'name': 'David Gešvindr',
                                        'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=2335&ThumbnailSizeName=small',
                                        'role': 'MVP, MCT, MCSE'
                                    }
                                ]
                            },
                            {
                                'title': 'Parametr, literál nebo proměnná – proč bych se měl zajímat?',
                                'description': 'K sestavení optimálního exekučního plánu vyžaduje SQL Server pokud možno co nejreprezentativnější statistické informace o množině dotazovaných dat. Jako vývojáři mu však můžeme tento proces (ne)chtěně trochu zkomplikovat. Jaké jsou výhody a nevýhody parametrizovaných dotazů, použití proměnných nebo snad v jaké situaci použít literál? Jaký bude dopad jejich použití na procedure cache, rychlost zpracování a samotný exekuční plán? Nejen to bude předmětem přednášky, jejímž cílem bude ukázat trochu skrytá zákouti SQL Serveru, která by však každý vývojář měl bezpečně znát.',
                                'dateTimeStart': '2008-09-12T10:30',
                                'dateTimeEnd': '2008-09-12T11:45',
                                'speakers': [
                                    {
                                        'name': 'Pavel Málek',
                                        'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=2587&ThumbnailSizeName=small',
                                        'role': ''
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        'title': track3Name,
                        'sessions': [
                            {
                                'title': 'Power BI 101',
                                'description': 'Přednášku berte jako úvod do Power BI. Uvidíte všechny kroky, které musíte udělat, abyste mohli analyzovat data a výsledky s kolegy. Začneme získáním a transformací dat, dále se budeme věnovat vytvoření datového modelu a základům DAX (výpočty). Pokračovat budeme vizualizací a analýzou. Nakonec uvidíte, jak data sdílet s kolegy, aby každý viděl, jen to co má.',
                                'dateTimeStart': '2008-09-12T09:00',
                                'dateTimeEnd': '2008-09-12T10:15',
                                'speakers': [
                                    {
                                        'name': 'Štěpán Bechynský',
                                        'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=1282&ThumbnailSizeName=small',
                                        'role': ''
                                    }
                                ]
                            },
                            {
                                'title': 'Interaktivní reporty v Power BI a calculation groups',
                                'description': 'Na přednášce si ukážeme, jak v Power BI reportech přepínat metriku s použitím sliceru z nenavázané dimenze. Ukážeme si příklady s použitím časových kalkulací, použití proměnných pro optimalizaci kódu a v neposlední řadě calculation groups a jaké problémy s nimi jsme schopni vyřešit.',
                                'dateTimeStart': '2008-09-12T10:30',
                                'dateTimeEnd': '2008-09-12T11:45',
                                'speakers': [
                                    {
                                        'name': 'Jiří Neoral',
                                        'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=1855&ThumbnailSizeName=small',
                                        'role': 'MVP'
                                    }
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                'date': '2022-09-14',
                'name': 'Den 3',
                'tracks': [
                    {
                        'title': track1Name,
                        'sessions': [
                            {
                                'title': '3 Day',
                                'description': 'O možnostech provozu SQL Serveru v Azure Virtual Machines a o Azure SQL Database toho padlo již mnoho, služba která však zůstávala neprávem mimo pozornost je Azure SQL Managed Instance. Tato služba je svým profilem a možnostmi v rámci cloud workload asi nejblíže klasickému on-premise SQL Serveru. Pojďme si společně ukázat, co všechno Azure SQL MI umí, jak ji správně nasadit, zabezpečit a využít pro migraci on-prem workloadu.',
                                'dateTimeStart': '2008-09-12T09:00',
                                'dateTimeEnd': '2008-09-12T10:15',
                                'speakers': [
                                    {
                                        'name': 'Marek Chmel',
                                        'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=697&ThumbnailSizeName=small',
                                        'role': 'MVP, MCT, MCSE'
                                    }
                                ]
                            },
                            {
                                'title': 'Lessons learned from Azure SQL Servers',
                                'description': 'Resource allocation in Azure is not as straightforward as it may look. Let\'s discuss the caveats and solutions we identified in the last few years. We will talk about storage performance, memory pressure, CPU monitoring & reporting in Azure, and our issues with SOS_Scheduler_Yield & SMT_Stories we published.',
                                'dateTimeStart': '2008-09-12T10:30',
                                'dateTimeEnd': '2008-09-12T11:45',
                                'speakers': [
                                    {
                                        'name': 'Michal Tinthofer',
                                        'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=2587&ThumbnailSizeName=small',
                                        'role': 'MCT, MCITP, MCTS, Woodler'
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        'title': track2Name,
                        'sessions': [
                            {
                                'title': 'Novinky v Microsoft SQL Serveru 2022',
                                'description': 'Na přednášce si představíme novinky pro vývojáře i administrátory, které Microsoft připravuje pro příští verzi Microsoft SQL Serveru a na praktických ukázkách si předvedeme, proč je důvod se na příští verzi Microsoft SQL Serveru těšit.',
                                'dateTimeStart': '2008-09-12T09:00',
                                'dateTimeEnd': '2008-09-12T10:15',
                                'speakers': [
                                    {
                                        'name': 'David Gešvindr',
                                        'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=2335&ThumbnailSizeName=small',
                                        'role': 'MVP, MCT, MCSE'
                                    }
                                ]
                            },
                            {
                                'title': 'Parametr, literál nebo proměnná – proč bych se měl zajímat?',
                                'description': 'K sestavení optimálního exekučního plánu vyžaduje SQL Server pokud možno co nejreprezentativnější statistické informace o množině dotazovaných dat. Jako vývojáři mu však můžeme tento proces (ne)chtěně trochu zkomplikovat. Jaké jsou výhody a nevýhody parametrizovaných dotazů, použití proměnných nebo snad v jaké situaci použít literál? Jaký bude dopad jejich použití na procedure cache, rychlost zpracování a samotný exekuční plán? Nejen to bude předmětem přednášky, jejímž cílem bude ukázat trochu skrytá zákouti SQL Serveru, která by však každý vývojář měl bezpečně znát.',
                                'dateTimeStart': '2008-09-12T10:30',
                                'dateTimeEnd': '2008-09-12T11:45',
                                'speakers': [
                                    {
                                        'name': 'Pavel Málek',
                                        'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=2587&ThumbnailSizeName=small',
                                        'role': ''
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        'title': track3Name,
                        'sessions': [
                            {
                                'title': 'Power BI 101',
                                'description': 'Přednášku berte jako úvod do Power BI. Uvidíte všechny kroky, které musíte udělat, abyste mohli analyzovat data a výsledky s kolegy. Začneme získáním a transformací dat, dále se budeme věnovat vytvoření datového modelu a základům DAX (výpočty). Pokračovat budeme vizualizací a analýzou. Nakonec uvidíte, jak data sdílet s kolegy, aby každý viděl, jen to co má.',
                                'dateTimeStart': '2008-09-12T09:00',
                                'dateTimeEnd': '2008-09-12T10:15',
                                'speakers': [
                                    {
                                        'name': 'Štěpán Bechynský',
                                        'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=1282&ThumbnailSizeName=small',
                                        'role': ''
                                    }
                                ]
                            },
                            {
                                'title': 'Interaktivní reporty v Power BI a calculation groups',
                                'description': 'Na přednášce si ukážeme, jak v Power BI reportech přepínat metriku s použitím sliceru z nenavázané dimenze. Ukážeme si příklady s použitím časových kalkulací, použití proměnných pro optimalizaci kódu a v neposlední řadě calculation groups a jaké problémy s nimi jsme schopni vyřešit.',
                                'dateTimeStart': '2008-09-12T10:30',
                                'dateTimeEnd': '2008-09-12T11:45',
                                'speakers': [
                                    {
                                        'name': 'Jiří Neoral',
                                        'photo': 'https://wug.cz/ContentPages/GetFile.ashx?PhotoID=1855&ThumbnailSizeName=small',
                                        'role': 'MVP'
                                    }
                                ]
                            },
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
        });
    }
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
    const tracksWrapper = document.querySelector('.tracks');
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
    sessionElem.setAttribute('class', 'session');
    sessionElem.setAttribute('data-track', track.title);
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