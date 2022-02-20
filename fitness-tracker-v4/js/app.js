"use strict"

function createUser() {
    return {
        exercises: [],
        routines: [],
        activities: [],
        seededData: null
    };
};

function createExercise(category, name) {
    return {
        // Index position is exerciseId
        category,
        name,
    };
};

function createRoutine(name, exerciseIds) {
    return {
        // Index position is routineId
        name,
        exerciseIds: exerciseIds || []
    };
};

function createActivity(date, bodyWeight, duration) {
    return {
        date,
        bodyWeight,
        // @TODO: beganAt, endedAt, totalTime
        duration,
        records: []
    };
};

function createRecord(exerciseId, duration, sets) {
    return {
        exerciseId,
        duration,
        sets: sets || []
    };
};

function createWeightSet(weight,reps) {
    return {
        weight, reps
    };
};

function getExerciseIdByName(name) {
    let foundId;
    for (let i = 0; i < user.exercises.length; i++) {
        if (user.exercises[i].name === name) {
            foundId = i;
            break;
        };
    };
    return foundId;
};

function getExerciseNameById(id) {
    if (user.exercises[id]) {
        return user.exercises[id].name;
    };
};

function getRoutineNameById(id) {
    if (user.routines[id]) {
        return user.routines[id].name;
    };
};

function padLeadingZeros(num) {
    let str = num.toString();
    while (str.length < 2) {
        str = "0" + str
    }; 
    return str;
};

// Tracks total time for activity
function activityTimer(startTime) {
    const now = new Date();
    const timeDifference = (now - startTime);
    const secondsInADay = 60 * 60 * 1000 * 24;
    const secondsInAHour = 60 * 60 * 1000;
        
    let hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
    let mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
    let secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

    hours = padLeadingZeros(hours);
    mins = padLeadingZeros(mins);
    secs = padLeadingZeros(secs);
    // @TODO
    document.getElementById('timer').innerHTML = hours + ":" + mins + ":" + secs;

    clearTimeout(activityTimer.interval);
    activityTimer.interval = setTimeout(() => { activityTimer(startTime) }, 1000);
};

// Turns off activity timer
function stopActivityTimer() {
    clearTimeout(activityTimer.interval);
    // @TODO
    // user.activities[0].duration = document.getElementById('timer').innerHTML; // bad solution
    console.log("Stopped activity timer");
};

// Returns string with MM/DD/YYYY date format
function getDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return (month + "/" + day + "/" + year); 
};

// Seeds all available exercises
function seedExercises() {
    return [
        createExercise("Cardio", "Elliptical"), // 0
        createExercise("Miscellanous", "Stretching"), // 1
        createExercise("Chest", "Flat Bench Press"), // 2
        createExercise("Chest", "Incline Bench Press"), // 3
        createExercise("Chest", "Decline Bench Press"), // 4
        createExercise("Chest", "Fly Machine (Chest)"), // 5
        createExercise("Chest", "Cable Chest Side Pulls"), // 6
        createExercise("Triceps", "Cable Rope Pulldowns"), // 7
        createExercise("Triceps", "Tricep Press Machine"), // 8
        createExercise("Back", "Bent Over Rows"), // 9
        createExercise("Back", "Shrugs"), // 10
        createExercise("Back", "Stiff-Leg Deadlifts"), // 11
        createExercise("Back", "Assisted Pull-ups"), // 12
        createExercise("Back", "Fly Machine (Back)"), // 13
        createExercise("Biceps", "Underhand Curls"), // 14
        createExercise("Biceps", "Hammer Curls"), // 15
        createExercise("Biceps", "Overhand Curls"), // 16
        createExercise("Shoulders", "Side Raises"), // 17
        createExercise("Shoulders", "Front Raises"), // 18
        createExercise("Shoulders", "Shoulder Press Machine"), // 19
        createExercise("Legs", "Leg Press Machine"), // 20
        createExercise("Legs", "Leg Extension Machine"), // 21
        createExercise("Legs", "Leg Curl Machine"), // 22
        createExercise("Legs", "Calf Extension Machine"), // 23
        createExercise("Legs", "Hip Abduction (Out) Machine"), // 24
        createExercise("Legs", "Hip Adduction (In) Machine"), // 25
        createExercise("Legs", "Standing Glute Machine"), // 26
        createExercise("Core", "Abdominal Crunch Machine"), // 27
        createExercise("Core", "Oblique Side Bend") // 28
    ];
};

