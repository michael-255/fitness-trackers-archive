$(document).ready(function(){
    // Generate routine buttons
    defaultProfile.routines.forEach((routine, i) => {
        let id = "routine" + i;

        $("#routines").append(
            "<button type='button' class='btn btn-primary btn-lg btn-block' id=" +
            id + ">" + routine.name + "</button><br />"
        );

        // each routine goes to the workout page
        $("#routine" + i).on('click', function(){
            window.location.href = "workout.html?routine=" + routine.name;
        });
    });
});
