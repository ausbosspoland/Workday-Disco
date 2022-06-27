
const timeBlocks = ['nine', 'ten', 'eleven', 'twelve', 'one', 'two', 'three', 'four', 'five']
const timeClocks = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']

// Displays time/clock at the top scheduler
const displayTimeNow = () => {
let timeNow = moment().format('dddd, MMMM D, h:mmA')
$('#currentDay').text(timeNow)
return
}
setInterval(displayTimeNow, 1)

let timeNow = moment(moment(), "h:mmA").format('h:mm A')._i

// color blocks regarding present, past, future
setInterval(() => {
for (i = 0; i < timeBlocks.length; i++) {
    var timeOclock = moment(`${timeClocks[i]}`, `h:mm A`)
    if (moment(timeOclock).isBefore(timeNow, 'hour')) {
        $(`#${timeBlocks[i]}TextArea`).removeClass("present")
        $(`#${timeBlocks[i]}TextArea`).addClass("past")
        $(`#${timeBlocks[i]}TextArea`).removeClass("future")
        } else if (moment(timeOclock).isAfter(timeNow, 'hour')) {
        $(`#${timeBlocks[i]}TextArea`).removeClass("present")
        $(`#${timeBlocks[i]}TextArea`).removeClass("past")
        $(`#${timeBlocks[i]}TextArea`).addClass("future")
        } else if (moment(timeOclock).isSame(timeNow, 'hour')) {
        $(`#${timeBlocks[i]}TextArea`).addClass("present")
        $(`#${timeBlocks[i]}TextArea`).removeClass("past")
        $(`#${timeBlocks[i]}TextArea`).removeClass("future")
            }
}
}, 1)
// save tasks function
    const saveIndex = $(`.saveTask`)
    saveIndex.click(() => {
    for (i = 0; i < timeBlocks.length; i++) {
        let description = $(`#${timeBlocks[i]}TextArea`).val()
        localStorage.setItem(`#${timeBlocks[i]}`, description)
        let textArea = $(`#${timeBlocks[i]}TextArea`)
        textArea.val(localStorage.getItem(`${timeBlocks[i]}`))
    }
})
// load schedule 
let loadSchedule = () => {
    for (i = 0; i < timeBlocks.length; i++) {
    let Items = localStorage.getItem(`${timeBlocks[i]}`)
    if (Items === null) {
    } else if (Items) {
        let textArea = $(`#${timeBlocks[i]}TextArea`);
        textArea.val(Items)
    }
    }
}
loadSchedule()