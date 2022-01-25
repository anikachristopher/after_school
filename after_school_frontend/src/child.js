class Child {
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
        // `<div id=${this.id}> - figure out what this line is doing
        `<h4>Name: ${this.name}</h4>
        <h4>Age: ${this.age}</h4>
        <h4>Grade: ${this.grade}</h4>
        <button class= "delete-button" data-id=${this.id}>Delete</button>
        <br>
        </div>
        <form>
        <form id="new-schedule-form">
            <input type="hidden" id="child_id" name="child_id" value=${this.id}>
              <label for="weekday_id">Weekday:</label><br>
              <select id="weekday_id" name="weekday">
                <option value=""></option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
              </select>
              <br>
              <label for="subject_id">Subject:</label><br>
              <select id="subject_id" name="subject">
              <option value=""></option>
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
    // addSubmitButton();
    }


// want this to render the child with their schedule
//may need to add the form to enter the child infor into this HTML. Check back after and see.
}


// <!-- Trigger/Open The Modal -->
// <button id="myBtn">Create Schedule</button>

// <!-- The Modal -->
// <div id="myModal" class="modal">

//   <!-- Modal content -->
//   <div class="modal-content">
//     <span class="close">&times;</span>
//     <p><div class="row">
//         <div class="col s4">

//           <form action="http://127.0.0.1:3000" method="GET"></form>>
//             <div id="entryForm">
//               <form id="entry_form"> <form id="entryForm">
//                 <label for="input-name">Name</label>
//                 <input type="text" id='input-name' autofocus placeholder="Enter Name" tabindex="1"/>
//                 <br>
//                 <label for="input-age">Age</label>
//                 <input type="text" name="input-age" autofocus placeholder="Enter Age" tabindex="2"/>
//                 <br>
//                 <label for="input-grade">Grade</label>
//                 <input type="text" name="input-grade" autofocus placeholder="Enter Grade" tabindex="3"/>
              
//   </div>









//make a child container
// set as a variable and do innerHTML
