// DATA ########################################################################
const workouts = [
    {
        category: "Chest",
        exercises: [
            {
                name: "Flat Bench Press",
                weight: 112.5,
                reps: 10,
                sets: 4
            },
            {
                name: "Incline Bench Press",
                weight: 70,
                reps: 10,
                sets: 4
            },
            {
                name: "Decline Bench Press",
                weight: 112.5,
                reps: 10,
                sets: 4
            },
            {
                name: "Fly Machine (Chest)",
                weight: 110,
                reps: 10,
                sets: 3
            },
            {
                name: "Cable Chest Side Pulls",
                weight: 17.5,
                reps: 10,
                sets: 3
            },
            {
                name: "Cable Rope Pulldowns",
                weight: 37.5,
                reps: 10,
                sets: 3
            },
            {
                name: "Tricep Press Machine",
                weight: 170,
                reps: 10,
                sets: 3 
            },
            {
                name: "Laying Tricep Extensions",
                weight: 40,
                reps: 10,
                sets: 3 
            }
        ]
    },
    {
        category: "Back",
        exercises: [
            {
                name: "Bent Over Rows",
                weight: 115,
                reps: 10,
                sets: 4 
            },
            {
                name: "Smith Shrugs",
                weight: 182.5,
                reps: 10,
                sets: 4 
            },
            {
                name: "Stiff-Leg Deadlifts",
                weight: 95,
                reps: 10,
                sets: 4 
            },
            {
                name: "Assisted Pull-ups (3 grips)",
                weight: 40,
                reps: 10,
                sets: 3
            },
            {
                name: "Fly Machine (Back)",
                weight: 80,
                reps: 10,
                sets: 3
            },
            {
                name: "Underhand Curls",
                weight: 50,
                reps: 10,
                sets: 3
            },
            {
                name: "Hammer Curls",
                weight: 25,
                reps: 10,
                sets: 3
            },
            {
                name: "Overhand Curls",
                weight: 30,
                reps: 10,
                sets: 3
            }
        ]
    },
    {
        category: "Legs",
        exercises: [
            {
                name: "Side Raises",
                weight: 10,
                reps: 10,
                sets: 3
            },
            {
                name: "Front Raises",
                weight: 10,
                reps: 10,
                sets: 3
            },
            {
                name: "Shoulder Press Machine",
                weight: 50,
                reps: 10,
                sets: 3
            },
            {
                name: "Leg Press Machine",
                weight: 160,
                reps: 10,
                sets: 3
            },
            {
                name: "Leg Extension Machine",
                weight: 75,
                reps: 10,
                sets: 3
            },
            {
                name: "Leg Curl Machine",
                weight: 75,
                reps: 10,
                sets: 3
            },
            {
                name: "Calf Extension Machine",
                weight: 160,
                reps: 10,
                sets: 3
            },
            {
                name: "Hip Abduction (Out) Machine",
                weight: 190,
                reps: 10,
                sets: 3
            },
            {
                name: "Hip Adduction (In) Machine",
                weight: 150,
                reps: 10,
                sets: 3
            },
            {
                name: "Standing Glute Machine",
                weight: 110,
                reps: 10,
                sets: 3
            },
            {
                name: "Abdominal Crunch Machine",
                weight: 35,
                reps: 25,
                sets: 4
            },
            {
                name: "Dumbbell Oblique Side Bend",
                weight: 45,
                reps: 25,
                sets: 3
            },
        ]
    }
];

// Misc Workout Tasks
const misc = [
    "Warmup",
    "Stretch"
];

// FUNCTIONS ###################################################################
// Returns mm/dd/yyyy date string
function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return month + "/" + day + "/" + year; 
};

// Table data helper function
function getCompleteDataOnly(w, r, s){
    if(w && r && s){
        return w + "," + r + "," + s;
    } else {
        return "";
    }
};

// Sends the formated data to the textarea and copies it to the clipboard
function dataToClipboard() {
    let data, id, weight, reps, sets, checked;

    // add data to the table
    data = [];
    data.push(getCurrentDate());

    // Add exercises
    workouts.forEach(workout => {
        workout["exercises"].forEach((exercise, n) => {
            id = workout["category"].toLocaleLowerCase() + "-" + n;
            weight = document.getElementById(id + "-weight").value;
            reps = document.getElementById(id + "-reps").value;
            sets = document.getElementById(id + "-sets").value;
            // console.log(weight, reps, sets);
            data.push(getCompleteDataOnly(weight, reps, sets));
            weight, reps, sets = "";
        });
        // data.push("");
    });

    // Add extras
    misc.forEach(extra => {
        checked = document.getElementById(extra.toLocaleLowerCase()).checked;
        data.push(checked ? "Y" : "");
    });

    // Paste formatted data to textarea
    console.log(data);
    let textarea = document.getElementById('dataResults');
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

// Workout form generation
$(document).ready(function(){
    // Auto-hide navbar menu once is clicked
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    $("#currentDate").html(getCurrentDate()); // Add date to navbar

    // Build HTML for main workout categories
    workouts.forEach(workout => {
        // console.log(workout["category"]);
        $("#workouts").append("<hr />");
        $("#workouts").append("<a class='anchor' id='" + workout["category"].toLocaleLowerCase() + "'></a>");
        if (workout["category"] === "Chest") {
            $("#workouts").append("<h4>Chest & Triceps</h4>");
        };

        if (workout["category"] === "Back") {
            $("#workouts").append("<h4>Back & Biceps</h4>");
        };
        
        if (workout["category"] === "Legs") {
            $("#workouts").append("<h4>Legs, Shoulders, Core</h4>");
        }

        workout["exercises"].forEach((exercise, n) => {
            // console.log(exercise);
            $("#workouts").append("<h6>" + exercise["name"] + "</h6>");
            $("#workouts").append(`
                <div class="form-row mb-3">
                    <div class="col-6">
                        <input
                            type="number"
                            class="form-control form-control-sm"
                            placeholder="Weight ${exercise["weight"]} lbs"
                            min="1"
                            max="400"
                            id="${workout["category"].toLocaleLowerCase() + "-" + n + "-weight"}"
                        />
                    </div>
                    <div class="col-3">
                        <input
                            type="number"
                            class="form-control form-control-sm"
                            placeholder="Reps ${exercise["reps"]}"
                            min="1"
                            max="100"
                            id="${workout["category"].toLocaleLowerCase() + "-" + n + "-reps"}"
                        />
                    </div>
                    <div class="col-3">
                        <input
                            type="number"
                            class="form-control form-control-sm"
                            placeholder="Sets ${exercise["sets"]}"
                            min="1"
                            max="20"
                            id="${workout["category"].toLocaleLowerCase() + "-" + n + "-sets"}"
                        />
                    </div>
                </div>
            `);
        });
    });

    // Build HTML for misc extras
    $("#extras").append("<hr />");
    $("#extras").append("<a class='anchor' id='misc'></a>");
    $("#extras").append("<h4>Miscellanous</h4>");

    misc.forEach(extra => {
        // console.log(extra);
        $("#extras").append(`
            <div class="custom-control custom-checkbox">
                <input
                    type="checkbox"
                    class="custom-control-input"
                    id="${extra.toLocaleLowerCase()}"
                />
                <label class="custom-control-label" for="${extra.toLocaleLowerCase()}">
                    ${extra}
                </label>
            </div> 
        `);
    });
});