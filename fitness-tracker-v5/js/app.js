"use strict";

// ENUMS #######################################################################
const ExerciseEnum = Object.freeze({
    ELLIPTICAL: "Elliptical, Warm-up",
    ELLIPTICAL_INTERVAL: "Elliptical, Interval",
    STRETCHING: "Stretching",
    FLAT_BENCH_PRESS: "Flat Bench Press",
    INCLINE_BENCH_PRESS: "Incline Bench Press",
    DECLINE_BENCH_PRESS: "Decline Bench Press",
    FLY_MACHINE_CHEST: "Fly Machine (Chest)",
    CABLE_TRICEP_PULLDOWNS: "Cable Tricep Pulldowns",
    TRICEP_PRESS_MACHINE: "Tricep Press Machine",
    BENT_OVER_ROWS: "Bent Over Rows",
    SHRUGS: "Shrugs",
    STIFF_LEG_DEADLIFTS: "Stiff-Leg Deadlifts",
    ASSISTED_PULL_UPS: "Assisted Pull-ups",
    UNDERHAND_CURLS: "Underhand Curls",
    HAMMER_CURLS: "Hammer Curls",
    OVERHAND_CURLS: "Overhand Curls",
    SIDE_RAISES: "Side Raises",
    FRONT_RAISES: "Front Raises",
    SHOULDER_PRESS_MACHINE: "Shoulder Press Machine",
    LEG_PRESS_MACHINE: "Leg Press Machine",
    LEG_EXTENSION_MACHINE: "Leg Extension Machine",
    LEG_CURL_MACHINE: "Leg Curl Machine",
    CALF_EXTENSION_MACHINE: "Calf Extension Machine",
    HIP_ABDUCTION_MACHINE: "Hip Abduction (Out) Machine",
    HIP_ADDUCTION_MACHINE: "Hip Adduction (In) Machine",
    STANDING_GLUTE_MACHINE: "Standing Glute Machine",
    ABDOMINAL_CRUNCH_MACHINE: "Abdominal Crunch Machine",
    OBLIQUE_SIDE_BEND: "Oblique Side Bend"
});

const CategoryEnum = Object.freeze({
    CARDIO: "Cardio",
    MISC: "Miscellanous",
    CHEST: "Chest",
    BACK: "Back",
    LEGS: "Legs",
    SHOULDERS: "Shoudlers",
    BICEPS: "Biceps",
    TRICEPS: "Triceps",
    CORE: "Core"
});

const UnitsEnum = Object.freeze({
    IMPERIAL: "Imperial",
    METRIC: "Metric"
});

const TagsEnum = Object.freeze({
    NOTES: "Notes",
    BREAKS: "Breaks",
    TEMPO: "Tempo",
    INTENSITY: "Intensity",
    RESISTENCE: "Resistence",
    INCLINE: "Incline"
});

const FieldsEnum = Object.freeze({
    DISTANCE: "Distance",
    DURATION: "Duration",
    SETS: "Sets"
});

// CLASSES #####################################################################
// View manipulation and general functions
class View {
    constructor() {}

    // Tracks time for current activity
    static activityTimer(startTime) {
        const now = new Date();
        const timeDiff = (now - startTime);
        const secsPerDay = 60 * 60 * 1000 * 24;
        const secsPerHour = 60 * 60 * 1000;
            
        let hours = Math.floor((timeDiff % (secsPerDay)) / (secsPerHour) * 1);
        let mins = Math.floor(((timeDiff % (secsPerDay)) % (secsPerHour)) / (60 * 1000) * 1);
        let secs = Math.floor((((timeDiff % (secsPerDay)) % (secsPerHour)) % (60 * 1000)) / 1000 * 1);

        hours = hours.toString().padStart(2, '0');
        mins = mins.toString().padStart(2, '0');
        secs = secs.toString().padStart(2, '0');

        document.querySelector('#timer').innerHTML = `${hours}:${mins}:${secs}`;

        clearTimeout(this.activityTimer.interval);
        this.activityTimer.interval = setTimeout(() => { this.activityTimer(startTime) }, 1000);
    }

    static stopActivityTimer() {
        clearTimeout(this.activityTimer.interval);
        console.log("Stopped activity timer");
    }

    // Returns date string formatted like MM/DD/YYYY
    static getDateString() {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return (month + "/" + day + "/" + year);
    }

