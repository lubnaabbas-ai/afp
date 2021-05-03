var $links = $(".itemLinks");

$links.click(function(e){
  $links.removeclass("active");
  var clikedLink = e.target;
  clikedLink = $(clikedLink);
  var position = clikedLink.attr("data-pos");
  var translatevalue = "translate3d ("+ position * 25 +"%, 0px, 0px)";
  $("#wrapper").css({
      transform: translatevalue
  });

  clikedLink.addClass("active");

});

$($links[0]).addClass("active");