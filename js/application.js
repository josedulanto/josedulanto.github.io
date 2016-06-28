$(document).ready(function(){
  // Navigation
  $("a[href*='#']:not([href='#'])").click(function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,.theme').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });

  var aChildren = $(".intro nav a");
  var aArray = []; // create the empty aArray

  for (var i=0; i < aChildren.length; i++) {
      var aChild = aChildren[i];
      var ahref = $(aChild).attr('href');
      aArray.push(ahref);
  } // this for loop fills the aArray with attribute href values

  $(window).scroll(function(){
      var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
      var windowHeight = $(window).height(); // get the height of the window
      var docHeight = $(document).height();

      for (var i=0; i < aArray.length; i++) {
          var theID = aArray[i];
          var divPos = $(theID).offset().top; // get the offset of the div from the top of page
          var divHeight = $(theID).height(); // get the height of the div in question
          if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
              $("a[href='" + theID + "']").addClass("active");
          } else {
              $("a[href='" + theID + "']").removeClass("active");
          }
      }

      if(windowPos + windowHeight == docHeight) {
          if (!$(".intro nav a").hasClass("active")) {
              var navActiveCurrent = $(".active").attr("href");
              $("a[href='" + navActiveCurrent + "']").removeClass("active");
              $(".intro nav a").addClass("active");
          }
      }
  });

  // Contact form with https://formspree.io/
  $('#contact-error').hide();
  $('#contact-success').hide();

  $('#contact-form').on('submit', function(e) {
    e.preventDefault();

    //Set data
    var name = $('#contact-name').val();
    var from = $('#contact-email').val();
    var email = $('#contact-fullname').val();
    var message = $('#contact-message').val();
    var url = 'https://formspree.io/jose@dulan.to';
    
    ajaxData = {
      type: 'POST',
      url: url,
      contentType: 'application/json',
      data: JSON.stringify({
        from: from,
        name: name,
        message: message,
        email: email
      })
    };

    ajaxData.success = function() {
      $('#contact-name').val('');
      $('#contact-email').val('');
      $('#contact-message').val('');
      $('#contact-success').show();
      $('#contact-form input[type="submit"]').val('Send');
    };

    ajaxData.error = function() {
      $('#contact-error').show();
      $('#contact-form input[type="submit"]').val('Send');
    };

    $('#contact-form input[type="submit"]').val('Sending ...');
    $('#contact-success').hide();
    $('#contact-error').hide();
    $.ajax(ajaxData);
  });

  $('img.close').on('click', function() {
    $('#contact-error').hide();
    $('#contact-success').hide();
  });

  // Mobile menu
  $(".theme > nav .hamburger").click(function(){
  $(".theme > nav div").slideToggle();
  });

  $("section, .theme > nav div a").click(function(){
    $(".theme > nav div").slideUp();
  });

  // Expand
  $('.experience .content.expandable .item, .testimonials .content.expandable .testimonial').click(function() {
    $(this).addClass("expanded");
    $(this).children(".item-description").stop().slideDown();
    $(this).children(".base").children(".expand-icon").addClass('close');
  });

  $(".experience .content.expandable .item, .testimonials .content.expandable .testimonial").on("click", ".expand-icon.close", function(e) {
    e.stopPropagation();
    $(this).parent().parent().removeClass("expanded");
    $(this).parent().siblings(".item-description").stop().slideUp();
    $(this).removeClass('close');
  })

});
