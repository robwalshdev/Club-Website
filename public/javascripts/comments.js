
$(document).ready(function(){
    let comments = [];

    function addComment(handle, comment, postdate){
        comments.push({handle, comment, postdate});
    }

    function timeSince(date) {

      var seconds = Math.floor((new Date() - date) / 1000);

      var year = Math.floor(seconds / 31536000); //365 Days

      if (year > 1) {
        return year + " posted years";
      }
      year = Math.floor(seconds / 2592000); //30 Days
      if (year > 1) {
        return year + " posted months";
      }
      year = Math.floor(seconds / 86400); // 24 Hours
      if (year > 1) {
        return year + " posted days";
      }
      year = Math.floor(seconds / 3600); // 1 Hour
      if (year > 1) {
        return year + " posted hours";
      }
      year = Math.floor(seconds / 60); // 1 Min
      if (year > 1) {
        return year + " posted minutes";
      }
      return Math.floor(seconds) + " posted seconds";
    }
    
    $("form").submit(function(e){
        e.preventDefault();
        
        var sHTML = "";
        
        var handel = $("#handle").val();
        var comment = $("#userComment").val();
        var postdate = Date.now();
        
        if(handel == "" || comment == "") {
            alert("Please enter a valid comment");
            return;
        }
        
        addComment(handel, comment, postdate);
        
        $("#handle").val("");
        $("#userComment").val("");
        
        for(var i = 0; i < comments.length; i++){
            sHTML += "<div class='commentBox'><h5>" + comments[i].handle + "<br><small>" + timeSince(comments[i].postdate) + "</small>" + "</h5>" + "<p>" + comments[i].comment + "</p></div><br>";
        }
        
        
        $("#commentsList").html(sHTML).show();
    });
    
});
