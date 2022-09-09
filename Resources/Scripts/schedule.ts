import { data } from "./data/schedule";

export function initSchedule(){
    const navButtons = document.querySelectorAll('.nav__button')
    const scheduleDays = document.querySelectorAll('.schedule')

    for (let i = 0; i < scheduleDays.length; i++){
        const button = navButtons[i]
        const day = scheduleDays[i]

        button.addEventListener('click', () => {
            scheduleDays.forEach(day => {
                day.classList.remove('schedule--active')
            })
            navButtons.forEach(button => {
                button.classList.remove('nav__button--active')
            })
            button.classList.add('nav__button--active')
            day.classList.add('schedule--active')
        })
    }

    generateContent()
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
    dayElement.setAttribute('class', 'schedule schedule--active')
    dayElement.setAttribute('data-date', day.date)

    day.tracks.map((track) => {
        track.sessions.map((session) =>{
            dayElement.appendChild(createSession(session))
        })
    })

    console.log('Day: ' + day.date + ' generated')
    return dayElement as HTMLElement
}

function createSession(session){
    const sessionTime = document.createElement('time')
    sessionTime.setAttribute('datetime', session.dateTimeStart)
    sessionTime.innerHTML = handleTime(new Date(session.dateTimeStart)) + ' - ' + handleTime(new Date(session.dateTimeEnd))

    const sessionHead = document.createElement('div')
    sessionHead.setAttribute('class', 'session__head')
    sessionHead.appendChild(sessionTime)

    const sessionTitle = document.createElement('summary')
    sessionTitle.innerHTML = session.title

    const sessionDesc = document.createElement('p')
    sessionDesc.innerHTML = session.description

    const sessionContent = document.createElement('details')
    sessionContent.setAttribute('open', null)
  
    sessionContent.appendChild(sessionTitle)
    session.speakers.map((speaker) => {
        sessionContent.appendChild(createSpeaker(speaker))
    })
    sessionContent.appendChild(sessionDesc)

    const sessionElem = document.createElement('div')
    sessionElem.setAttribute('class', 'session')

    sessionElem.appendChild(sessionHead)
    sessionElem.appendChild(sessionContent)

    console.log('Session: ' + session.title +' generated')
    return sessionElem as HTMLElement
}


function createSpeaker(speaker){
    const speakerElem = document.createElement('div')
    speakerElem.setAttribute('class', 'speaker')

    const speakerPhoto = document.createElement('img')
    speakerPhoto.setAttribute('src', speaker.photo)
    speakerPhoto.setAttribute('alt', speaker.name + ' photo')

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
    console.log('Speaker: ' + speaker.name + ' generated')
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