// Seeds available workout routines
function seedRoutines() {
    return [
        createRoutine("Chest and Triceps", [
                getExerciseIdByName("Elliptical"),
                getExerciseIdByName("Flat Bench Press"),
                getExerciseIdByName("Incline Bench Press"),
                getExerciseIdByName("Decline Bench Press"),
                getExerciseIdByName("Fly Machine (Chest)"),
                getExerciseIdByName("Cable Rope Pulldowns"),
                getExerciseIdByName("Tricep Press Machine"),
                getExerciseIdByName("Stretching")
            ]
        ),
        createRoutine("Back and Biceps", [
                getExerciseIdByName("Elliptical"),
                getExerciseIdByName("Bent Over Rows"),
                getExerciseIdByName("Shrugs"),
                getExerciseIdByName("Stiff-Leg Deadlifts"),
                getExerciseIdByName("Assisted Pull-ups"),
                getExerciseIdByName("Overhand Curls"),
                getExerciseIdByName("Underhand Curls"),
                getExerciseIdByName("Hammer Curls"),
                getExerciseIdByName("Stretching")
            ]
        ),
        createRoutine("Legs, Shoulders, and Core", [
                getExerciseIdByName("Elliptical"),
                getExerciseIdByName("Side Raises"),
                getExerciseIdByName("Front Raises"),
                getExerciseIdByName("Shoulder Press Machine"),
                getExerciseIdByName("Leg Press Machine"),
                getExerciseIdByName("Leg Extension Machine"),
                getExerciseIdByName("Leg Curl Machine"),
                getExerciseIdByName("Calf Extension Machine"),
                getExerciseIdByName("Standing Glute Machine"),
                getExerciseIdByName("Hip Abduction (Out) Machine"),
                getExerciseIdByName("Hip Adduction (In) Machine"),
                getExerciseIdByName("Abdominal Crunch Machine"),
                getExerciseIdByName("Oblique Side Bend"),
                getExerciseIdByName("Stretching")
            ]
        ),
        createRoutine("Cardio", [
                getExerciseIdByName("Elliptical"),
                getExerciseIdByName("Stretching")
            ]
        )
    ];
};

