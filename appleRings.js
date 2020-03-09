
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
    updateChart();
    saveData();
}

function UpdateTarget2() {
    progress2 = progress2 + 1;
    updateChart();
    saveData();

}
function UpdateTarget1() {
    progress1 = progress1 + 1;
    updateChart();
    saveData();

}

function setUp() {

    loadData();
    updateChart();

    document.getElementById('Button3').innerHTML = GoalName3;
    document.getElementById('Button2').innerHTML = GoalName2;
    document.getElementById('Button1').innerHTML = GoalName1;
}

function loadData() {
    if (localStorage.getItem("AppleRings.goal1") != undefined) {
        goal1 = localStorage.getItem("AppleRings.goal1");
    } else {
        goal1 = 2;
    };

    if (localStorage.getItem("AppleRings.goal2") != undefined) {
        goal2 = localStorage.getItem("AppleRings.goal2");
    } else {
        goal2 = 4;
    };
    if (localStorage.getItem("AppleRings.goal3") != undefined) {
        goal3 = localStorage.getItem("AppleRings.goal3");
    } else {
        goal3 = 2;
    };

    if (localStorage.getItem("AppleRings.progress1") != undefined) {
        progress1 = localStorage.getItem("AppleRings.progress1");
    } else {
        progress1 = 0;
    };

    if (localStorage.getItem("AppleRings.progress2") != undefined) {
        progress2 = localStorage.getItem("AppleRings.progress2");
    } else {
        progress2 = 0;
    };

    if (localStorage.getItem("AppleRings.progress3") != undefined) {
        progress3 = localStorage.getItem("AppleRings.progress3");
    } else {
        progress3 = 0;
    };

    if (localStorage.getItem("AppleRings.GoalName1") != undefined) {
        GoalName1 = localStorage.getItem("AppleRings.GoalName1");
    } else {
        GoalName1 = "iUp";
    };

    if (localStorage.getItem("AppleRings.GoalName2") != undefined) {
        GoalName2 = localStorage.getItem("AppleRings.GoalName2");
    } else {
        GoalName2 = "Business";
    };
    if (localStorage.getItem("AppleRings.GoalName3") != undefined) {
        GoalName3 = localStorage.getItem("AppleRings.GoalName3");
    } else {
        GoalName3 = "Wow";
    };




}
function saveData() {

    localStorage.setItem("AppleRings.goal1", goal1);
    localStorage.setItem("AppleRings.goal2", goal2);
    localStorage.setItem("AppleRings.goal3", goal3);

    localStorage.setItem("AppleRings.progress1", progress1);
    localStorage.setItem("AppleRings.progress2", progress2);
    localStorage.setItem("AppleRings.progress3", progress3);

    localStorage.setItem("AppleRings.GoalName1", GoalName1);
    localStorage.setItem("AppleRings.GoalName2", GoalName2);
    localStorage.setItem("AppleRings.GoalName3", GoalName3);

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

    saveData();



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

    saveData();
}

function Cancel() {
    document.getElementById('editTargetsForm').style.display = "none";

}