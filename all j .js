
    $(function() {
      $( "main" ).hide();
      $( "main" ).fadeIn(2000);
    });

    $( function() {
      $( "#tabs" ).tabs();
    } );

    $('#tabs').on('click', function () {
    // console.log(this);
    $(this).addClass('animate__animated animate__swing');
});
$('#tabs').on('animationend', function () {
    // console.log('搖完了');
    $(this).removeClass('animate__animated animate__swing');
});

$('h4').addClass('animate__animated animate__zoomInUp');
/* $('h3').removeClass('animate__animated animate__zoomInUp'); */
$('h2').addClass('animate__animated animate__rollIn');

