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
        $('#displayResult').html('Enter 2 numbers then select a calculation type');

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
    //result = value
    console.log(result);
    $('#displayResult').html('Enter 2 numbers then select a calculation type');
    if (typeof result === 'number') {
        $('#displayResult').html('That equals ' + result);
    }
};// end displayResult()


