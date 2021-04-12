import Child from './child.js'

export default class App {
    constructor() {
        console.log("app loaded, Im in app.js")
        //const childForm = document.getElementById('childForm')
        this._baseUrl = "http://localhost:3000/children";
        this.classes = [];
        this.load();
        //redirects to fetchChild function 

    }
    load(){
        console.log("in load")
        // console.log(`${Date.now()}: Calling initiBindingsAndEventListners`)
        this.initiBindingsAndEventListeners()
    }
    initiBindingsAndEventListeners(){
        console.log(`${Date.now()}: Calling initiBindingsAndEventListners`)
        this.childrenContainer = document.getElementById('children-container')
        this.newChildName = document.getElementById("child_name")
        this.newChildAge = document.getElementById('child_age')
        this.newChildGrade = document.getElementById('grade')
        document.getElementById("childForm").reset();
        this.fetchChild()



    }


    // document.addEventListener("DOMContentLoaded", () => {
    //     //fetchSchedules();
    //     fetchChild();
    //     // deleteButton();
    // });

    fetchChild() {
        console.log(" in fetch Child ")
        fetch(this._baseUrl)
            .then((resp) => resp.json())
            .then((children) => {
                console.log("children, in fetch child", children)
                // children.forEach((child) => {
                //     console.log(child)
                //     const NewChild = new Child(child)
                //     this.classes.push(NewChild)
                // });
                console.log(this.classes)
            })
        .then(()=>{
            this.render()
        })
        .catch((err)=>{
            console.error(err);
        });
    }
    render(){
        console.log("in render")
        this.childrenContainer.innerHTML = this.classes
        .map((child) => child.renderChild(false ))
        .join('');
    }
    createNewChild(e){
        e.preventDefault();
        console.log("in create New Child", this)

        const child= {
            name: this.newChildName.value, 
            age: this.newChildAge.value,
            grade: this.newChildGrade.value
        }
        fetch(this._baseUrl, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(child),
        })
        .then((res) => res.json())
        .then ((child) =>{
            this.classes.push(new Child(child))

            this.newChildName.value = " ";
            this.newChildAge.value = " ";
            this.newChildGrade.value = " ";
            this.render()
        })
    }


}



    //             for (const child of children) {
    //                 let addChild = new Child(
    //                     child.id,
    //                     child.name,
    //                     child.age,
    //                     child.grade)
    //                 addChild.renderChild();
    //             }
    //             // fix this to show only one child at a time or hide the other children not being shown
    //         })

    // }



    //build function using fetch request to display any existing schedules - READ - done
    //include this function in the DOM content loaded to fire upon app start - done
    //build a create schedule fetch request - CREATE
    //define a new schedule variable and include within the fetch request - create fetch
    //build a delete fetch request here - DELETE


    // fetchSchedules() {
    //     console.log("fetch schedules")
    //     fetch(`${BASE_URL}/schedules`)
    //         .then((resp) => resp.json())
    //         .then((schedules) => {
    //             for (const schedule of schedules) {
    //                 // debugger;
    //                 // console.log("rails obj", schedule)
    //                 let newScheduleCard = new Schedule(
    //                     schedule.id,
    //                     schedule.weekday,
    //                     schedule.subject,
    //                     schedule.content,
    //                     schedule.child_id
    //                 )
    //                 // debugger;
    //                 // console.log("js obj", newScheduleCard);
    //                 // debugger;
    //                 newScheduleCard.renderSchedules();
    //                 //renderSchedule method not built as yet
    //             };
    //         });
    // }



    
    // addShowFormButton() {
    //     console.log("in add Show Form Button")
    //     let newScheduleButton = document.createElement("button");
    //     newScheduleButton.className = ("create-schedule-button")
    //     newScheduleButton.innerHTML = "Create Schedule"
    //     let childDiv = document.getElementById("children-container")
    //     childDiv.appendChild(newScheduleButton)
    //     newScheduleButton.addEventListener("click", showScheduleForm.bind(this))
    // }


    //the function that's going to create and display the schedule form in the div assigned (create-schedule-button)
    // will have a create chedule button and ebvent listener for the event

    // createChildForm() {
    //     console.log("IN Create child form ")
    //     childForm.addEventListener("submit", function (event) {
    //         event.preventDefault();
    //         const formData = new FormData(event.target);
    //         const data = Object.fromEntries(formData.entries());
    //         fetchChild(data);
    //     }
    //     )
    // };
    // createChildForm()

    


    // createSchedule(e) {
    //     console.log('in create schedule')
    //     // e.stopImmediatePropagation();
    //     e.preventDefault(); //to prevent the page refresh
    //     // debugger;

    //     let childDay = e.target.querySelector("#weekday_id").value;
    //     let childSubject = e.target.querySelector("#subject_id").value;
    //     let childContent = e.target.querySelector("#content").value
    //     let childId = parseInt(e.target.querySelector("#child_id").value) //needs to come back as an integer so it knows what to assoc with since child ids are stored as integers and not strings in the db


    //     let childSchedule = {
    //         weekday: childDay,
    //         subject: childSubject,
    //         content: childContent,
    //         child_id: childId
    //     };

    //     fetch(`${BASE_URL}/schedules`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(childSchedule),
    //     })
    //         .then((resp) => resp.json())
    //         .then((s) => {
    //             // console.log(s, "in create schedule")
    //             // debugger
    //             const schedule = new Schedule(
    //                 s.id,
    //                 s.weekday,
    //                 s.subject,
    //                 s.content,
    //                 s.child_id
    //             )
    //             document.getElementById("new-schedule-form").reset();
    //             schedule.renderSchedules();

    //         });

    //     //
    // }

    // deleteSchedule() {
    // console.log("in delete schedule ")

    // //create delete button
    // //attach to each schedule
    // //add event listener to the button
    // const scheduleId = parseInt(
    //     event.target.parentElement.id
    // );

    // fetch(`http://127.0.0.1:3000/schedules/${scheduleId}`, {
    //     method: "DELETE",
    //     headers: {
    //         "content-type": "application/json"
    //     }
    // });
    // // debugger;
    // // .then(res => res.json());
    // alert("Are you sure you want to delete this?");
    // window.location.reload(); //need to remove this.



    // }


