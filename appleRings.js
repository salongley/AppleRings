
var goal1 = 2;
var goal2 = 4;
var goal3 = 3;


var progress1 = 0;
var progress2 = 0;
var progress3 = 0;



var GoalName1 = "iUp";
var GoalName2 = "Business";
var GoalName3 = "Wow";

var mainChart = new RadialProgressChart('.main', {
    diameter: 80,
    series: [
        { labelStart: '\uF106', value: ((progress1 / goal1) * 100) },
        { labelStart: '\uF101', value: ((progress2 / goal2) * 100) },
        { labelStart: '\uF105', value: ((progress3 / goal3) * 100) }
    ]
}
);


function UpdateTarget3() {
    progress3 = progress3 + 1;
    updateChart()
}

function UpdateTarget2() {
    progress2 = progress2 + 1;
    updateChart()
}
function UpdateTarget1() {
    progress1 = progress1 + 1;
    updateChart()
}

function setUp() {

    document.getElementById('Button3').innerHTML = GoalName3;
    document.getElementById('Button2').innerHTML = GoalName2;
    document.getElementById('Button1').innerHTML = GoalName1;
}

function updateChart() {
    mainChart.update([
        { labelStart: '\uF106', value: ((progress1 / goal1) * 100) },
        { labelStart: '\uF101', value: ((progress2 / goal2) * 100) },
        { labelStart: '\uF105', value: ((progress3 / goal3) * 100) }
    ]);
}

function resetTargets() {
    progress1 = 0;
    progress2 = 0;
    progress3 = 0;

    document.getElementById('editTargetsForm').style.display = "none";

    localStorage.progress1 = 0;
    localStorage.progress2 = 0;
    localStorage.progress3 = 0;



    mainChart.update([
        { labelStart: '\uF106', value: ((progress1 / goal1) * 100) },
        { labelStart: '\uF101', value: ((progress2 / goal2) * 100) },
        { labelStart: '\uF105', value: ((progress3 / goal3) * 100) }
    ]);


}

function UpdateAllTargets() {

    GoalName1 = document.getElementById('g1').value;
    GoalName2 = document.getElementById('g2').value;
    GoalName3 = document.getElementById('g3').value;

    goal1 = parseInt(document.getElementById('t1v').value);
    goal2 = parseInt(document.getElementById('t2v').value);
    goal3 = parseInt(document.getElementById('t3v').value);


    document.getElementById('Button3').innerHTML = GoalName3;
    document.getElementById('Button2').innerHTML = GoalName2;
    document.getElementById('Button1').innerHTML = GoalName1;

    resetTargets();

}

function EditTargets() {
    document.getElementById('editTargetsForm').style.display = "block";
    document.getElementById('g1').value = GoalName1;
    document.getElementById('g2').value = GoalName2;
    document.getElementById('g3').value = GoalName3;


    document.getElementById('t1v').value = goal1;
    document.getElementById('t2v').value = goal2;
    document.getElementById('t3v').value = goal3;
}

function Cancel() {
    document.getElementById('editTargetsForm').style.display = "none";

}









