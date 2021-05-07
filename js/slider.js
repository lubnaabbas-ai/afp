var $links = $(".itemLinks");

$links.click(function(e){
  $links.removeClass("active");
  var clikedLink = e.target;
  clikedLink = $(clickedLink);
  var position = clickedLink.attr("data-pos");
  var translateValue = "translateX ("+ position * 25 +"%, 0px, 0px)";
  $("#wrapper").css({
      transform: translateValue
  });

  clikedLink.addClass("active");

});

$($links[0]).addClass("active");