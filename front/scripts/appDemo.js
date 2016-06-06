'use strict';

(function() {
    /* enable tooltips */
    $('[data-toggle="tooltip"]').tooltip({
        container: 'body',
        delay: {
            show: 200,
            hide: 0
        }
    });

    /* enable masks */
    $(':input').inputmask();

    /* select2 things */
    $('.select2').select2({
        minimumResultsForSearch: 6
    });

    /* expandable rows */
    $('table[data-pl-expandable-rows] > tbody > tr').on('click', function() {
        var val = $(this).attr('aria-expanded') === 'true';
        $(this).attr('aria-expanded', !val);
        $(this).next('tr[data-pl-detail-row]').toggle();
    });

    /* container switch */
    function fixedContainer() {
        $('[data-toggle="tooltip"]').tooltip('hide');
        $('header .container-fluid, main').addClass('container').removeClass('container-fluid');
        $('#chk-container').prop('checked', false);
    }

    function fluidContainer() {
        $('[data-toggle="tooltip"]').tooltip('hide');
        $('header .container, main').addClass('container-fluid').removeClass('container');
        $('#chk-container').prop('checked', true);
    }

    $('.btn-fixed').click(fixedContainer);
    $('.btn-fluid').click(fluidContainer);

    $('#chk-container').click(function() {
        if (this.checked) {
            fluidContainer();
        } else {
            fixedContainer();
        }
    });

    /* Create Account terms agreement checkbox */
    $('#chk-agree').click(function() {
        $('.btn-primary').attr('disabled', !this.checked);
    });

    /* Create Account terms agreement button */
    $('.form-createAcct').find('.btn-primary').click(function() {
        location.href = 'createAcct-step2.html';
    });

    /* Create Account jump to error field */
    $('.link-errField').click(function(e) {
        var id = $(this).attr('href');

        e.preventDefault();
        $(id).focus();
    });

    /* Settings modal responsive tabs */
    function resizeTabNav() {

        if (window.matchMedia('(min-width: 640px)').matches) {
            $('.tabs-responsive')
                .find('.dropdown-menu')
                .toggleClass('dropdown-menu nav nav-tabs')
                .end()
                .find('.btn').addClass('hide');
        } else {
            $('.tabs-responsive')
                .find('.nav-tabs')
                .toggleClass('dropdown-menu nav nav-tabs')
                .end().find('.btn').removeClass('hide');
        }
    }

    function resizedWindow() {

        var windowWidth = $(window).width();

        window.onresize = function() {

            if ($(window).width() !== windowWidth) {
                windowWidth = $(window).width();
                resizeTabNav();
            }

        };
    }

    if ($('#modal-appSettings').length > 0) {
        resizeTabNav();
        resizedWindow();
    }
})();
