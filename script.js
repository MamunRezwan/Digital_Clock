function getCurrentTime(){
    const date = new Date()
    let hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    hours = hours > 12 ? hours - 12 : hours
    formattedMinutes = minutes < 10 ? '0' + minutes : minutes
    formattedSeconds = seconds < 10 ? '0' + seconds : seconds
    return `${hours}:${formattedMinutes}:${formattedSeconds}`
}

function getCurrentDate(){
    const date=new Date();
    const day = date.getDate()
    const month = date.getMonth()+1
    const year= date.getFullYear()

    const formattedDay = day <10 ? '0' + day : day
    const formattedMonth = month<10? '0' +month:month
    return `${formattedDay}-${formattedMonth}-${year}`
}

function updateClock() {
    const timeDisplay = document.getElementById('time-display')
    const dateDisplay= document.getElementById('date-display')
    timeDisplay.textContent = getCurrentTime()
    dateDisplay.textContent = getCurrentDate()
}

updateClock() // Initial call to display the time immediately
const timer = setInterval(updateClock, 1000)
