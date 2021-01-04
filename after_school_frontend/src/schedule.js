class Schedule{
    constructor(id, weekday, subject, content, child_id){
        this.id = id;
        this.weekday = weekday;
        this.subject = subject;
        this.content = content;
        this.child_id = child_id
    }

    renderSchedules() {
        
        // let scheduleForm = document.getElementById("forms-container");
        // scheduleForm.remove(); 
    //If it isn't "undefined" and it isn't "null", then it exists.
        // if(typeof(scheduleForm) != 'undefined' && scheduleForm != null){
        // scheduleForm.remove()} 
        let allSchedules = document.getElementById("schedules-container");
        
       
        // let schedulesDiv = document.getElementById("schedules-container");
        // debugger;
        // fetch 
        allSchedules.innerHTML += 
        // let currentWeekday = this.weekday
        // const weekday = currentWeekday;
            `<div id=${this.id} name="schedule-card">
            <h4>Weekday: ${this.weekday}</h4>
            <h4>Subject: ${this.subject}</h4>
            <h4>Content: ${this.content}</h4>
            <br>
            <button class="delete-schedule" type="delete">Delete</button>
            </div>`
            

            deleteButton()
    }

}
function deleteButton() {
    // let createDeleteButton = document.createElement("button");
    // createDeleteButton.className = ("delete-schedule-button")
    // createDeleteButton.classList.add("delete")
    // // createDeleteButton.innerHTML = "Delete"
    // let scheduleCards = document.getElementsByClassName("delete-schedule")
    // debugger;
    // scheduleCards.append(createDeleteButton)

    //let deleteButtonListener = document.getElementById("delete-button");
    document.querySelectorAll('.delete-schedule').forEach(button => {
        button.addEventListener('click', event => {
          deleteSchedule(event)
        })
      })
    // createDeleteButton.addEventListener("click", e => deleteSchedule(e));
}

function addSubmitButton(){
    let createScheduleButton = document.createElement("button");
    createScheduleButton.className = ("new-schedule-button")
    createScheduleButton.classList.add("submit")
    createScheduleButton.innerHTML = "Submit"

    
    let newScheduleForm = document.getElementById("new-schedule-form");
    debugger;
    newScheduleForm.appendChild(createScheduleButton)
    newScheduleForm.addEventListener("submit", e => createSchedule(e));
            newScheduleForm.reset();


    // scheduleForm.remove()

    
}



function showScheduleForm(){
    let formDiv = document.getElementById("schedules-container");
    // while (allSchedules.firstChild) {
    //     allSchedules.removeChild(allSchedules.firstChild);
    //   }
    
// debugger;
    formDiv.innerHTML += `
    <form id="new-schedule-form">
        <input type="hidden" id="child_id" name="child_id" value=${event.target.previousSibling.id}>
          <label for="weekday_id">Weekday:</label><br>
          <select id="weekday_id" name="weekday">
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
          </select>
          <label for="subject_id">Subject:</label><br>
          <select id="subject_id" name="subject">
              <option value="Math">Math</option>
              <option value="Reading">Reading</option>
              <option value="Creative Writing">Creative Writing</option>
          </select>
         <br>
         <label>Content:</label>
         <textarea name="content" id="content" cols="30" rows="10" required></textarea>
          </br>
          <div id="submit-button-div"></div>
        </form>`
          addSubmitButton();
}








//build a render schedule method 
//include this in the DOM content loaded to fire at the start of the app
//build the create schedule button and attach event listener to fire off the new schedule variable defined within
//ensure that child_id is associated to all for child to create schedules

