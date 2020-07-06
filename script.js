var current_active = "#panel1"
$('.nav_option').click(function(){
   updateUnderline(this.id);
   updateContent(this.id);
});

function updateContent(index){
    $(current_active).toggleClass("active-page");
    var panelName = "#panel" + index;
    current_active = panelName;
    $(panelName).toggleClass("active-page");
}

function updateUnderline(index){
    var line = document.getElementById("line");
    if (index == "1"){
        line.classList = "line active1"
    }
    if (index == "2"){
        line.classList = "line active2"
    }
    if (index == "3"){
        line.classList = "line active3"
    }
    if (index == "4"){
        line.classList = "line active4"
    }
    if (index == "5"){
        line.classList = "line active5"
    }
}