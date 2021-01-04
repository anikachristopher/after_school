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

function addShowFormButton() {
    let newScheduleButton = document.createElement("button");
    newScheduleButton.className = ("create-schedule-button")
    newScheduleButton.innerHTML = "Create Schedule"
    let childDiv = document.getElementById("children-container")
    childDiv.appendChild(newScheduleButton)
    newScheduleButton.addEventListener("click", showScheduleForm.bind(this)) 
}


//the function that's going to create and display the schedule form in the div assigned (create-schedule-button)
// will have a create chedule button and ebvent listener for the event

function createSchedule(e) {
    // e.stopImmediatePropagation();
    e.preventDefault();
    // debugger;

    let childDay = e.target.querySelector("#weekday_id").value;
    let childSubject = e.target.querySelector("#subject_id").value;
    let childContent = e.target.querySelector("#content").value
    let childId = parseInt(e.target.querySelector("#child_id").value) //needs to come back as an integer so it knows what to assoc with since child ids are stored as integers and not strings in the db
 

  let childSchedule = {
    weekday: childDay,
    subject: childSubject,
    content: childContent,
    child_id: childId
  };  

  fetch(`${BASE_URL}/schedules`,{
    method: "POST",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify(childSchedule),
  })
  .then((resp) => resp.json())
  .then((s) => {
    // console.log(s, "in create schedule")
    // debugger
    const schedule = new Schedule(
      s.id,
      s.weekday,
      s.subject,
      s.content,
      s.child_id
    )

    schedule.renderSchedules();

  });

    //
}

function deleteSchedule() {
  

    //create delete button
    //attach to each schedule
    //add event listener to the button
    const scheduleId = parseInt(
        event.target.parentElement.id
        );
        
        fetch(`http://127.0.0.1:3000/schedules/${scheduleId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        });
        // debugger;
        // .then(res => res.json());
        alert("Schedule Deleted!");
      
      

} 
