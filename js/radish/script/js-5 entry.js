$(document).ready(function(){
    $("button").click(function(){
        var n=$('#name').val();
        var p=$('#name-pwd').val();
        console.log(n);
        console.log(p);
        $.post("/carrots-admin-ajax/a/login", {
            name: n,
            pwd: p
        },
            function (data,status){
               console.log(status);
               var jsons=JSON.parse(data);
               console.log(jsons.message);
               if (jsons.code===0){
                   window.location.href = "http://www.jnshu.com/home"
               }else {
                   $('#error').html(jsons.message);
               }
        });
    });
});