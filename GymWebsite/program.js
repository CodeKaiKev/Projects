const gymForm = document.getElementById('gymForm');
const usersContainer = document.querySelector('.users')

const gymNameSelect = gymForm["name"];
const muscleSelect = gymForm["muscle"];
const timeSelect = gymForm["time"];

var gymInput = gymNameSelect.options[gymNameSelect.selectedIndex];;
var muscleInput = muscleSelect.options[muscleSelect.selectedIndex];
var timeInput = timeSelect.options[timeSelect.selectedIndex];

var firstName = gymForm["userName"];
var lastName = gymForm["userLName"];;
var gymDate = gymForm["date"];




localStorage.clear();
//const dateInput = gymForm['date'];
/*
const users =[{
    gym: 'Hammersmith',
    muscle: "Chest",
    time: 2,
    //date: "2018-09-09"
}, {
    gym: 'Northolt',
    muscle: "Leg",
    time: 1,
   // date: "2017-09-09"
},
];
*/

const users = JSON.parse(localStorage.getItem("users")) || [];

const addUser = (gym, muscle, time) => {
    users.push({
        gym,
        muscle,
        time,
    });
    
    localStorage.setItem("users", JSON.stringify(users));
    
    return(gym, muscle, time);
};

const createUsersElement = ({gym, muscle, time }) => {
    const usersDiv = document.createElement('div');
    const userGymName = document.createElement('h5');
    const userMuscle = document.createElement('h5');
    const userTime = document.createElement('h5');
    const userLNAME = document.createElement('h5');
    const userFNAME = document.createElement('h5');
    const userDate = document.createElement('h5');
    
    userGymName.innerText = "Gym: " + gymInput.innerText;
    userFNAME.innerText = "Name: " + firstName.value;
    userLNAME.innerText = "Surname: " + lastName.value;
    userMuscle.innerText = "Workout: " + muscleInput.innerText;
    userTime.innerText = "Hours: " + timeInput.innerText;
    userDate.innerText = date.value;
    
    usersDiv.append(userFNAME, userLNAME, userGymName, userMuscle, userTime, userDate);
    usersContainer.appendChild(usersDiv);
    
    usersContainer.style.display = users.length === 0 ? "none" : "flex";
};

usersContainer.style.display = users.length === 0 ? "none" : "flex";

users.forEach(createUsersElement);


gymForm.addEventListener('submit', (event) => {
     gymInput = gymNameSelect.options[gymNameSelect.selectedIndex];
     muscleInput = muscleSelect.options[muscleSelect.selectedIndex];
     timeInput = timeSelect.options[timeSelect.selectedIndex];
    
     lastName = gymForm["userLName"];
     firstName = gymForm["userName"];
     gymDate = gymForm["date"];
    
    // stop form submission
      event.preventDefault();
      const newUser = addUser(
        gymInput.innerText,
        muscleInput.innerText,
        timeInput.innerText,
      );
      console.log(gymInput);
      console.log(muscleInput);

      createUsersElement(newUser);
    
  

    


 
});

gymForm.addEventListener('reset', (e) => {
    e.preventDefault();
    
    console.log("Done");
    clearGrid();
});

function clearGrid() {
    localStorage.clear();
}
