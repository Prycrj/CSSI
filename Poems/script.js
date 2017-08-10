function DisplayPoem(info,info2,info3) {
    var poem = "Im watching you, " + info + "you keep on " + info2+ " because thats what makes you " + info3 ;
    $('#output').html(poem);
}

function DisplayPoem2(info,info2,info3) {
    var poem = "My friend " + info + " dont forget to " + info2 + " before you " + info3;
    $('#output2').html(poem);
}

function DisplayPoem3(info,info2,info3) {
    var poem = "Damn, " + info + " you need to be careful when you " +info2 + " because I saw them coming, and theyre coming to " + info3+ " you";
    $('#output3').html(poem);
}

$('#submitName').click(function(){
  var passThis = $('input[name="studentName"]').val();
  var passThis2 = $('input[name="studentName2"]').val();
  var passThis3 = $('input[name="studentName3"]').val();

    DisplayPoem(passThis,passThis2,passThis3);
});


$('#submitName2').click(function(){
  var passThis = $('input[name="studentName"]').val();
  var passThis2 = $('input[name="studentName2"]').val();
  var passThis3 = $('input[name="studentName3"]').val();

    DisplayPoem2(passThis,passThis2,passThis3);
});

$('#submitName3').click(function(){
  var passThis = $('input[name="studentName"]').val();
  var passThis2 = $('input[name="studentName2"]').val();
  var passThis3 = $('input[name="studentName3"]').val();

    DisplayPoem3(passThis,passThis2,passThis3);
});
