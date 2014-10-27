$("#leftleg").click(function(){
        $("#leftleg").css("height", 50 + Math.floor(Math.random() * 75));
});

$("#rightleg").click(function(){
        $("#rightleg").css("height", 50 + Math.floor(Math.random() * 75));
});

var value =  0;
$("#image").rotate({ 
   bind: 
     { 
        click: function(){
            value +=Math.floor(Math.random() * 360);
            $(this).rotate({ animateTo:value})
        }    
     } 
});

// test_add_test