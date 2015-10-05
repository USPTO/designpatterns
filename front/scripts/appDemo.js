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
        minimumResultsForSearch: 4
    });

    /* expandable rows */
    $('table[data-pl-expandable-rows] > tbody > tr').on('click', function() {
        var val = $(this).attr('aria-expanded') === 'true';
        $(this).attr('aria-expanded', !val);
        $(this).next('tr[data-pl-detail-row]').toggle();
    });

    /* container switch */
    $('.btn-fixed').click(function() {
        $('[data-toggle="tooltip"]').tooltip('hide');
        $('header .container-fluid, main').addClass('container').removeClass('container-fluid');
    });

    $('.btn-fluid').click(function() {
        $('[data-toggle="tooltip"]').tooltip('hide');
        $('header .container, main').addClass('container-fluid').removeClass('container');
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
            $('.nav-settings').find('.dropdown-menu').toggleClass('dropdown-menu nav nav-tabs');
            $('.nav-settings').find('.btn').addClass('hide');
        } else {
            $('.nav-settings').find('.nav-tabs').toggleClass('dropdown-menu nav nav-tabs');
            $('.nav-settings').find('.btn').removeClass('hide');
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
