document.addEventListener("DOMContentLoaded", () => {
    //debugger;
    fetchSchedules();
});

const BASE_URL = "http://127.0.0.1:3000/";

//build function using fetch request to display any existing schedules - READ - done
//include this function in the DOM content loaded to fire upon app start - done
//build a create schedule fetch request - CREATE
//define a new schedule variable and include within the fetch request - create fetch
//build a delete fetch request here - DELETE


function fetchSchedules() {
    fetch(`${BASE_URL}/schedules`)
    .then((resp) => resp.json())
    .then((schedules) => {
        for (const schedule of schedules){
            // console.log("rails obj", schedule)
            let newScheduleCard = new Schedule(
                schedule.id,
                schedule.weekday,
                schedule.subject,
                schedule.content,
                schedule.child_id
            )
            // console.log("js obj", newScheduleCard);
            //newScheduleCard.renderSchedule();
            //renderSchedule method not built as yet
        };
    });
}

function createSchedule() {}

function deleteSchedule() {}