// Seeds previous exercise performances
function seedPerformanceData() {
    return [
        {
            name: "Chest and Triceps",
            records: [
                createRecord(getExerciseIdByName("Elliptical"), 7),
                createRecord(getExerciseIdByName("Flat Bench Press"), null, [
                    createWeightSet(120, 10),
                    createWeightSet(120, 10),
                    createWeightSet(120, 10),
                    createWeightSet(120, 10)
                ]),
                createRecord(getExerciseIdByName("Incline Bench Press"), null, [
                    createWeightSet(72.5, 10),
                    createWeightSet(72.5, 10),
                    createWeightSet(72.5, 10),
                    createWeightSet(72.5, 10)
                ]),
                createRecord(getExerciseIdByName("Decline Bench Press"), null, [
                    createWeightSet(120, 10),
                    createWeightSet(120, 10),
                    createWeightSet(120, 10),
                    createWeightSet(120, 10)
                ]),
                createRecord(getExerciseIdByName("Fly Machine (Chest)"), null, [
                    createWeightSet(120, 10),
                    createWeightSet(120, 10),
                    createWeightSet(120, 10)
                ]),
                createRecord(getExerciseIdByName("Cable Tricep Pulldowns"), null, [
                    createWeightSet(40, 10),
                    createWeightSet(40, 10),
                    createWeightSet(40, 10)
                ]),
                createRecord(getExerciseIdByName("Tricep Press Machine"), null, [
                    createWeightSet(185, 10),
                    createWeightSet(185, 10),
                    createWeightSet(185, 10)
                ]),
                createRecord(getExerciseIdByName("Stretching"), 9)
            ]
        },
        {
            name: "Back and Biceps",
            records: [
                createRecord(getExerciseIdByName("Elliptical"), 7),
                createRecord(getExerciseIdByName("Bent Over Rows"), null, [
                    createWeightSet(117.5, 10),
                    createWeightSet(117.5, 10),
                    createWeightSet(117.5, 10),
                    createWeightSet(117.5, 10)
                ]),
                createRecord(getExerciseIdByName("Shrugs"), null, [
                    createWeightSet(187.5, 10),
                    createWeightSet(187.5, 10),
                    createWeightSet(187.5, 10),
                    createWeightSet(187.5, 10)
                ]),
                createRecord(getExerciseIdByName("Stiff-Leg Deadlifts"), null, [
                    createWeightSet(100, 10),
                    createWeightSet(100, 10),
                    createWeightSet(100, 10),
                    createWeightSet(100, 10)
                ]),
                createRecord(getExerciseIdByName("Assisted Pull-ups"), null, [
                    createWeightSet(30, 10),
                    createWeightSet(30, 10),
                    createWeightSet(30, 10)
                ]),
                createRecord(getExerciseIdByName("Overhand Curls"), null, [
                    createWeightSet(30, 10),
                    createWeightSet(30, 10),
                    createWeightSet(30, 10)
                ]),
                createRecord(getExerciseIdByName("Underhand Curls"), null, [
                    createWeightSet(25, 10),
                    createWeightSet(25, 10),
                    createWeightSet(25, 10)
                ]),
                createRecord(getExerciseIdByName("Hammer Curls"), null, [
                    createWeightSet(25, 10),
                    createWeightSet(25, 10),
                    createWeightSet(25, 10)
                ]),
                createRecord(getExerciseIdByName("Stretching"), 9)
            ]
        },
        {
            name: "Legs, Shoulders, and Core",
            records: [
                createRecord(getExerciseIdByName("Elliptical"), 7),
                createRecord(getExerciseIdByName("Side Raises"), null, [
                    createWeightSet(10, 10),
                    createWeightSet(10, 10),
                    createWeightSet(10, 10)
                ]),
                createRecord(getExerciseIdByName("Front Raises"), null, [
                    createWeightSet(10, 10),
                    createWeightSet(10, 10),
                    createWeightSet(10, 10)
                ]),
                createRecord(getExerciseIdByName("Shoulder Press Machine"), null, [
                    createWeightSet(60, 10),
                    createWeightSet(60, 10),
                    createWeightSet(60, 10)
                ]),
                createRecord(getExerciseIdByName("Leg Press Machine"), null, [
                    createWeightSet(175, 10),
                    createWeightSet(175, 10),
                    createWeightSet(175, 10)
                ]),
                createRecord(getExerciseIdByName("Leg Extension Machine"), null, [
                    createWeightSet(90, 10),
                    createWeightSet(90, 10),
                    createWeightSet(90, 10)
                ]),
                createRecord(getExerciseIdByName("Leg Curl Machine"), null, [
                    createWeightSet(85, 10),
                    createWeightSet(85, 10),
                    createWeightSet(90, 10)
                ]),
                createRecord(getExerciseIdByName("Calf Extension Machine"), null, [
                    createWeightSet(175, 10),
                    createWeightSet(175, 10),
                    createWeightSet(175, 10)
                ]),
                createRecord(getExerciseIdByName("Standing Glute Machine"), null, [
                    createWeightSet(125, 10),
                    createWeightSet(125, 10),
                    createWeightSet(125, 10)
                ]),
                createRecord(getExerciseIdByName("Hip Abduction (Out) Machine"), null, [
                    createWeightSet(200, 10),
                    createWeightSet(200, 10),
                    createWeightSet(200, 10)
                ]),
                createRecord(getExerciseIdByName("Hip Adduction (In) Machine"), null, [
                    createWeightSet(165, 10),
                    createWeightSet(165, 10),
                    createWeightSet(165, 10)
                ]),
                createRecord(getExerciseIdByName("Abdominal Crunch Machine"), null, [
                    createWeightSet(35, 25),
                    createWeightSet(35, 25),
                    createWeightSet(35, 25),
                    createWeightSet(35, 25)
                ]),
                createRecord(getExerciseIdByName("Oblique Side Bend"), null, [
                    createWeightSet(45, 25),
                    createWeightSet(45, 25),
                    createWeightSet(45, 25),
                    createWeightSet(45, 25)
                ]),
                createRecord(getExerciseIdByName("Stretching"), 9)
            ]
        },
        {
            name: "Cardio",
            records: [
                createRecord(getExerciseIdByName("Elliptical"), 30),
                createRecord(getExerciseIdByName("Stretching"), 10)
            ]
        }
    ];
};

