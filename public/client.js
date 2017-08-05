$(document).ready(function () {
    getMathResult()
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
            success: function (response) {
                console.log(response);
                getMathResult();
            }
        })//end ajax POST  
    })//end event listener

    $('#clear').on('click', function () {
        $('#inputOne').val('');
        $('#inputTwo').val('');
        $('#displayResult').empty();

    });



});//end $(document).ready

function getMathResult() {
    $.ajax({
        method: 'GET',
        url: '/math',
        success: function (response) {
            response = response[0];
            displayResult(response);
        }
    })//end ajax GET
};// end getMathResult()

function displayResult(result) {
    $('#displayResult').empty();
    $('#displayResult').html(result);
   
};// end displayResult()


