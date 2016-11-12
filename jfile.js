$(document).ready(function(){
    var searchB = $("#search");
    
    searchB.click(function(){
        $.ajax({
            type: 'GET',
            url: 'request.php',
            datatype: 'html',
            data: {
                q: $("#word").val()
            },
            success: function(text){
                $("#result").html(text);
            }
        });
    });
});