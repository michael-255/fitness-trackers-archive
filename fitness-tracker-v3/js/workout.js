function padNumber(num) {
    let str = num.toString();
    while (str.length < 2) {
        str = "0" + str
    }; 
    return str;
}

function workoutTimer(startTime, id) {
    const now = new Date().getTime();
    const timeDifference = (now - startTime);
    const secondsInADay = 60 * 60 * 1000 * 24;
    const secondsInAHour = 60 * 60 * 1000;
        
    let hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
    let mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
    let secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

    hours = padNumber(hours);
    mins = padNumber(mins);
    secs = padNumber(secs);

    document.getElementById('timer').innerHTML = hours + ":" + mins + ":" + secs; 

    clearTimeout(workoutTimer.interval);
    workoutTimer.interval = setTimeout(function(){ workoutTimer(startTime, id); }, 1000);
}

// Generate workout HTML
$(document).ready(function(){
    var startTime = new Date().getTime();

    // Create blank timer then start workout timer
    $("#timer").append("00:00:00 &nbsp;");
    workoutTimer(startTime, "#timer");

    // Auto-hide navbar menu once is clicked
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    // Cancel button confirm dialogue
    $("#cancel").on('click', function(){
        if (confirm("Cancel this workout?")){
            window.location.href = "index.html";
        };
    });

    // Complete button confirm dialogue
    $("#complete").on('click', function(){
        if (confirm("Complete this workout?")){
            // transfer workout data from inputs to profile object
            defaultProfile.routines.forEach((routine) => {
                const urlParams = new URLSearchParams(window.location.search);
                const routineParam = urlParams.get('routine');

                console.log(defaultProfile.workouts); // temp
    
                if (routine.name === routineParam) {
                    routine.exercises.forEach((exercise, i) => {
                        let id = "exercise" + i; // unique id
    
                        if (exercise.category === "Cardio" || exercise.category === "Miscellanous") {
                            defaultProfile.workouts.exercises[i].duration = document.getElementById(id + "duration").value;
                        } else {
                            exercise.details.sets.forEach((set, i) => {
                                defaultProfile.workouts.exercises[i].details.sets[i].weight = document.getElementById(id + "weight" + i).value;
                                defaultProfile.workouts.exercises[i].details.sets[i].reps = document.getElementById(id + "reps" + i).value;
                            });
                        };
                    });
                };
            });
            console.log(defaultProfile.workouts); // temp
        };
    });

    const urlParams = new URLSearchParams(window.location.search);
    const routineParam = urlParams.get('routine');
    const routineHeading = "<h3>" + routineParam + "</h3>";

    $("#date").append(getDate());
    $("#exercises").append("<br />");
    $("#exercises").append(routineHeading);

    defaultProfile.routines.forEach(routine => {
        if (routine.name === routineParam) {
            routine.exercises.forEach((exercise, i) => {            
                let id = "exercise" + i; // unique id

                if (exercise.category === "Cardio" || exercise.category === "Miscellanous") {
                    // Cardio and Miscellanous Workouts
                    let misc = `
                        <h6>${exercise.name}</h6>
                        <div class="form-row mb-3">
                            <div class="col-6">
                                <input
                                    type="number"
                                    class="form-control form-control-sm"
                                    placeholder="Duration in minutes"
                                    id="${id}duration"
                                />
                            </div>
                        </div>
                    `;
                    $("#exercises").append(misc);
                } else {
                    let setData = "";
                    
                    // Resistence Workouts
                    exercise.details.sets.forEach((set, i) => {
                        let weight = set.weight;
                        let reps = set.reps;
                        setData = setData + `
                            <div class="col-1 mb-1">
                                <h5><span class="badge badge-primary">${i + 1}</span></h5>
                            </div>
                            <div class="col-6 mb-1">
                                <input
                                    type="number"
                                    class="form-control form-control-sm"
                                    placeholder="Weight ${weight}"
                                    id="${id}weight${i}"
                                />
                            </div>
                            <div class="col-5">
                                <input
                                    type="number"
                                    class="form-control form-control-sm"
                                    placeholder="Reps ${reps}"
                                    id="${id}reps${i}"
                                />
                            </div>
                        `;
                    });
                    // Combine set data
                    let resist = `
                        <h6>${exercise.name}</h6>
                        <div class="form-row mb-3">
                            ${setData}
                        </div>
                    `;
                    $("#exercises").append(resist);                 
                };               
            });
        };
    });
});