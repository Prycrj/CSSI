function showWhenClicked() {
    $("#pig").show();
}

function hideWhenClicked() {
    $("#pig").hide();
}
function flywhenClicked() {
  $("#pig").animate({left: '1750px'},);
}

function setup() {
    $("#showPig").click(showWhenClicked);
    $("#hidePig").click(hideWhenClicked);
    $("#flyPig").click(flywhenClicked);
}

$(document).ready(setup);