    // Returns html for exercise info tags like intensity
    static getExerciseTags(exercise) {
        let tags = "";

        exercise.tags.forEach( t => {
            switch(t.name) {
                case TagsEnum.NOTES:
                    tags += `<span class='tag'>
                        <i class="material-icons">assignment</i>
                        <p>Notes</p>
                    </span>`;
                    break;
                case TagsEnum.BREAKS:
                    tags += `<span class='tag'>
                        <i class="material-icons blue">hourglass_empty</i>
                        <p>${t.value}</p>
                    </span>`;
                    break;           
                case TagsEnum.TEMPO:
                    tags += `<span class='tag'>
                        <i class="material-icons green">speed</i>
                        <p>${t.value}</p>
                    </span>`;
                    break; 
                case TagsEnum.INTENSITY:
                    tags += `<span class='tag'>
                        <i class="material-icons red">whatshot</i>
                        <p>${t.value}</p>
                    </span>`;
                    break; 
                case TagsEnum.RESISTENCE:
                    tags += `<span class='tag'>
                        <i class="material-icons yellow">fitness_center</i>
                        <p>${t.value}</p>
                    </span>`;
                    break; 
                case TagsEnum.INCLINE:
                    tags += `<span class='tag'>
                        <i class="material-icons yellow">signal_cellular_null</i>
                        <p>${t.value}</p>
                    </span>`;
                    break;
                default:
                    tags += `<span class='tag'>
                        <i class="material-icons red">cancel</i>
                        <p>error</p>
                    </span>`;
                    break;
            }
        });

        return tags;
    }

    // Returns html for exercise field inputs like duration
    static getExerciseFields(exercise, exerId) {
        let fields = "";
        let recordData = exercise.records[0]; // not ideal as a solution

        exercise.fields.forEach( f => {
            if (f === FieldsEnum.DURATION) {
                fields += `
                    <span class='input-col'>
                        <p class='helper-text'>${f}</p>
                        <input type='number' id='ex${exerId}-duration' placeholder='${recordData.duration} minutes'>
                    </span>
                `;
            } else if (f === FieldsEnum.DISTANCE) {
                fields += `
                    <span class='input-col'>
                        <p class='helper-text'>${f}</p>
                        <input type='number' id='ex${exerId}-distance' placeholder='${recordData.distance} miles'>
                    </span>
                `;  
            } else if (f === FieldsEnum.SETS) {
                let innerSetNums = "";
                let innerWeights = "";
                let innerReps = "";

                recordData.sets.forEach( (oneSet, i) => {
                    innerSetNums += `<p class='set-number'>${i+1}</p>`;
                    innerWeights += `<input type='number' id='ex${exerId}-weight${i}' placeholder='${oneSet.weight} lbs'>`;
                    innerReps += `<input type='number' id='ex${exerId}-rep${i}' placeholder='${oneSet.reps} reps'>`;
                });

                let outerSetNums = `
                    <span class='input-col'>
                        <p class='helper-text'>Set</p>
                        ${innerSetNums}
                    </span>
                `;
                let outerWeights = `
                    <span class='input-col'>
                        <p class='helper-text'>Weight</p>
                        ${innerWeights}
                    </span>
                `;
                let outerReps = `
                    <span class='input-col'>
                        <p class='helper-text'>Reps</p>
                        ${innerReps}
                    </span>
                `;
                fields += outerSetNums + outerWeights + outerReps;
            } else {
                console.error("Problem with exercise input fields!");
            }
        });

        return fields;
    }

    // HOME PAGE
    static buildHomePage(user) {
        let footer = "<p>WIP Fitness Tracker v5 ~ Michael J</p>";
        let title = "<h1 class='title'>Fitness Tracker</h1>";
        let btns = "";

        // Html for routine buttons
        user.routines.forEach( (rout, id) => {
            btns += `<a href='#' class='btn' id='routine${id}'>${rout.name}</a>`;
        });

        let divRoutines = `<div class="routines">${title}${btns}</div>`;        
        let section = `<section class="home">${divRoutines}${footer}</section>`;

        // Set Home page html
        document.querySelector('div.home').innerHTML = section; 

        // Click listeners for each routine button - added once html exists
        user.routines.forEach( (rout, id) => {
            document.querySelector(`#routine${id}`).addEventListener("click", () => {
                window.location.href = `activity.html?routine=${id}`;
            });
        });
    }

