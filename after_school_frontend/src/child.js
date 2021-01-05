class Child{
    constructor(id, name, age, grade){
        this.id = id;
        this.name = name;
        this.age = age;
        this.grade = grade
        //whatever behaviour belongs to this class will be stored here. Will have a render child method.
        //should my constructor include an id attribute
        //create a render child method to show the child and associate with an ID
    }

    renderChild(){
        let childDiv = document.getElementById("children-container");
        // debugger;
        childDiv.innerHTML += 
        `<div id=${this.id}>
        <h4>Name: ${this.name}</h4>
        <h4>Age: ${this.age}</h4>
        <h4>Grade: ${this.grade}</h4>
        <br>
        </div>
        <form id="new-schedule-form">
            <input type="hidden" id="child_id" name="child_id" value=${this.id}>
              <label for="weekday_id">Weekday:</label><br>
              <select id="weekday_id" name="weekday">
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
              </select>
              <br>
              <label for="subject_id">Subject:</label><br>
              <select id="subject_id" name="subject">
                  <option value="Math">Math</option>
                  <option value="Reading">Reading</option>
                  <option value="Creative Writing">Creative Writing</option>
              </select>
             <br>
             <label>Content:</label><br>
             <textarea name="content" id="content" cols="30" rows="10" required></textarea>
              </br>
              <div id="submit-button-div"></div>
            </form>
        `
    addSubmitButton();
    }



}










//make a child container
// set as a variable and do innerHTML
