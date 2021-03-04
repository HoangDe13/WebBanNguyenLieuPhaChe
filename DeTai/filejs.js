window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

jQuery(document).ready(function($){ 	
	if($(".btn-top").length > 0){
		$(window).scroll(function () {
			var e = $(window).scrollTop();
			if (e > 300) {
				$(".btn-top").show()
			} else {
				$(".btn-top").hide()
			}
		});
		$(".btn-top").click(function () {
			$('body,html').animate({
				scrollTop: 0
			})
		})
	}		
});