    // ACTIVITY PAGE
    static buildActivityPage(user, routineId) {
        // Set date html and start activity timer
        document.querySelector('#date').innerHTML = View.getDateString();
        user.addActivity(null, routineId, null);

        // Html for routine title section at top
        let routine = `
            <section class='routine'>
                ${user.getRoutineById(routineId).name}
            </section>
        `;
   
        let exerciseSections = "";
        let tags = "";
        let inputs = "";

        // Build exercise sections
        user.getRoutineById(routineId).exerciseIds.forEach( exerId => {
            // Build exercise info tags html
            tags = View.getExerciseTags(user.getExerciseById(exerId));
            
            // Build exercise field inputs html
            inputs = View.getExerciseFields(user.getExerciseById(exerId), exerId);

            // Build exercise section html by appending each exercise
            exerciseSections += `<section class='exercise'>
                <div class='heading'>
                    <span>${user.getExerciseById(exerId).name}</span>
                    <span class='category'>${user.getExerciseById(exerId).category}</span>
                </div>
                <hr />
                <div class='tags'>
                    ${tags}
                </div>
                <hr />
                <div class='inputs'>
                    ${inputs}
                </div>
            </section>`;
        });

        // Finish button and textarea
        let footer = `<section>
            <a href="#results" class="btn" id='finish'>Finish Activity - To Clipboard</a>
            <textarea id="results"></textarea>
        </section>`;

        let allSections = routine + exerciseSections + footer;

        // Set Activity page html
        document.querySelector('div.activity').innerHTML = allSections;

        // Click listener for finishing activity button
        document.querySelector("#finish").addEventListener("click", () => {
            Profile.finishActivity(user, routineId);
        });

        // Click listener for cancel activity button
        document.querySelector("#cancel").addEventListener("click", () => {
            if (confirm("Discard this activity and return to the Home page?")){
                View.stopActivityTimer();
                window.location.href = "index.html";
            };
        });
    }
}

// Used to define properties of an exercise (UI elements, input fields, etc)
class Exercise {
    constructor(name, category, desc, tags, fields, records) {
        this.name = name;
        this.category = category;
        this.desc = desc;
        this.tags = tags; // notes, breaks, tempo...
        this.fields = fields; // distance, duration, sets...
        this.records = records;
    }
}

// Additional information tags for a specific exercise
class Tags {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}

// Named collection of exercises used by activities
class Routine {
    constructor(name, exerciseIds) {
        this.name = name;
        this.exerciseIds = exerciseIds;
    }
}

// Activity or workout that a user is doing or has completed
class Activity {
    constructor(endTime, routineId, weightMoved) {
        this.startTime = new Date();
        this.endTime = endTime;
        this.routineId = routineId;
        this.weightMoved = weightMoved;
    }
}

// Performance record for an exercise
class Record {
    constructor(duration, distance, sets) {
        this.date = new Date();
        this.duration = duration;
        this.distance = distance;
        this.sets = sets;
    }
}

// Exercise set
class ASet {
    constructor(weight, reps) {
        this.weight = weight;
        this.reps = reps;
    }
}

// Date stamped user measurment
class Measurement {
    constructor(bodyWeight, bodyFat) {
        this.date = new Date();
        this.bodyWeight = bodyWeight;
        this.bodyFat = bodyFat;
        // @FEATURE: could include other measurements like chest, arms, waist...
    }
}

// Top level user profile
class Profile {
    constructor(email="test@test.com", units=UnitsEnum.IMPERIAL) {
        this.email = email;
        this.units = units;
        this.exercises = new Map();
        this.routines = new Map();
        this.activities = new Map();
        this.measurements = new Map();
        this.idCounter = 1000;
    }

    addExercise(...exerciseParams) {
        this.exercises.set(this.idCounter, new Exercise(...exerciseParams));
        this.idCounter++;
    }

    addRoutine(...routineParams) {
        this.routines.set(this.idCounter, new Routine(...routineParams));
        this.idCounter++;
    }

    addActivity(...activityParams) {
        this.activities.set(this.idCounter, new Activity(...activityParams));
        this.idCounter++;
        console.log("Starting activity timer");
        View.activityTimer(new Date());
    }

    addMeasurement(...measurementParams) {
        this.measurements.set(this.idCounter, new Measurement(...measurementParams));
        this.idCounter++;
    }

    getExerciseIdByName(exerciseName){
        for(let exerKey of this.exercises.keys()) {
            if (this.exercises.get(exerKey).name === exerciseName) {
                return exerKey;
            }
        }
    }

    getExerciseById(exerciseId){
        return this.exercises.get(Number(exerciseId));
    }

    getRoutineById(routineId){
        return this.routines.get(Number(routineId));
    }

