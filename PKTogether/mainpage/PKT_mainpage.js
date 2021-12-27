$(".sidebar-dropdown > a").click(function() {
	$(".sidebar-submenu").slideUp(200);
	if (
	  $(this)
		.parent()
		.hasClass("active")
	) {
	  $(".sidebar-dropdown").removeClass("active");
	  $(this)
		.parent()
		.removeClass("active");
	} else {
	  $(".sidebar-dropdown").removeClass("active");
	  $(this)
		.next(".sidebar-submenu")
		.slideDown(200);
	  $(this)
		.parent()
		.addClass("active");
	}
  });
  
$("#close-sidebar").click(function() {
$(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
$(".page-wrapper").addClass("toggled");
});

function loginnmove() {
location.href = '/PKTogether/loginpage/PKT_login.html';
}

function mainpagemove() {
location.href = './PKT_mainpage.html';
}