$(document).ready(function() {

    $('.my-null1').mouseenter(function() {
setTimeout((
        $(this).addClass('my-active').siblings().removeClass('my-active')
      

),1000)
    })

    
    $('.my-hov1').mouseenter(function() {
        $('.my-hover').fadeIn();
    })
    $(document).click(function () { 
        
    
        $('.my-hover').fadeOut();
    })
    $('.to-dwon').click(function (e) {
        e.preventDefault();
        $('.card-actives2').removeClass('card-actives2')
        $('.card-active2').removeClass('card-active2')
        $('.card-bottom').addClass('card-active2')
        $('.my-card-2 ').addClass('card-actives2');

    }),

    $('.to-top').click(function (e) {

        e.preventDefault();
        $('.card-actives2').removeClass('card-actives2')
        $('.card-active2').removeClass('card-active2')
        $('.card-top').addClass('card-active2')
        $('.my-card-1 ').addClass('card-actives2');
    

    }),


    $('.card-top').mouseenter(function() {
        $('.my-card ').removeClass('card-actives2')
        $('.card-bottom').removeClass('card-active2')
        $('.card-top').addClass('card-active2')
        $('.my-card-1 ').addClass('card-actives2');
    }),


    $('.card-bottom').mouseenter(function() {
       
        $('.my-card ').removeClass('card-actives2')
        $('.card-top').removeClass('card-active2')
        $('.card-bottom').addClass('card-active2')
        $('.my-card-2 ').addClass('card-actives2');
      
    }),  $('.sub-in').click(function () {
$('.moo').fadeOut()
$('.sub-btn').animate({ margin: 0})
    })

})