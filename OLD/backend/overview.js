class weekday{
    constructor(day, tasks){
        this.day = day;
        this.tasks = tasks;
    }

    getAllDescriptions(){
        let allDescriptions;
        this.tasks.forEach(task => {
            allDescriptions = [allDescriptions, task.description].filter(Boolean).join("\n");
        });
        return allDescriptions;
    }
    getAllDepartments(){
        let allDepartments;
        this.tasks.forEach(task => {
            allDepartments = [allDepartments, task.department].filter(Boolean).join(", ");
        });
        return allDepartments;
    }
    getAllTimes(){
        let allTimes;
        this.tasks.forEach(task => {
            allTimes = [allTimes, task.time].filter(Boolean).join(", ");
        });
        return allTimes;
    }
    getDayTime(){
        let dayTime;
        this.tasks.forEach(task => {
            dayTime = task.time + dayTime;
        });
        return dayTime;
    }
}

class task{
    constructor(description, department, time){
        this.description = description;
        this.department = department;
        this.time = time;
    }
}

const Activities = [new task("Kaffee kochen", "Küche", 2.25), new task("Büro aufräumen", "IT", 5.00)];
const Thursday = new weekday("Donnerstag", Activities);

document.getElementById("newDay").addEventListener("onClick", function(){addThursday()});

function addThursday(){
    //debugger;
    var table = document.getElementById("week");
    console.log(Thursday);

    // Create an empty <tr> element and add it to the last position of the table:
    var row = table.getElementsByTagName('tbody')[0].insertRow(-1);

    // Insert new cells (<td> elements) and a new header cell (<th> element) at the 1st position of the "new" <tr> element:
    var cell1 = document.createElement("th");
    row.appendChild(cell1);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    // Add some text to the new cells:
    cell1.innerText = Thursday.day;
    cell2.innerText = Thursday.getAllDescriptions();
    cell3.innerText = Thursday.getAllDepartments();
    cell4.innerText = Thursday.getAllTimes();
    cell5.innerText = Thursday.getDayTime();
}