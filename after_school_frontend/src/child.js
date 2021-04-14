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
        
        `
    addSubmitButton();
    }



}










//make a child container
// set as a variable and do innerHTML
