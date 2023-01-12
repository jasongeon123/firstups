window.onload=function(){
    let mondayCount=0;
    let tuesdayCount=0;
    let wednesdayCount=0;
    let thursdayCount=0;
    let totalCount=0;
    var username = 0;

    var form = document.getElementById("EmployeeID");
    form.addEventListener("submit",function(event){
        const d = new Date();
        let day = d.getDay();
        event.preventDefault();
        username = form.username.value;
        console.log(day);
        var inputs = document.getElementById("Employee");
        inputs.innerHTML = "Employee Number:" + username;
        /*
        var appear = document.getElementById("disappear");
        appear.style.display="block";
        */
        var mondayAppear = document.getElementsByClassName("1");
        var tuesdayAppear = document.getElementsByClassName("2");
        var wednesdayAppear = document.getElementsByClassName("3");
        var thursdayAppear = document.getElementsByClassName("4");
        var countArray = mondayAppear.length;
        for(var i = 0; i < countArray; i++){
            if(day==1){
                mondayAppear[i].style.display="block";
                tuesdayAppear[i].style.display="none";
                wednesdayAppear[i].style.display="none";
                thursdayAppear[i].style.display="none";
            }else if(day==2){
                mondayAppear[i].style.display="none";
                tuesdayAppear[i].style.display="block";
                wednesdayAppear[i].style.display="none";
                thursdayAppear[i].style.display="none";
            }else if(day==3){
                mondayAppear[i].style.display="none";
                tuesdayAppear[i].style.display="none";
                wednesdayAppear[i].style.display="block";
                thursdayAppear[i].style.display="none";
            }else{
                mondayAppear[i].style.display="none";
                tuesdayAppear[i].style.display="none";
                wednesdayAppear[i].style.display="none";
                thursdayAppear[i].style.display="block";
            }
        }    
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



