class Schedule{
    constructor(id, weekday, subject, content, child_id){
        this.id = id;
        this.weekday = weekday;
        this.subject = subject;
        this.content = content;
        this.child_id = child_id
    }

    renderSchedules() {
        let schedulesDiv = document.getElementById("schedules-container");
        let currentWeekday = this.weekday
        const weekday = currentWeekday;
    }
}

//build a render schedule method 
//include this in the DOM content loaded to fire at the start of the app
//build the create schedule button and attach event listener to fire off the new schedule variable defined within
//ensure that child_id is associated to all for child to create schedules
