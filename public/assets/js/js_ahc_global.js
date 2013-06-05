(function($) {
	$(document).ready(function() {
		// Open current audience nav if applicable
		if ($(".sidebar_nav .expanded").length == 0) { // breadth-first
			$(".sidebar_nav > ul > li > a").each(function() {
				if (this.href != "" && this.href == window.location.href) {
					$(this).attr("href", "").click(function(e) { e.preventDefault(); }).addClass("expanded")
						.children("span").removeClass("icon-external").addClass("icon-expanded");
					$(this).siblings("#audience-dropdown-content").show();
					return false;
				}
			});
		}
		
		if ($(".sidebar_nav .expanded").length == 0) { // depth search
			$(".sidebar_nav > ul > li > ul a").each(function() {
				if (this.href != "" && this.href == window.location.href) {
					found = true;
					$audUl = $(this).parent().parent();
					$audUl.siblings("a").removeClass('collapsed').addClass('expanded').children('span').removeClass('icon-collapsed').addClass('icon-expanded');
					$audUl.toggle();
					return false;
				}
			});
		}
		
		$('.collapsed, .expanded').click(function(e) {
			e.preventDefault();
			if ($(this).hasClass('collapsed') && $('this:animated').length<1) {
				$(this).removeClass('collapsed').addClass('expanded').children('span').removeClass('icon-collapsed').addClass('icon-expanded');
				$(this).siblings('ul').slideDown(250);
			} else {
				$(this).removeClass('expanded').addClass('collapsed').children('span').removeClass('icon-expanded').addClass('icon-collapsed');
				$(this).siblings('ul').slideUp(250);
			}
		});
		
		$("a.list_toggle").click(function(e) {
			e.preventDefault();
			$(this).toggleClass("lt_expanded");
			$(this).next('ul').toggle('blind');
		});

		$("a.list_header").click(function(e) {
			e.preventDefault();
		  	if ($('.list_content:animated').length < 1) {
        		$(this).parent().toggleClass("list_expanded");
        		$(this).next('div').toggle('blind');
      		}
		});
		
		$("div.list_header").click(function(e) {
			e.preventDefault();
		  	if ($('.list_content:animated').length < 1) {
				$(this).toggleClass("list_expanded");
				$(this).next('li').toggle('blind');
			}
		});
		
	/************************************************************************/
    /* PAGINATED SLIDER
    /************************************************************************/
	
		if ($("#marquee-container .marquee-slides li").length > 1) {
    		if ($('#marquee-container').hasClass('short')) {
      			slide_width = 700;
    		} else {
      			slide_width = 918;
    		}
		
    		counter = 0;
    		marquee_length = $('.marquee-slides li').length;
    		marquee_width = $('.marquee-slides li').length * slide_width;
    		scroll_length = index * 940;
    		index = 0;
		
    		timer = setTimeout(function() {
      			myTimer();
    		}, 6000);
    		
    		$('.marquee-slides').css('width', marquee_width);
		
    		$.each($('.marquee-slides li'), function() {
      			$(this).addClass('slide' + counter);
      			if (counter == 0) {
        			$('#marquee-pagination').append('<a href="#" class="marquee-paginator marquee-active"></a>');
      			} else {
        			$('#marquee-pagination').append('<a href="#" class="marquee-paginator"></a>');
      			}
      			counter++;
    		});
		
    		$('.marquee-paginator').live('click', function(event) {
      			event.preventDefault();
      			clearTimeout(timer);
      			if (!$(this).hasClass('marquee-active') && !$('#marquee-slides').is(':animated')) {
        			index = $('.marquee-paginator').index(this);
        			scroll_length = index * slide_width;
        			var paginator = $(this);
        			$('.marquee-slides').animate({
          				left: -scroll_length
        			}, 500, function() {
          				$('.marquee-paginator').removeClass('marquee-active');
          				$(paginator).addClass('marquee-active');
        			});
        			myTimer();
        			timer = setTimeout(function() {
          				myTimer();
        			}, 10000);
      			}
    		});
		
    		$('.marquee-next a').live('click', function(event) {
      			event.preventDefault();
      			clearTimeout(timer);
      			if (!$(this).hasClass('marquee-active') && !$('#marquee-slides').is(':animated')) {
        			if ((index + 1) == marquee_length) {
          				index = 0;
        			} else {
          				index++;
        			}
        			scroll_length = index * slide_width;
        			$('.marquee-slides').animate({
          				left: -scroll_length
        			}, 500, function() {
          				$('.marquee-paginator').removeClass('marquee-active');
          				$('.marquee-paginator').eq(index).addClass('marquee-active');
        			});
        			timer = setTimeout(function() {
          				myTimer();
        			}, 10000);
      			}
    		});
		
    		$("ul.dropdown li").hover(function() {
        		$(this).addClass("hover");
        		$('ul:first',this).css('visibility', 'visible');
    		}, function() {
        		$(this).removeClass("hover");
        		$('ul:first',this).css('visibility', 'hidden');
    		});
    		
    		$("ul.dropdown li ul li:has(ul)").find("a:first").append(" &raquo; ");
    	}
		/* /SLIDER SCRIPT */
		
		// External link script (add icon CSS class and target='_blank' to external icons)
		$.expr[':'].external = function(obj){
    		return 	obj.href.indexOf("mailto:") != 0 &&
    				obj.href.indexOf("javascript:") != 0 &&
    				(obj.hostname != location.hostname);
		};
		$("a:external:not(.no_external)").each(function() {
			// excludes anchors surrounding H4 tags
			if ($(this).find('h1,h2,h3,h4,h5,img').length == 0 && 
						$(this).parent('h1,h2,h3,h4,h5').length == 0) {
				if ($(this).closest(".content_section_header").length != 0) {
					$(this).addClass("news_header_external").attr("target", "_blank");
				} else {
					$(this).addClass("external").attr("target", "_blank");
				}
			}
		});
		
		/* Tabs */
		if (!$('.module-tabs').length == 0) {
			//$('.tab:first').css('width', ($(this).width() - 1));
			$('.tabs-header').each(function(index) {
				var tabAmount = $(this).find('li').length;
				var headerWidth = $(this).width();
				var headerWidthDivide = headerWidth / tabAmount;
				var rounded = parseInt(headerWidthDivide);
				var remainder = headerWidth % tabAmount;
				//console.log(tabAmount + ' | ' + headerWidth + ' | ' + headerWidthDivide + ' | ' + rounded + ' | ' + remainder);
				$(this).find('li').css('width', rounded);
				$(this).find('li:last').css('width', rounded + remainder);
			});
			
			$('.tab').click(function(event) {
				event.preventDefault();
				if (!$(this).hasClass('tab-active')) {
					var index = $('.tab').index(this) + 1;
					$('.tab-content-block-active').fadeToggle('fast', function() {
						$('.tab-active').removeClass('tab-active');
						$('.tab:eq('+ (index - 1) +')').addClass('tab-active');
						$(this).removeClass('tab-content-block-active');
						$('.tab-content-block' + index).fadeToggle('fast').addClass('tab-content-block-active');
					});
				}
			});
		}
		/* /Tabs */
		
	});
})(jQuery);

var counter;
var marquee_length;
var marquee_width;
var scroll_length;
var marquee_slide_length;
var timer;
var timeOut;
var index;
var slide_width;

function myTimer() {
  clearTimeout(timer);
  if (!$('.marquee-slides').is(':animated')) {
    marquee_slide_length = (index + 1) * slide_width;
    if ((index + 1) == marquee_length) {
      $('.marquee-slides').animate({
        left:0
      }, 500, function(){
        if ((index + 1) >= marquee_length) {
          index = 0;
        } else {
          index++;
        }
        $('.marquee-paginator').removeClass('marquee-active');
        $('.marquee-paginator:eq('+index+')').addClass('marquee-active');
        timer = setTimeout(function() {
          myTimer();
        }, 6000);
      });
    } else {
      $('.marquee-slides').animate({
        left:-marquee_slide_length
      }, 500, function(){
        if ((index + 1) >= marquee_length) {
          index = 0;
        } else {
          index++;
        }
        $('.marquee-paginator').removeClass('marquee-active');
        $('.marquee-paginator:eq('+index+')').addClass('marquee-active');
        timer = setTimeout(function() {
          myTimer();
        }, 6000);
      });
    }
  }
}
