$(document).ready(function () {
    $('.mathButtons').on('click', function () {
        console.log('A math button has been clicked');
        var inputOne = $('#inputOne').val();
        var inputTwo = $('#inputTwo').val();
        var mathType = $(this).attr('id');
        var domMathObject = {
            input1: inputOne,
            input2: inputTwo,
            type: mathType
        };

        $.ajax({
            method: 'POST',
            url: '/math',
            data: domMathObject,
        })
        
    });
    
});