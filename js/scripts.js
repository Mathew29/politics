$(document).ready(function(){
  $('#user').submit(function(event){
    var wall = $("input:radio[name=wall]:checked").val();
    var guns = $("input:radio[name=guns]:checked").val();
    var ice = $("input:radio[name=ice]:checked").val();

    if (wall === "yes" && guns === "yes" && ice === "yes") {
      $('#conservative').show();
      $('#questions').hide();
    } else if (wall === "no" && guns === "no" && ice === "no") {
      $('#liberal').show();
      $('#questions').hide();
    } else if (wall === "no" && guns === "no" && ice === "yes") {
      $('#neutral').show();
      $('#questions').hide();
    } else if (wall === "no" && guns === "yes" && ice === "no") {
      $('#neutral').show();
      $('#questions').hide();
    } else if (wall === "yes" && guns === "no" && ice === "no") {
      $('#neutral').show();
      $('#questions').hide();
    } else if (wall === "yes" && guns === "yes" && ice === "no") {
      $('#neutral').show();
      $('#questions').hide();
    } else if (wall === "no" && guns === "yes" && ice === "yes") {
      $('#neutral').show();
      $('#questions').hide();
    } else if (wall === "yes" && guns === "no" && ice === "yes") {
      $('#neutral').show();
      $('#questions').hide();
    } else {
      alert("you forgot to fill out the form");
    }
    event.preventDefault();
  })


});
