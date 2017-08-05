$(document).ready(function () {
    $('.mathButtons').on('click', function () {
        console.log('A math button has been clicked');
        
        var inputOne = $('#inputOne').val();
        var inputTwo = $('#inputTwo').val();
        console.log(inputOne);
        console.log(inputTwo);
    });
    
});