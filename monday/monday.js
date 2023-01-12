window.onload=function(){
    let SeeingHabitsCount=0;
    let Scramble5seeingCount=0;
    let PointCommentaryCount=0;
    let Scramble10pointCount=0;
    let totalCount=0;

    //update count from database
    var link = document.getElementById("5SeeingHabits");
    link.addEventListener("click", function() {
        SeeingHabitsCount++;
        totalCount++;
    });
    var link = document.getElementById("Scramble5seeing");
    link.addEventListener("click", function() {
        Scramble5seeingCount++;
        totalCount++;
    });
    var link = document.getElementById("10PointCommentary");
    link.addEventListener("click", function() {
        PointCommentaryCount++;
        totalCount++;
    });
    var link = document.getElementById("Scramble10point");
    link.addEventListener("click", function() {
        Scramble10pointCount++;
        totalCount++;
    });

}