    // Ends the current activity and records the data
    static finishActivity(user, routineId) {
        let activityData = [];
        activityData.push(View.getDateString());

        // Get activity data from fields
        let exerciseIds = user.routines.get(Number(routineId)).exerciseIds;
        exerciseIds.forEach( exid => {
            var id = "";
            // Constructing the id to find the input and get its value
            if (user.getExerciseById(exid).category === CategoryEnum.CARDIO) {
                let cardioDuration = "";
                let cardioDistance = "";

                id = `ex${exid}-duration`;
                cardioDuration += document.getElementById(id).value;

                id = `ex${exid}-distance`;
                cardioDistance += document.getElementById(id).value;

                // in case no value was entered
                if (cardioDuration === "") {
                    cardioDuration = "0";
                }
                if (cardioDistance === "") {
                    cardioDistance = "0"
                }
                
                activityData.push(`${cardioDuration} (${cardioDistance})`);
            } else if (user.getExerciseById(exid).category === CategoryEnum.MISC) {
                let miscDuration = "";

                id = `ex${exid}-duration`;
                miscDuration = document.getElementById(id).value;

                // in case no value was entered
                if (miscDuration === "") {
                    miscDuration = "0";
                }

                activityData.push(miscDuration);
            } else {
                let weightId = "";
                let repId = "";
                let setText = "";

                // Look for set data in the record - using [0] is not ideal
                const sets = user.getExerciseById(exid).records[0].sets;

                sets.forEach( (oneSet, i) => {
                    weightId = `ex${exid}-weight${i}`;
                    repId = `ex${exid}-rep${i}`;

                    // Both weight and rep values must be found to accept data
                    if (document.getElementById(weightId).value && document.getElementById(repId).value) {
                        let weight = document.getElementById(weightId).value;
                        let rep = document.getElementById(repId).value;
                        
                        setText += `${weight}x${rep}, `;
                    }
                });
                // Trim off trailing ', '
                activityData.push(setText.slice(0, -2));
            }
        });

        activityData.push(document.getElementById("timer").innerHTML)
    
        // Paste formatted data to textarea
        let textarea = document.getElementById('results');
        textarea.value = "";
    
        activityData.forEach(entry => {
            textarea.value += entry + "\n";
        });
    
        textarea.select();
        textarea.setSelectionRange(0, 99999); // For mobile devices
    
        try {
            console.log("Attempting to copy text...");
            document.execCommand('copy');
        } catch (err) {
            console.err("Unable to copy text!", err);
        }
    }

