class Schedule{
    constructor(id, weekday, subject, content, child_id){
        this.id = id;
        this.weekday = weekday;
        this.subject = subject;
        this.content = content;
        this.child_id = child_id
    }

    //should I get rid of this class completely

//     renderSchedules() {
//       // show the schedules on the page  
//         let scheduleForm = document.getElementById("entryForm");
//         scheduleForm.remove(); 
//     //If it isn't "undefined" and it isn't "null", then it exists.
//         if(typeof(scheduleForm) != 'undefined' && scheduleForm != null){
//         scheduleForm.remove()} 

//         let allSchedules = document.getElementById("schedules-container");
//         // let schedulesDiv = document.getElementById("schedules-container");
//         // fetch 
//         allSchedules.innerHTML += 
//         // let currentWeekday = this.weekday
//         // const weekday = currentWeekday;
//             `<div id=${this.id} name="schedule-card">
//             <h4>Weekday: ${this.weekday}</h4>
//             <h4>Subject: ${this.subject}</h4>
//             <h4>Content: ${this.content}</h4>
//             <br>
//             </div>`
            
//     }

// }

// render newEntryForm();

// this function will display the new entry on the screen??? 

//     const modal = document.getElementById("myModal");

// // Get the button that opens the modal
//     const btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
//     const span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
//     btn.onclick = function() {
//     modal.style.display = "block";
//     }

// // When the user clicks on <span> (x), close the modal
//     span.onclick = function() {
//     modal.style.display = "none";
//     }

// // When the user clicks anywhere outside of the modal, close it
//     window.onclick = function(event) {
//     if (event.target == modal) {
//     modal.style.display = "none";
//     }


    // function submitScheduleEntry();
    // this funciton will connect to my HTML form so when someone enters the info and click submit it will 
    // run this function











    

// function deleteButton() {
//     // let createDeleteButton = document.createElement("button");
//     // createDeleteButton.className = ("delete-schedule-button")
//     // createDeleteButton.classList.add("delete")
//     // // createDeleteButton.innerHTML = "Delete"
//     // let scheduleCards = document.getElementsByClassName("delete-schedule")
//     // debugger;
//     // scheduleCards.append(createDeleteButton)

//     //let deleteButtonListener = document.getElementById("delete-button");
//     document.querySelectorAll('.delete-schedule').forEach(button => {
//         button.addEventListener('click', event => {
//           deleteSchedule(event)
//         })
//       })
//     // createDeleteButton.addEventListener("click", e => deleteSchedule(e));
// }

// function addSubmitButton(){
//     // let createScheduleButton = document.createElement("button");
//     // createScheduleButton.className = ("new-schedule-button")
//     // createScheduleButton.classList.add("submit")
//     // createScheduleButton.innerHTML = "Submit"

    
//     let newScheduleForm = document.getElementById("new-schedule-form");
//     // debugger;
//     // newScheduleForm.appendChild(createScheduleButton)
//     newScheduleForm.addEventListener("submit", e => createSchedule(e));
//             newScheduleForm.reset();
            
//     // scheduleForm.remove()

    
// }






//build a render schedule method 
//include this in the DOM content loaded to fire at the start of the app
//build the create schedule button and attach event listener to fire off the new schedule variable defined within
//ensure that child_id is associated to all for child to create schedules

    }