function completeWorkout() {
    let data = [];
    data.push(getDate());

    user.routines[currentRoutine].exerciseIds.forEach( (exerciseId, ind) => {
        var id = "";
        if (user.exercises[exerciseId].category === "Cardio" || user.exercises[exerciseId].category === "Miscellanous") {
            id = "ex" + ind + "-duration";
            data.push(document.getElementById(id).value);
        } else {
            var weightId = "";
            var repsId = "";
            var setText = "";

            for (let i = 0; i < user.seededData[currentRoutine].records[ind].sets.length; i++) {
                weightId = "ex" + ind + "-weight" + i;
                repsId = "ex" + ind + "-reps" + i;
                
                if (document.getElementById(weightId).value && document.getElementById(repsId).value) {
                    setText += document.getElementById(weightId).value;
                    setText += "x" + document.getElementById(repsId).value + ", ";
                }
            }
            data.push(setText.slice(0, -2));
        }
    });

    data.push(document.getElementById("timer").innerHTML)

    // Paste formatted data to textarea
    let textarea = document.getElementById('results');
    textarea.value = "";

    data.forEach(entry => {
        textarea.value += entry + "\n";
    });

    textarea.select();
    textarea.setSelectionRange(0, 99999); /*For mobile devices*/

    try {
        console.log("Attempting to copy text...");
        document.execCommand('copy');
        } catch (err) {
        console.err("Unable to copy text!", err);
    }
};

// -----HTML BUILDING-----
function buildActivityPageHtml(routineId) {
    var activityHeaderHtml = `
        <header>
            <span><i class="material-icons" id="cancel">cancel</i></span>
            <span><i class="material-icons">calendar_today</i>&nbsp; ${getDate()}</span>  
            <span><i class="material-icons">timer</i>&nbsp; <span id="timer"></span></span>
        </header> 
    `;
  
    var detailsHtml = "";
    user.seededData[routineId].records.forEach((record, rInd) => {
        detailsHtml += `<div class="exercise">${getExerciseNameById(record.exerciseId)}</div>`;

        if (record.exerciseId === 0 || record.exerciseId === 1) {
            detailsHtml += `
                <div class="details">
                    <input type="number" id="ex${rInd}-duration" placeholder="${record.duration} minutes">
                </div>
            `;
        } else {
            record.sets.forEach((setItem, setInd) => {
                detailsHtml += `
                    <div class="details">
                        <span class="setnum">${setInd + 1}</span>
                        <input class="weight" type="number" id="ex${rInd}-weight${setInd}" placeholder="${setItem.weight} lbs">
                        <input class="reps" type="number" id="ex${rInd}-reps${setInd}" placeholder="${setItem.reps} reps">
                    </div>
                `;
            });
        };
    });

    var routineExercisesHtml = `
        <div class="weightset">
            ${detailsHtml}
        </div>
    `;

    var activityPageHtml = `
        <section class="activity">
            ${activityHeaderHtml}
            <h1 class="title">${getRoutineNameById(routineId)}</h1>
            ${routineExercisesHtml}
            <a href="#" class="btn-finished" onclick="completeWorkout()">To Clipboard</a>
            <textarea id="results"></textarea>
        </section>
    `;

    // Clear page content before appended new content
    $("#index").empty();
    $("#index").append(activityPageHtml);

    // Cancel button confirm dialogue
    $("#cancel").on('click', function(){
        if (confirm("Close this workout?")){
            stopActivityTimer();
            buildHomePageHtml();
        };
    });

    // Start new activity now
    user.activities.push( createActivity(new Date(), null, null) );
    activityTimer(new Date());
};

function buildHomePageHtml() {
    var routinesHtml = "";
    var homeHtml = "";
    var routineIds = [];

    // Build routine buttons
    user.routines.forEach((routine, i) => {
        let id = "routine" + i; // EX: routine0
        routineIds.push(id);
        routinesHtml += `<a href="#" class="btn" id="${id}">${routine.name}</a>`;
    });   

    homeHtml = `
        <section class="home">
            <h1 class="title">Fitness Tracker</h1>
            <div class="routines">
                ${routinesHtml}
            </div>
            <p>WIP Fitness Tracker v4 - Michael J</p>
        </section>
    `;

    // Clear page content before appended new content
    $("#index").empty();
    $("#index").append(homeHtml);

    // Add click event to each routine button
    routineIds.forEach((id, i) => {
        $(`#${id}`).on('click', function(){
            // Build activity page with routineId
            currentRoutine = i;
            buildActivityPageHtml(i);
        });
    });
};

// -----BEGIN DATA-----
var currentRoutine = null;
var user = createUser();
user.exercises = seedExercises();
user.routines = seedRoutines();
user.seededData = seedPerformanceData();

// -----BEGIN HTML-----
$(document).ready(function(){
    buildHomePageHtml();
});