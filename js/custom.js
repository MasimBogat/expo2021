$(document).ready(function () {
    $('.expo--cardimage').each(function(){
        $(this).css('background-image', 'url("' + $(this).find('IMG').attr('src') + '"');
    });
    $('.news.owl-carousel').owlCarousel({
        nav: false,
        navText: ["<i class='prev'><</i>","<i class='next'>></i>"],
        dots: true,
        margin: 12,
        responsive: {
            0: {
                items: 1,
                margin: 0,
            },
            544: {
                items: 1,
                margin: 0,
            },
            545: {
                items: 2,
            },
            768: {
                items: 3,
                nav: true
            },
            991: {
                items: 3,
                nav: true
            },
            1320: {
                items: 4,
                nav: true
            }
        }
    });
    $('.vacation-tablink').on('click', function(e) {
        e.preventDefault();
        let thisTarget = $(this).attr('href');
        $('.vacation-tablink, .vacation--tabcontent').each(function() {
           $(this).removeClass('active');
        });
        $(this).addClass('active');
        $(thisTarget).addClass('active');
    });
    $('.hamburger').on('click', function(e) {
        e.preventDefault();
        let thisBody = $('body');
        if ($(this).hasClass('active')) {
            thisBody.removeClass('nav-open');
            $(this).removeClass('active');
        } else {
            thisBody.addClass('nav-open');
            $(this).addClass('active')
        }
    });
    $('.main-nav LI A').on('click', function(e) {
        $('.hamburger').removeClass('active');
        $('body').removeClass('nav-open');
    });

    $('.btn.gold').on('click', function(e) {
       e.preventDefault();
        $(btn).trigger('click');
    });

    let typeSelect = $('#exampleInputType'),
        thisInfochilds = $('.selected-type P');
    typeSelect.on('change', function() {
       let thisType = $(this).val(),
           thisTypeOpt = $(this).find(':selected').attr('data-info');
       if (thisType === "custom" && thisTypeOpt === undefined) {
           thisInfochilds.each(function() {
              $(this).removeClass('in').removeClass('not-in');
           });
           $('#exampleFormControlComment').prop("required", true);
           $('.form-group.observable').addClass('required');
       } else {
           let thisTypeOptArray = thisTypeOpt.split(',');
           thisInfochilds.each(function() {
               $(this).removeClass('in').addClass('not-in');
           });
           for (let i = 0; i < thisTypeOptArray.length; i++) {
               $('.selected-type P[data-order="' + thisTypeOptArray[i] + '"]').addClass('in').removeClass('not-in');
           }
           $('#exampleFormControlComment').prop("required", false);
           $('.form-group.observable').removeClass('required');
       }
    });

        /*form sumbit*/
        let myFrom = $('#contactform');
        myFrom.on('submit', function(e) {
            e.preventDefault();
            let formData = new FormData();
            formData.append("name", $('input[name="userName"]').val());
            formData.append("phone", $('input[name="userPhone"]').val());
            formData.append("mail",$('input[name="userMail"]').val());
            formData.append("message", $('textarea[name="userComment"]').val());
            $.ajax({
                url: "./form.php",
                type: "POST",
                dataType: "json",
                cache: false,
                contentType: false,
                processData: false,
                data: formData,
                success: function (data) {
                    if (data.ok == "Y") {
                        $("#contactform")[0].reset();
                        $("#myModal").css("display", "none");
                        $("#info-banner").css("display", "block");
                        $("#result").css("display", "block");
                        if ($("#contactform").hasClass("en")) {
                            $("#result").text("Your mail has been sent for our managers!");
                        } else {
                            $("#result").text("Ваше письмо было отправлено нашим менеджерам!");
                        }
                        setTimeout(function () {
                            $("#info-banner").hide();
                        }, 3000);
                    } else {
                        $("#info-banner").css("display", "block");
                        $("#info-banner").addClass("warning");
                        if ($("#contactform").hasClass("en")) {
                            $("#result").text("An error has occurred! Please try again later.");
                        } else {
                            $("#result").text("Произошла ошибка! Пожалуйста, повторите попытку позже.");
                        }
                        setTimeout(function () {
                            $("#info-banner").hide();
                        }, 3000);
                    }
                },
                error: function (data) {
                    console.log(data);
                },
            });
            // Prevents default submission of the form after clicking on the submit button.
            return false;
        });

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

});