    seedExampleExercises() {
        console.log("Seeding exercises");

        this.addExercise(ExerciseEnum.ELLIPTICAL, CategoryEnum.CARDIO, "", [
            new Tags(TagsEnum.NOTES, ""),
            new Tags(TagsEnum.INTENSITY, "Medium"),
            new Tags(TagsEnum.RESISTENCE, "8/20"),
            new Tags(TagsEnum.INCLINE, "0/20")
        ], [
            FieldsEnum.DURATION, FieldsEnum.DISTANCE
        ], [
            new Record(7, 0.5, null)
        ]);
        this.addExercise(ExerciseEnum.ELLIPTICAL_INTERVAL, CategoryEnum.CARDIO, "", [
            new Tags(TagsEnum.NOTES, ""),
            new Tags(TagsEnum.INTENSITY, "High"),
            new Tags(TagsEnum.RESISTENCE, "8/20"),
            new Tags(TagsEnum.INCLINE, "0/20")
        ], [
            FieldsEnum.DURATION, FieldsEnum.DISTANCE
        ], [
            new Record(24, 2, null)
        ]);
        this.addExercise(ExerciseEnum.STRETCHING, CategoryEnum.MISC, "", [
            new Tags(TagsEnum.NOTES, ""),
            new Tags(TagsEnum.INTENSITY, "Medium")
        ], [
            FieldsEnum.DURATION
        ], [
            new Record(9, null, null)
        ]);
        this.addExercise(ExerciseEnum.FLAT_BENCH_PRESS, CategoryEnum.CHEST, "", [
            new Tags(TagsEnum.NOTES, ""),
            new Tags(TagsEnum.BREAKS, "3m"),
            new Tags(TagsEnum.TEMPO, "Normal"),
            new Tags(TagsEnum.INTENSITY, "High")
        ], [
            FieldsEnum.SETS
        ], [
            new Record(null, null, [
                new ASet(130, 10),
                new ASet(130, 7),
                new ASet(130, 7),
                new ASet(130, 6)
            ])
        ]);
        this.addExercise(ExerciseEnum.INCLINE_BENCH_PRESS, CategoryEnum.CHEST, "", [
            new Tags(TagsEnum.NOTES, ""),
            new Tags(TagsEnum.BREAKS, "3m"),
            new Tags(TagsEnum.TEMPO, "Normal"),
            new Tags(TagsEnum.INTENSITY, "High")
        ], [
            FieldsEnum.SETS
        ], [
            new Record(null, null, [
                new ASet(75, 10),
                new ASet(75, 8),
                new ASet(75, 8),
                new ASet(75, 8)
            ])
        ]);
        this.addExercise(ExerciseEnum.DECLINE_BENCH_PRESS, CategoryEnum.CHEST, "", [
            new Tags(TagsEnum.NOTES, ""),
            new Tags(TagsEnum.BREAKS, "3m"),
            new Tags(TagsEnum.TEMPO, "Normal"),
            new Tags(TagsEnum.INTENSITY, "High")
        ], [
            FieldsEnum.SETS
        ], [
            new Record(null, null, [
                new ASet(125, 10),
                new ASet(125, 10),
                new ASet(127.5, 9),
                new ASet(130, 7)
            ])
        ]);
        this.addExercise(ExerciseEnum.FLY_MACHINE_CHEST, CategoryEnum.CHEST, "", [
            new Tags(TagsEnum.NOTES, ""),
            new Tags(TagsEnum.BREAKS, "1m 30s"),
            new Tags(TagsEnum.TEMPO, "Slow"),
            new Tags(TagsEnum.INTENSITY, "High")
        ], [
            FieldsEnum.SETS
        ], [
            new Record(null, null, [
                new ASet(110, 8),
                new ASet(110, 7),
                new ASet(110, 7)
            ])
        ]);
        this.addExercise(ExerciseEnum.CABLE_TRICEP_PULLDOWNS, CategoryEnum.TRICEPS, "", [
            new Tags(TagsEnum.NOTES, ""),
            new Tags(TagsEnum.BREAKS, "1m"),
            new Tags(TagsEnum.TEMPO, "Normal"),
            new Tags(TagsEnum.INTENSITY, "High")
        ], [
            FieldsEnum.SETS
        ], [
            new Record(null, null, [
                new ASet(47.5, 10),
                new ASet(47.5, 10),
                new ASet(47.5, 10)
            ])
        ]);
        this.addExercise(ExerciseEnum.TRICEP_PRESS_MACHINE, CategoryEnum.TRICEPS, "", [
            new Tags(TagsEnum.NOTES, ""),
            new Tags(TagsEnum.BREAKS, "1m"),
            new Tags(TagsEnum.TEMPO, "Normal"),
            new Tags(TagsEnum.INTENSITY, "High")
        ], [
            FieldsEnum.SETS
        ], [
            new Record(null, null, [
                new ASet(190, 10),
                new ASet(150, 10),
                new ASet(160, 10)
            ])
        ]);
        this.addExercise(ExerciseEnum.BENT_OVER_ROWS, CategoryEnum.BACK, "", [
            new Tags(TagsEnum.NOTES, ""),
            new Tags(TagsEnum.BREAKS, "3m"),
            new Tags(TagsEnum.TEMPO, "Normal"),
            new Tags(TagsEnum.INTENSITY, "High")
        ], [
            FieldsEnum.SETS
        ], [
            new Record(null, null, [
                new ASet(122.5, 9),
                new ASet(122.5, 10),
                new ASet(125, 8),
                new ASet(125, 8)
            ])
        ]);
        this.addExercise(ExerciseEnum.SHRUGS, CategoryEnum.BACK, "", [
            new Tags(TagsEnum.NOTES, ""),
            new Tags(TagsEnum.BREAKS, "3m"),
            new Tags(TagsEnum.TEMPO, "Normal"),
            new Tags(TagsEnum.INTENSITY, "High")
        ], [
            FieldsEnum.SETS
        ], [
            new Record(null, null, [
                new ASet(190, 10),
                new ASet(190, 9),
                new ASet(192.5, 9),
                new ASet(192.5, 8)
            ])
        ]);
        this.addExercise(ExerciseEnum.STIFF_LEG_DEADLIFTS, CategoryEnum.BACK, "", [
            new Tags(TagsEnum.NOTES, ""),
            new Tags(TagsEnum.BREAKS, "3m"),
            new Tags(TagsEnum.TEMPO, "Normal"),
            new Tags(TagsEnum.INTENSITY, "High")
        ], [
            FieldsEnum.SETS
        ], [
            new Record(null, null, [
                new ASet(115, 10),
                new ASet(120, 10),
                new ASet(120, 10),
                new ASet(120, 10)
            ])
        ]);
        this.addExercise(ExerciseEnum.ASSISTED_PULL_UPS, CategoryEnum.BACK, "", [
            new Tags(TagsEnum.NOTES, ""),
            new Tags(TagsEnum.BREAKS, "3m"),
            new Tags(TagsEnum.TEMPO, "Normal"),
            new Tags(TagsEnum.INTENSITY, "High")
        ], [
            FieldsEnum.SETS
        ], [
            new Record(null, null, [
                new ASet(-25, 10),
                new ASet(-25, 10),
                new ASet(-25, 10)
            ])
        ]);
        this.addExercise(ExerciseEnum.OVERHAND_CURLS, CategoryEnum.BICEPS, "", [
            new Tags(TagsEnum.NOTES, ""),
            new Tags(TagsEnum.BREAKS, "30s"),
            new Tags(TagsEnum.TEMPO, "Normal"),
            new Tags(TagsEnum.INTENSITY, "Medium")
        ], [
            FieldsEnum.SETS
        ], [
            new Record(null, null, [
                new ASet(15, 10),
                new ASet(15, 10),
                new ASet(15, 10)
            ])
        ]);
        this.addExercise(ExerciseEnum.UNDERHAND_CURLS, CategoryEnum.BICEPS, "", [
            new Tags(TagsEnum.NOTES, ""),
            new Tags(TagsEnum.BREAKS, "2m"),
            new Tags(TagsEnum.TEMPO, "Normal"),
            new Tags(TagsEnum.INTENSITY, "High")
        ], [
            FieldsEnum.SETS
        ], [
            new Record(null, null, [
                new ASet(30, 7),
                new ASet(30, 7),
                new ASet(30, 7)
            ])
        ]);
        this.addExercise(ExerciseEnum.HAMMER_CURLS, CategoryEnum.BICEPS, "", [
            new Tags(TagsEnum.NOTES, ""),
            new Tags(TagsEnum.BREAKS, "2m"),
            new Tags(TagsEnum.TEMPO, "Normal"),
            new Tags(TagsEnum.INTENSITY, "High")
        ], [
            FieldsEnum.SETS
        ], [
            new Record(null, null, [
                new ASet(30, 6),
                new ASet(30, 6),
                new ASet(30, 6)
            ])
        ]);
        this.addExercise(ExerciseEnum.SIDE_RAISES, CategoryEnum.SHOULDERS, "", [
            new Tags(TagsEnum.NOTES, ""),
            new Tags(TagsEnum.BREAKS, "30s"),
            new Tags(TagsEnum.TEMPO, "Normal"),
            new Tags(TagsEnum.INTENSITY, "High")
        ], [
            FieldsEnum.SETS
        ], [
            new Record(null, null, [
                new ASet(10, 10),
                new ASet(10, 10),
                new ASet(10, 10)
            ])
        ]);
        this.addExercise(ExerciseEnum.FRONT_RAISES, CategoryEnum.SHOULDERS, "", [
            new Tags(TagsEnum.NOTES, ""),
            new Tags(TagsEnum.BREAKS, "30s"),
            new Tags(TagsEnum.TEMPO, "Normal"),
            new Tags(TagsEnum.INTENSITY, "High")
        ], [
            FieldsEnum.SETS
        ], [
            new Record(null, null, [
                new ASet(10, 10),
                new ASet(10, 10),
                new ASet(10, 10)
            ])
        ]);
        this.addExercise(ExerciseEnum.SHOULDER_PRESS_MACHINE, CategoryEnum.SHOULDERS, "", [
            new Tags(TagsEnum.NOTES, ""),
            new Tags(TagsEnum.BREAKS, "1m 30s"),
            new Tags(TagsEnum.TEMPO, "Normal"),
            new Tags(TagsEnum.INTENSITY, "High")
        ], [
            FieldsEnum.SETS
        ], [
            new Record(null, null, [
                new ASet(60, 10),
                new ASet(60, 10),
                new ASet(60, 10)
            ])
        ]);
        this.addExercise(ExerciseEnum.LEG_PRESS_MACHINE, CategoryEnum.LEGS, "", [
            new Tags(TagsEnum.NOTES, ""),
            new Tags(TagsEnum.BREAKS, "1m"),
            new Tags(TagsEnum.TEMPO, "Normal"),
            new Tags(TagsEnum.INTENSITY, "Medium")
        ], [
            FieldsEnum.SETS
        ], [
            new Record(null, null, [
                new ASet(180, 10),
                new ASet(180, 10),
                new ASet(180, 10)
            ])
        ]);
        this.addExercise(ExerciseEnum.LEG_EXTENSION_MACHINE, CategoryEnum.LEGS, "", [
            new Tags(TagsEnum.NOTES, ""),
            new Tags(TagsEnum.BREAKS, "1m"),
            new Tags(TagsEnum.TEMPO, "Normal"),
            new Tags(TagsEnum.INTENSITY, "Medium")
        ], [
            FieldsEnum.SETS
        ], [
            new Record(null, null, [
                new ASet(95, 10),
                new ASet(95, 10),
                new ASet(95, 10)
            ])
        ]);
        this.addExercise(ExerciseEnum.LEG_CURL_MACHINE, CategoryEnum.LEGS, "", [
            new Tags(TagsEnum.NOTES, ""),
            new Tags(TagsEnum.BREAKS, "1m"),
            new Tags(TagsEnum.TEMPO, "Normal"),
            new Tags(TagsEnum.INTENSITY, "Medium")
        ], [
            FieldsEnum.SETS
        ], [
            new Record(null, null, [
                new ASet(90, 10),
                new ASet(90, 10),
                new ASet(90, 10)
            ])
        ]);
        this.addExercise(ExerciseEnum.CALF_EXTENSION_MACHINE, CategoryEnum.LEGS, "", [
            new Tags(TagsEnum.NOTES, ""),
            new Tags(TagsEnum.BREAKS, "1m"),
            new Tags(TagsEnum.TEMPO, "Normal"),
            new Tags(TagsEnum.INTENSITY, "Medium")
        ], [
            FieldsEnum.SETS
        ], [
            new Record(null, null, [
                new ASet(200, 10),
                new ASet(200, 10),
                new ASet(200, 10)
            ])
        ]);
        this.addExercise(ExerciseEnum.STANDING_GLUTE_MACHINE, CategoryEnum.LEGS, "", [
            new Tags(TagsEnum.NOTES, ""),
            new Tags(TagsEnum.BREAKS, "1m"),
            new Tags(TagsEnum.TEMPO, "Normal"),
            new Tags(TagsEnum.INTENSITY, "High")
        ], [
            FieldsEnum.SETS
        ], [
            new Record(null, null, [
                new ASet(130, 10),
                new ASet(130, 10),
                new ASet(130, 10)
            ])
        ]);
        this.addExercise(ExerciseEnum.HIP_ABDUCTION_MACHINE, CategoryEnum.LEGS, "", [
            new Tags(TagsEnum.NOTES, ""),
            new Tags(TagsEnum.BREAKS, "1m"),
            new Tags(TagsEnum.TEMPO, "Normal"),
            new Tags(TagsEnum.INTENSITY, "Medium")
        ], [
            FieldsEnum.SETS
        ], [
            new Record(null, null, [
                new ASet(205, 10),
                new ASet(205, 10),
                new ASet(205, 10)
            ])
        ]);
        this.addExercise(ExerciseEnum.HIP_ADDUCTION_MACHINE, CategoryEnum.LEGS, "", [
            new Tags(TagsEnum.NOTES, ""),
            new Tags(TagsEnum.BREAKS, "1m"),
            new Tags(TagsEnum.TEMPO, "Normal"),
            new Tags(TagsEnum.INTENSITY, "Medium")
        ], [
            FieldsEnum.SETS
        ], [
            new Record(null, null, [
                new ASet(170, 10),
                new ASet(175, 10),
                new ASet(180, 10)
            ])
        ]);
        this.addExercise(ExerciseEnum.ABDOMINAL_CRUNCH_MACHINE, CategoryEnum.CORE, "", [
            new Tags(TagsEnum.NOTES, ""),
            new Tags(TagsEnum.BREAKS, "2m"),
            new Tags(TagsEnum.TEMPO, "Normal"),
            new Tags(TagsEnum.INTENSITY, "High")
        ], [
            FieldsEnum.SETS
        ], [
            new Record(null, null, [
                new ASet(35, 25),
                new ASet(35, 25),
                new ASet(35, 25),
                new ASet(35, 25)
            ])
        ]);
        this.addExercise(ExerciseEnum.OBLIQUE_SIDE_BEND, CategoryEnum.CORE, "", [
            new Tags(TagsEnum.NOTES, ""),
            new Tags(TagsEnum.BREAKS, "1m"),
            new Tags(TagsEnum.TEMPO, "Normal"),
            new Tags(TagsEnum.INTENSITY, "High")
        ], [
            FieldsEnum.SETS
        ], [
            new Record(null, null, [
                new ASet(45, 25),
                new ASet(45, 25),
                new ASet(45, 25),
                new ASet(45, 25)
            ])
        ]);
    }

