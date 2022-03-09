function printValue(divId, value) {
    $('#' + divId).html(value)
}

var first_txt, second_txt,sign;
$("#plus").on('click', () => 
{
    printValue("operation", "+");
    sign='+';
});

$("#minus").on('click', () => 
{
    printValue("operation", "-");
    sign='-';
});

$("#multiplication").on('click', () => 
{
    printValue("operation", "*");
    sign='*';
});

$("#division").on('click', () => 
{
    printValue("operation", "/");
    sign='/';
});


$("#equal").on('click', () => {
    first_txt = $('#first').val();
    second_txt = $('#second').val();

    first_nr = parseInt(first_txt);
    second_nr = parseInt(second_txt);

    
    switch (sign) {
        case '+':
            printValue("result", first_nr + second_nr);
            break;

        case '-':
            printValue("result", first_nr - second_nr);
            break;
        case '*':
            printValue("result", first_nr * second_nr);
            break
        case '/':
            printValue("result", first_nr / second_nr);
            break
        default:
            printValue("result", "error");
    }


});


