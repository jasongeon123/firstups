window.onload=function(){
    let mondayCount=0;
    let tuesdayCount=0;
    let wednesdayCount=0;
    let thursdayCount=0;
    let totalCount=0;
    var username = 0;

    var form = document.getElementById("EmployeeID");
    form.addEventListener("submit",function(event){
        event.preventDefault();
        username = form.username.value;
        var inputs = document.getElementById("Employee");
        inputs.innerHTML = "Employee Number:" + username;
        
        var appear = document.getElementById("disappear");
        appear.style.display="block";
        /*
        var tab = document.createElement("table");
        tab.setAttribute("class","links");
        var tr = document.createElement("tr");
        var th1 = document.createElement("th");
        th1.innerHTML="Monday";
        tr.appendChild(th1);
        */
        
    });
    //update count from database
    var link = document.getElementById("Monday");
    link.addEventListener("click", function() {
        mondayCount++;
        totalCount++;
    });
    var link = document.getElementById("Tuesday");
    link.addEventListener("click", function() {
        tuesdayCount++;
        totalCount++;
    });
    var link = document.getElementById("Wednesday");
    link.addEventListener("click", function() {
        wednesdayCount++;
        totalCount++;
    });
    var link = document.getElementById("Thursday");
    link.addEventListener("click", function() {
        thursdayCount++;
        totalCount++;
    });



    /*
    function mondayCountClicks(){
        mondayCount++;
        totalCount++;
        console.log(mondayCount);
    }
    function tuesdayCountClicks(){
        tuesdayCount++;
        totalCount++;
    }
    function wednesdayCountClicks(){
        wednesdayCount++;
        totalCount++;
    }
    function thursdayCountClicks(){
        thursdayCount++;
        totalCount++;
    }
    */
}



