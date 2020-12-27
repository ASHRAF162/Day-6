
// $(window).scroll(function(){
//     alert('test');
// })

//stiky set
$(window).scroll(function(){
    var windowPosition = $(window).scrollTop();
    var stikydiv = $('#stikydiv').position();
    if(windowPosition>=stikydiv.top){
        $('#stikydiv').css({
            'position' : 'fixed',
            'top' : '0px'
        })
    }else{
        $('#stikydiv').css({
            'position' : 'relative',
            'top' : '0px'
        })
    }
   
})


// var firstscrollposition = 0;
// $('#scrooldiv').scroll(function(){
//     var scrollposition = $('#scrooldiv').scrollTop();
//     if(scrollposition > firstscrollposition){
//         $('#h2').text('you are scrooling up');
//     }else{
//         $('#h2').text('you are scrooing down');
//     } 
//     firstscrollposition = scrollposition;
// })

//scrooling numbaring
// $('#scrolldiv').scroll(function(){
//     var scrollposition = $('#scrolldiv').scrollTop();
//     $('#h2').text(scrollposition);
// })

//fadeOut
// $('#scrolldiv').scroll(function(){
//     $('#h2').css('display','block').fadeOut();
// })


$('#firstName').keyup(function(){
    var firstName = $('#firstName').val();
    $('#res1').text(firstName);
})

$('#lastName').keyup(function(){
   var lastName = $('#lastName').val();
   $('#res2').text(lastName);
})

$('#lastName').blur(function(){
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var fullName = firstName+' '+lastName;
    $('#res3').text(fullName);
 })

// $('#btn').click(function(){
//     var firstName = $('#firstName').val();
//     var lastName = $('#lastName').val();
//     var fullName = firstName+' '+lastName;
//     $('#res3').text(fullName);
// })