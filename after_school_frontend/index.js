document.addEventListener("DOMContentLoaded", () => {

});

const BASE_URL = "http://127.0.0.1:3000/";
// const entryForm = document.getElementById('entryForm');

//build function using fetch request to display any existing schedules - READ - done
//include this function in the DOM content loaded to fire upon app start - done
//build a create schedule fetch request - CREATE
//define a new schedule variable and include within the fetch request - create fetch
//build a delete fetch request here - DELETE

let childAndScheds = [id, weekday, subject, content, child_id, name, age, grade] //will hold sched and child objects


function fetchSchedules() {
    fetch(`${BASE_URL}/schedules`)
    .then((resp) => resp.json())
    .then((schedules) => {
        for (const schedule of schedules){
         
            // console.log("rails obj", schedule)
            // let newScheduleCard = new Schedule(
            childAndScheds[0]= schedule.id,
                schedule.weekday,
                schedule.subject,
                schedule.content,
                schedule.child_id
            // )
            childAndScheds
            fetchChild(schedule.child_id);
           
            // console.log("js obj", newScheduleCard);
           
            newScheduleCard.renderSchedules();
            //renderSchedule method not built as yet
        };
    });
}




//READ
//CREATE
//DELETE

function fetchChild(child) {
    fetch(`${BASE_URL}/children/${child}`)
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

//quite possibly need a function to create child which includes a form to enter information

function createChildForm(){
    let newChildForm = document.getElementById("children-form")

    newChildForm.innerHTML +=
    `
       <form>
        <label for="input-name">Name</label>
        <input type="text" id='name' autofocus placeholder="Enter Name" tabindex="1"/>
        <br>
        <label for="input-age">Age</label>
        <input type="text" id='age' autofocus placeholder="Enter Age" tabindex="2"/>
        <br>
        <label for="input-grade">Grade</label>
        <input type="text" id='grade' autofocus placeholder="Enter Grade" tabindex="3"/>
        <br>
        <input type="submit" value="submit">
    </form>
    `
    newChildForm.addEventListener("submit", childFormSubmission) //callback function

    
}

function childFormSubmission(){
    event.preventDefault();
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    let grade = document.getElementById("grade").value

    let child = {
        name: name,
        age: age,
        grade: grade
    }

    fetch(`${BASE_URL}/children`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(child)
    })
    .then(resp => resp.json())
    .then(child => {
        let addChild = new Child(
            child.id, 
            child.name, 
            child.age, 
            child.grade)
    addChild.renderChild();
    })
}

// function bindFormEventListener() {
//     entryForm.addEventListener("submit", function (eve) {
//         eve.preventDefault();
//         const formData = new FormData(eve.target);
//         const data = Object.fromEntries(formData.entries());
//         submitEntry(data);
//     })
// };
//     bindFormEventListener()

    // document.getElementById("entryForm").reset();



// function addShowFormButton() {
//     let newScheduleButton = document.createElement("button");
//     newScheduleButton.className = ("create-schedule-button")
//     newScheduleButton.innerHTML = "Create Schedule"
//     let childDiv = document.getElementById("children-container")
//     childDiv.appendChild(newScheduleButton)
//     newScheduleButton.addEventListener("click", showScheduleForm.bind(this)) 
// }


//the function that's going to create and display the schedule form in the div assigned (create-schedule-button)
// will have a create chedule button and ebvent listener for the event

// function createSchedule(e) {
//     // e.stopImmediatePropagation();
//     e.preventDefault();


//     let childDay = e.target.querySelector("#weekday_id").value;
//     let childSubject = e.target.querySelector("#subject_id").value;
//     let childContent = e.target.querySelector("#content").value
//     let childId = parseInt(e.target.querySelector("#child_id").value) //needs to come back as an integer so it knows what to assoc with since child ids are stored as integers and not strings in the db
 

//   let childSchedule = {
//     weekday: childDay,
//     subject: childSubject,
//     content: childContent,
//     child_id: childId
//   };  

//   fetch(`${BASE_URL}/schedules`,{
//     method: "POST",
//     headers:{
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(childSchedule),
//   })
//   .then((resp) => resp.json())
//   .then((s) => {
//     // console.log(s, "in create schedule")
//     const schedule = new Schedule(
//       s.id,
//       s.weekday,
//       s.subject,
//       s.content,
//       s.child_id
//     )
//     document.getElementById("new-schedule-form").reset();
//     schedule.renderSchedules();

//   });

//     //
// }

function deleteChild() {

    const deleteButton = document.getElementById("delete-button")
    console.log(deleteButton)
  

//     //create delete button
//     //attach to each schedule
//     //add event listener to the button
//     const scheduleId = parseInt(
//         event.target.parentElement.id
//         );
        
//         fetch(`http://127.0.0.1:3000/schedules/${scheduleId}`, {
//             method: "DELETE",
//             headers: {
//                 "content-type": "application/json"
//             }
//         });
//         // .then(res => res.json());
//         alert("Schedule Deleted!");
//         window.location.reload();
      
      

} 
