
export default class Child {

    // static children = [] //variable (like a class variable. everytime we instatiate an object we're going to push it in here)

    constructor(childJSON) {
        console.log("in Child class ")
        this.id = childJSON.id;
        this.name = childJSON.name;
        this.age = childJSON.age;
        this.grade = childJSON.grade
        //this.schedule_id - maybe needs to be inserted here

        //remembering all our children
        //   Child.all.push(this)  
    }

    //setting the properties of each item. Initializing

    renderChild() {
        // let childDiv = document.getElementById("children-container");
        return 
        debugger;
            // childDiv.innerHTML += 

            `<li>
        <div id=${this.id}>
        <h4>Name: ${this.name}</h4>
        <h4>Age: ${this.age}</h4>
        <h4>Grade: ${this.grade}</h4>
        <br>
        </div>
        </li>`
    }
    renderScheduleForm() {
        // create scheduleDiv like line 19
        `
        <form id="new-schedule-form">
            <input type="hidden" id="child_id" name="child_id" value=${this.id}>
              <label for="weekday_id">Weekday:</label><br>
              <select id="weekday_id" name="weekday">
                  <option selected=true disabled="--">Select</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
              </select>
              <br>
              <label for="subject_id">Subject:</label><br>
              <select id="subject_id" name="subject">
              <option selected=true disabled="--">Select</option>
                  <option value="Math">Math</option>
                  <option value="Reading">Reading</option>
                  <option value="Creative Writing">Creative Writing</option>
              </select>
             <br>
             <label>Content:</label><br>
             <textarea name="content" id="content" cols="30" rows="10" required></textarea>
              </br>
            </form>
            <div id="schedules-container">
        
            </div >
        `
        addSubmitButton();

    }

    // make an append to the DOM function and use it in tandem with the fetch child function in the index.js on line 52

}


//delete this out of this folder - recent note



// this.showSchedule = showScheduleForm()
        //whatever behaviour belongs to this class will be stored here. Will have a render child method.
        //should my constructor include an id attribute
        //create a render child method to show the child and associate with an ID



//make a child container
// set as a variable and do innerHTML
