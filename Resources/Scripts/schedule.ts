import { data } from "./data/schedule";

export function initSchedule(){
    generateContent()
    hideSessionContentOnTablet()
    handleSelectDay()
}

function handleSelectDay(){
    const navButtons = document.querySelectorAll('.nav__button')
    const scheduleDays = document.querySelectorAll('.schedule')

    for (let i = 0; i < scheduleDays.length; i++){
        const button = navButtons[i]
        const day = scheduleDays[i] as HTMLElement

        if (i + 1 === getConferenceDay()){
            button.classList.add('nav__button--active')
            day.classList.add('schedule--active')
            getSessionsCount(day)           
        }

        button.addEventListener('click', () => {
            scheduleDays.forEach(day => {
                day.classList.remove('schedule--active')
            })
            navButtons.forEach(button => {
                button.classList.remove('nav__button--active')
            })
            button.classList.add('nav__button--active')
            day.classList.add('schedule--active')
            getSessionsCount(day)
        })
    } 
}

function getSessionsCount(schedule){
    const sessionsCount = document.querySelectorAll('.schedule--active > .session').length
    schedule.classList.add('sessions-' + sessionsCount.toString())
}

function getConferenceDay(){
    const currentDate = new Date();
    let today = currentDate.getDate();
    const firstDayDate = new Date('2022-09-12').getDate()
    const secondDayDate = new Date('2022-09-12').getDate()
    const thirdDayDate = new Date('2022-09-12').getDate()
    let conferenceDay = 0

   if (today <= firstDayDate){
    conferenceDay = 1
   }
   else if (today > firstDayDate && today < thirdDayDate){
    conferenceDay = 2
   }
   else{
    conferenceDay = 3
   }

//    console.log(conferenceDay)
   return conferenceDay
}

function hideSessionContentOnTablet(){
    const details = document.querySelectorAll('details')
    const tabletResolution = 768

    if (window.innerWidth <= tabletResolution){
        details.forEach(detailsElem => {
            detailsElem.removeAttribute('open')
        })    
    }
}

function generateContent(){
    const scheduleWrapper = document.querySelector('.schedule__wrapper')

    data.map((schedule) => {
        schedule.days.map((day) =>{
            scheduleWrapper.appendChild(createDay(day))
        })
    })
}

function createDay(day){
    const dayElement = document.createElement('div')
    dayElement.setAttribute('class', 'schedule')
    dayElement.setAttribute('data-date', day.date)
    
    day.tracks.map((track) => {
        track.sessions.map((session) =>{
            dayElement.appendChild(createSession(session, track))
        })
    })

    // console.log('Day: ' + day.date + ' generated')
    return dayElement as HTMLElement
}

function createSession(session, track){
    const sessionTime = document.createElement('time')
    sessionTime.setAttribute('datetime', session.dateTimeStart)
    sessionTime.innerHTML = handleTime(new Date(session.dateTimeStart)) + ' - ' + handleTime(new Date(session.dateTimeEnd))

    const sessionTrack = document.createElement('small')
    sessionTrack.innerHTML = track.title

    const sessionHead = document.createElement('div')
    sessionHead.setAttribute('class', 'session__head')
    sessionHead.appendChild(sessionTime)
    sessionHead.appendChild(sessionTrack)

    const sessionTitle = document.createElement('summary')
    sessionTitle.innerHTML = session.title

    const sessionDesc = document.createElement('p')
    sessionDesc.innerHTML = session.description

    const sessionContent = document.createElement('details')
    sessionContent.setAttribute('open', null)
  
    const sessionSpeakersWrapper = document.createElement('div')
    sessionSpeakersWrapper.setAttribute('class', 'session__speakers')
    session.speakers.map((speaker) => {
        sessionSpeakersWrapper.appendChild(createSpeaker(speaker))
    })

    const sessionFooter = document.createElement('div')
    sessionFooter.setAttribute('class', 'session__footer')
    session.speakers.map((speaker) => {
        const speker = document.createElement('span')
        speker.innerHTML = speaker.name
        sessionFooter.appendChild(speker)
    })

    sessionContent.appendChild(sessionTitle)
    sessionContent.appendChild(sessionSpeakersWrapper)
    sessionContent.appendChild(sessionDesc)

    const sessionElem = document.createElement('div')
    sessionElem.setAttribute('class', 'session session--' + track.title.replace(" ", "-").replace(".", "-").toLowerCase())

    sessionElem.appendChild(sessionHead)
    sessionElem.appendChild(sessionContent)
    sessionElem.appendChild(sessionFooter)

    // console.log('Session: ' + session.title +' generated')
    return sessionElem as HTMLElement
}


function createSpeaker(speaker){
    const speakerElem = document.createElement('div')
    speakerElem.setAttribute('class', 'speaker')

    const speakerPhoto = document.createElement('img')
    speakerPhoto.setAttribute('src', speaker.photo)
    speakerPhoto.setAttribute('alt', speaker.name + ' photo')
    speakerPhoto.setAttribute('loading', 'lazy')

    const speakerPhotoWrapper = document.createElement('div')
    speakerPhotoWrapper.setAttribute('class', 'speaker__photo')
    speakerPhotoWrapper.appendChild(speakerPhoto)


    const speakerName = document.createElement('span')
    speakerName.innerHTML = speaker.name
    const speakerRole = document.createElement('small')
    speakerRole.innerHTML = speaker.role

    const speakerContentWrapper = document.createElement('div')
    speakerContentWrapper.appendChild(speakerName)
    speakerContentWrapper.appendChild(speakerRole)

    speakerElem.appendChild(speakerPhotoWrapper)
    speakerElem.appendChild(speakerContentWrapper)
    // console.log('Speaker: ' + speaker.name + ' generated')
    return speakerElem as HTMLElement
}

const handleTime = (dateTime) => {
    let data = new Date(dateTime)
    let hours = data.getHours()
    let hoursString = ""
    let minutes = data.getMinutes()
    let minutesString = ""

    if (hours <= 9){
        hoursString = '0' + hours.toString()
    }
    else{
        hoursString = hours.toString()
    }

    if (minutes <= 9){
        minutesString = '0' + minutes.toString()
    }
    else{
        minutesString = minutes.toString()
    }

    const postTime = hoursString + ':' + minutesString
    return postTime
  }