    seedExampleRoutines() {
        console.log("Seeding routines");

        this.addRoutine("Chest and Triceps", [
            this.getExerciseIdByName(ExerciseEnum.ELLIPTICAL),
            this.getExerciseIdByName(ExerciseEnum.FLAT_BENCH_PRESS),
            this.getExerciseIdByName(ExerciseEnum.INCLINE_BENCH_PRESS),
            this.getExerciseIdByName(ExerciseEnum.DECLINE_BENCH_PRESS),
            this.getExerciseIdByName(ExerciseEnum.FLY_MACHINE_CHEST),
            this.getExerciseIdByName(ExerciseEnum.CABLE_TRICEP_PULLDOWNS),
            this.getExerciseIdByName(ExerciseEnum.TRICEP_PRESS_MACHINE),
            this.getExerciseIdByName(ExerciseEnum.STRETCHING)
        ]);
        this.addRoutine("Back and Biceps", [
            this.getExerciseIdByName(ExerciseEnum.ELLIPTICAL),
            this.getExerciseIdByName(ExerciseEnum.BENT_OVER_ROWS),
            this.getExerciseIdByName(ExerciseEnum.SHRUGS),
            this.getExerciseIdByName(ExerciseEnum.STIFF_LEG_DEADLIFTS),
            this.getExerciseIdByName(ExerciseEnum.ASSISTED_PULL_UPS),
            this.getExerciseIdByName(ExerciseEnum.OVERHAND_CURLS),
            this.getExerciseIdByName(ExerciseEnum.UNDERHAND_CURLS),
            this.getExerciseIdByName(ExerciseEnum.HAMMER_CURLS),
            this.getExerciseIdByName(ExerciseEnum.STRETCHING)
        ]);
        this.addRoutine("Legs, Shoulders, and Core", [
            this.getExerciseIdByName(ExerciseEnum.ELLIPTICAL),
            this.getExerciseIdByName(ExerciseEnum.SIDE_RAISES),
            this.getExerciseIdByName(ExerciseEnum.FRONT_RAISES),
            this.getExerciseIdByName(ExerciseEnum.SHOULDER_PRESS_MACHINE),
            this.getExerciseIdByName(ExerciseEnum.LEG_PRESS_MACHINE),
            this.getExerciseIdByName(ExerciseEnum.LEG_EXTENSION_MACHINE),
            this.getExerciseIdByName(ExerciseEnum.LEG_CURL_MACHINE),
            this.getExerciseIdByName(ExerciseEnum.CALF_EXTENSION_MACHINE),
            this.getExerciseIdByName(ExerciseEnum.STANDING_GLUTE_MACHINE),
            this.getExerciseIdByName(ExerciseEnum.HIP_ABDUCTION_MACHINE),
            this.getExerciseIdByName(ExerciseEnum.HIP_ADDUCTION_MACHINE),
            this.getExerciseIdByName(ExerciseEnum.ABDOMINAL_CRUNCH_MACHINE),
            this.getExerciseIdByName(ExerciseEnum.OBLIQUE_SIDE_BEND),
            this.getExerciseIdByName(ExerciseEnum.STRETCHING)
        ]);
        this.addRoutine("General Cardio", [
            this.getExerciseIdByName(ExerciseEnum.ELLIPTICAL_INTERVAL),
            this.getExerciseIdByName(ExerciseEnum.STRETCHING)
        ]);
    }
}

// MAIN ########################################################################
document.addEventListener("DOMContentLoaded", (e) => {
    var user = new Profile();
    user.seedExampleExercises();
    user.seedExampleRoutines();
    //console.log(user);

    // Query url to determine which page to load
    const urlParams = new URLSearchParams(window.location.search);
    const routineParam = urlParams.get('routine');

    if (routineParam) {
        View.buildActivityPage(user, routineParam);
    } else {
        View.buildHomePage(user);
    }
});