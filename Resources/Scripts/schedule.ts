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
}