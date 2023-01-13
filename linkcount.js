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
        window.sessionStorage.setItem("username", username);
        if(day==1){
            window.location.href="monday/monday.html";
        }else if(day==2){
            window.location.href="tuesday/tuesday.html";
        }else if(day==3){
            window.location.href="wednesday/wednesday.html";
        }else{
            window.location.href="thursday/thursday.html";
        }
        //var inputs = document.getElementById("Employee");
        //inputs.innerHTML = "Employee Number:" + username;
        /*
        var appear = document.getElementById("disappear");
        appear.style.display="block";
        */
        // var mondayAppear = document.getElementsByClassName("1");
        // var tuesdayAppear = document.getElementsByClassName("2");
        // var wednesdayAppear = document.getElementsByClassName("3");
        // var thursdayAppear = document.getElementsByClassName("4");
        //var countArray = mondayAppear.length;
        /*
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
        */   
    });
}



