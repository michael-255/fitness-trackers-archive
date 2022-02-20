// Get Month / Day / Year for navbar -------------------------------------------
function getCurrentDate(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return month + "/" + day + "/" + year; 
};
document.getElementById("currentDate").innerHTML = getCurrentDate();

// Clipboard copying functionality ---------------------------------------------
var copyButton = document.getElementById('copyButton');

copyButton.addEventListener('click', function(event) {
  var copyTextarea = document.getElementById('resultsTextArea');
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});

// Table data helper function
function getCompleteDataOnly(w, r, s){
    if(w && r && s){
        return w + "," + r + "," + s;
    } else {
        return "";
    }
};

// Get table formatted data from raw data in form ------------------------------
var tableButton = document.getElementById('tableButton');

tableButton.addEventListener('click', function(event) {
    var data, weight, reps, sets, checked;

    // Add data to the table
    data = [];
    data.push(getCurrentDate());

    // Add chest exercises
    weight = document.getElementById('chest-1-weight').value;
    reps   = document.getElementById('chest-1-reps').value;
    sets   = document.getElementById('chest-1-sets').value;
    data.push(getCompleteDataOnly(weight, reps, sets));
    weight, reps, sets = "";
    weight = document.getElementById('chest-2-weight').value;
    reps   = document.getElementById('chest-2-reps').value;
    sets   = document.getElementById('chest-2-sets').value;
    data.push(getCompleteDataOnly(weight, reps, sets));
    weight, reps, sets = "";
    weight = document.getElementById('chest-3-weight').value;
    reps   = document.getElementById('chest-3-reps').value;
    sets   = document.getElementById('chest-3-sets').value;
    data.push(getCompleteDataOnly(weight, reps, sets));
    weight, reps, sets = "";
    weight = document.getElementById('chest-4-weight').value;
    reps   = document.getElementById('chest-4-reps').value;
    sets   = document.getElementById('chest-4-sets').value;
    data.push(getCompleteDataOnly(weight, reps, sets));
    weight, reps, sets = "";
    weight = document.getElementById('chest-5-weight').value;
    reps   = document.getElementById('chest-5-reps').value;
    sets   = document.getElementById('chest-5-sets').value;
    data.push(getCompleteDataOnly(weight, reps, sets));
    weight, reps, sets = "";
    weight = document.getElementById('chest-6-weight').value;
    reps   = document.getElementById('chest-6-reps').value;
    sets   = document.getElementById('chest-6-sets').value;
    data.push(getCompleteDataOnly(weight, reps, sets));
    weight, reps, sets = "";
    weight = document.getElementById('chest-7-weight').value;
    reps   = document.getElementById('chest-7-reps').value;
    sets   = document.getElementById('chest-7-sets').value;
    data.push(getCompleteDataOnly(weight, reps, sets));
    weight, reps, sets = "";

    // Spacer
    data.push("");

    // Add back exercises
    weight = document.getElementById('back-1-weight').value;
    reps   = document.getElementById('back-1-reps').value;
    sets   = document.getElementById('back-1-sets').value;
    data.push(getCompleteDataOnly(weight, reps, sets));
    weight, reps, sets = "";
    weight = document.getElementById('back-2-weight').value;
    reps   = document.getElementById('back-2-reps').value;
    sets   = document.getElementById('back-2-sets').value;
    data.push(getCompleteDataOnly(weight, reps, sets));
    weight, reps, sets = "";
    weight = document.getElementById('back-3-weight').value;
    reps   = document.getElementById('back-3-reps').value;
    sets   = document.getElementById('back-3-sets').value;
    data.push(getCompleteDataOnly(weight, reps, sets));
    weight, reps, sets = "";
    weight = document.getElementById('back-4-weight').value;
    reps   = document.getElementById('back-4-reps').value;
    sets   = document.getElementById('back-4-sets').value;
    data.push(getCompleteDataOnly(weight, reps, sets));
    weight, reps, sets = "";
    weight = document.getElementById('back-5-weight').value;
    reps   = document.getElementById('back-5-reps').value;
    sets   = document.getElementById('back-5-sets').value;
    data.push(getCompleteDataOnly(weight, reps, sets));
    weight, reps, sets = "";
    weight = document.getElementById('back-6-weight').value;
    reps   = document.getElementById('back-6-reps').value;
    sets   = document.getElementById('back-6-sets').value;
    data.push(getCompleteDataOnly(weight, reps, sets));
    weight, reps, sets = "";
    weight = document.getElementById('back-7-weight').value;
    reps   = document.getElementById('back-7-reps').value;
    sets   = document.getElementById('back-7-sets').value;
    data.push(getCompleteDataOnly(weight, reps, sets));
    weight, reps, sets = "";
    weight = document.getElementById('back-8-weight').value;
    reps   = document.getElementById('back-8-reps').value;
    sets   = document.getElementById('back-8-sets').value;
    data.push(getCompleteDataOnly(weight, reps, sets));
    weight, reps, sets = "";

    // Spacer
    data.push("");

    // Add leg exercises
    weight = document.getElementById('legs-1-weight').value;
    reps   = document.getElementById('legs-1-reps').value;
    sets   = document.getElementById('legs-1-sets').value;
    data.push(getCompleteDataOnly(weight, reps, sets));
    weight, reps, sets = "";
    weight = document.getElementById('legs-2-weight').value;
    reps   = document.getElementById('legs-2-reps').value;
    sets   = document.getElementById('legs-2-sets').value;
    data.push(getCompleteDataOnly(weight, reps, sets));
    weight, reps, sets = "";
    weight = document.getElementById('legs-3-weight').value;
    reps   = document.getElementById('legs-3-reps').value;
    sets   = document.getElementById('legs-3-sets').value;
    data.push(getCompleteDataOnly(weight, reps, sets));
    weight, reps, sets = "";
    weight = document.getElementById('legs-4-weight').value;
    reps   = document.getElementById('legs-4-reps').value;
    sets   = document.getElementById('legs-4-sets').value;
    data.push(getCompleteDataOnly(weight, reps, sets));
    weight, reps, sets = "";
    weight = document.getElementById('legs-5-weight').value;
    reps   = document.getElementById('legs-5-reps').value;
    sets   = document.getElementById('legs-5-sets').value;
    data.push(getCompleteDataOnly(weight, reps, sets));
    weight, reps, sets = "";
    weight = document.getElementById('legs-6-weight').value;
    reps   = document.getElementById('legs-6-reps').value;
    sets   = document.getElementById('legs-6-sets').value;
    data.push(getCompleteDataOnly(weight, reps, sets));
    weight, reps, sets = "";
    weight = document.getElementById('legs-7-weight').value;
    reps   = document.getElementById('legs-7-reps').value;
    sets   = document.getElementById('legs-7-sets').value;
    data.push(getCompleteDataOnly(weight, reps, sets));
    weight, reps, sets = "";
    weight = document.getElementById('legs-8-weight').value;
    reps   = document.getElementById('legs-8-reps').value;
    sets   = document.getElementById('legs-8-sets').value;
    data.push(getCompleteDataOnly(weight, reps, sets));
    weight, reps, sets = "";
    weight = document.getElementById('legs-9-weight').value;
    reps   = document.getElementById('legs-9-reps').value;
    sets   = document.getElementById('legs-9-sets').value;
    data.push(getCompleteDataOnly(weight, reps, sets));
    weight, reps, sets = "";
    weight = document.getElementById('legs-10-weight').value;
    reps   = document.getElementById('legs-10-reps').value;
    sets   = document.getElementById('legs-10-sets').value;
    data.push(getCompleteDataOnly(weight, reps, sets));
    weight, reps, sets = "";

    // Spacer
    data.push("");

    // Add misc data
    checked = document.getElementById("pre-stretch").checked;
    data.push(checked ? "YES" : "");
    checked = document.getElementById("warmup").checked;
    data.push(checked ? "YES" : "");
    checked = document.getElementById("core").checked;
    data.push(checked ? "YES" : "");
    checked = document.getElementById("cooldown").checked;
    data.push(checked ? "YES" : "");
    checked = document.getElementById("post-stretch").checked;
    data.push(checked ? "YES" : "");

    // Spacer
    data.push("");

    weight = document.getElementById("body-weight").value;
    data.push(weight);

    // Log Data
    console.log(data);

    var textarea = document.getElementById('resultsTextArea');
    textarea.value = "";

    data.forEach( (entry) => {
        textarea.value += entry + "\n";
    });
});

// Get JSON from raw data in form ----------------------------------------------
var jsonButton = document.getElementById('jsonButton');

jsonButton.addEventListener('click', function(event) {
    console.log("JSON Button Not Implemented!");
});
