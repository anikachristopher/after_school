document.addEventListener("DOMContentLoaded", () => {
    //debugger;
    fetchSchedules();
    fetchChild();
    // deleteButton();
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
            // debugger;
            // console.log("rails obj", schedule)
            let newScheduleCard = new Schedule(
                schedule.id,
                schedule.weekday,
                schedule.subject,
                schedule.content,
                schedule.child_id
            )
            // debugger;
            // console.log("js obj", newScheduleCard);
            // debugger;
            newScheduleCard.renderSchedules();
            //renderSchedule method not built as yet
        };
    });
}



function fetchChild() {
    fetch(`${BASE_URL}/children`)
    .then(resp => resp.json())
    .then(children => {
        for (const child of children){
            let addChild = new Child(
                child.id, 
                child.name, 
                child.age, 
                child.grade)
        addChild.renderChild();
        }
    
    })
    
}

 
