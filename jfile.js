$(document).ready(function(){
    var searchB = $("#search");
    
    searchB.click(function(){
        $.ajax({
            type: 'GET',
            url: 'request.php',
            datatype: 'html',
            data: {
                q: 'definition'
            },
            success: function(text){
                alert(text);
            }
        });
    });
});