let masterCount; //declaring global variable
let pointer = 0; //declaring global variable
const BASE_URL = "http://127.0.0.1:3000/";
// The goal is to create a Master Schedule Listing similar to the below
/**
   *  let masterSchedule = 
   *  [
   *    {
   *      "id": "1",
          "weekday" : "Monday",
          "subject" : "Maths",
          "content" : "9:00 am to 12:pm",
          "Children" :  [
              { "childName"  : "Tony", "childAge" : 7, "childGrade" : "B" },
            ],
        },
        {
          "id": "2",
          "weekday" : "Tuesday",
          "subject" : "Maths",
          "content" : "9:00 am to 12:pm",
          "Children" :  [
            { "childName"  : "Bony", "childAge" : 7, "childGrade" : "B" },
          ], 
        },
      ]    
   */
function btnClickAdd() {
  let btns = document.querySelectorAll(".delBtn");

  // wire displayGreeting function to each button with .js-say-hi class
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", deleteDelegate);
  }

  function deleteDelegate(e) {
    let btnNumber = parseInt(e.target.id);
    btnNumber++;
    // alert("Rasta Bless from button " + btnNumber + "! ");
    deleteSchedule(btnNumber);
  }
}

function getAllSchedulesWithChild() {
  //   fetch(`${BASE_URL}/schedules`)
  fetch(`${BASE_URL}/schedules`)
    .then((resp) => {
      return resp.json();
    })
    .then((schedules) => {
      // console.log(schedules);
      masterCount = schedules.length;
      displayMasterSchedule(schedules);
    })
    .catch((err) => {
      console.log("Fetch Error :", err);
    });
}
function buildChild(id) {
  fetch(`${BASE_URL}/children/${id}`)
    .then((resp) => resp.json())
    .then((child) => {
      // console.log(child.name);
      if (pointer < masterCount) {
        let childPost = document.getElementById(`children-container${pointer}`);
        childPost.insertAdjacentHTML(
          "beforeend",
          `<div style="text-align: justify; width: 800px;">
            ${child.name}
            <br />
            ${child.age}
            <br />
            ${child.grade} 
          </div>`
        );
      }
      pointer++;
    });
}

function displayMasterSchedule(masterSchedule) {
  for (let i = 0; i < masterCount; i++) {
    let schedule_id = masterSchedule[i].id;
    let weekday = masterSchedule[i].weekday
    let subject = masterSchedule[i].subject;
    let content = masterSchedule[i].content;
    buildChild(masterSchedule[i].child_id);
    // console.log(child_id);
    let newPost = document.getElementById("schedules-container");
    newPost.insertAdjacentHTML(
      "beforeend",
      `<div> 
          <h5>Id: ${schedule_id}</h5>
          <h5>Weekday: ${weekday}</h5>
          <h5>Subject: ${subject}</h5>
          <h5>Content: ${content}</h5>
          <div id="children-container${i}"></div>
          <br />
          <button id=${i} class="delBtn" type="button">Delete</button>
          <br /><hr style="width:50%;text-align:left;margin-left:0">
      </div>`
    );
  }
  btnClickAdd();
}

function deleteSchedule(id) {

// const scheduleEntry = document.getElementById("schedules-container")

  fetch(`${BASE_URL}/schedules/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });

  alert("Schedule Deleted!");
//   $(scheduleEntry).reset();
  getAllSchedulesWithChild();
}

//instead, empty the container and call the getAllSchedulesWithChild function to reset the page.

document.addEventListener("DOMContentLoaded", () => {
  getAllSchedulesWithChild(); 
});
//we want all the functions to be available to avoid any hoisting issues





