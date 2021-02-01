$('.select').each(function() {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 450;  

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
        if ( !$(this).hasClass('on') ) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function() {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text( $(this).find('span').text() );

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });
});

$(window).scroll(function(){
    $('.header').addClass('header-has-background', $(this).scrollTop() > 0);
    if ($(this).scrollTop() == 0){
        $('.header').removeClass('header-has-background');
    }
});

jQuery('a[href^="#main"]').click( function(){
    var scroll_el = jQuery(this).attr('href');
    var destination = jQuery(scroll_el).offset().top;
    if (jQuery(scroll_el).length != 0) {
        jQuery('html, body').animate( { scrollTop: destination }, 1100 );
    }
    return false;
});


jQuery('a[href^="#about"]').click( function(){
    var scroll_el = jQuery(this).attr('href');
    var destination = jQuery(scroll_el).offset().top;
    if (jQuery(scroll_el).length != 0) {
        jQuery('html, body').animate( { scrollTop: destination }, 1100 );
    }
    return false;
});

jQuery('a[href^="#catalog"]').click( function(){
    var scroll_el = jQuery(this).attr('href');
    var destination = jQuery(scroll_el).offset().top;
    if (jQuery(scroll_el).length != 0) {
        jQuery('html, body').animate( { scrollTop: destination }, 1100 );
    }
    return false;
});

jQuery('a[href^="#examples"]').click( function(){
    var scroll_el = jQuery(this).attr('href');
    var destination = jQuery(scroll_el).offset().top;
    if (jQuery(scroll_el).length != 0) {
        jQuery('html, body').animate( { scrollTop: destination }, 1100 );
    }
    return false;
});

jQuery('a[href^="#price"]').click( function(){
    var scroll_el = jQuery(this).attr('href');
    var destination = jQuery(scroll_el).offset().top;
    if (jQuery(scroll_el).length != 0) {
        jQuery('html, body').animate( { scrollTop: destination }, 1100 );
    }
    return false;
});

jQuery('a[href^="#contacts"]').click( function(){
    var scroll_el = jQuery(this).attr('href');
    var destination = jQuery(scroll_el).offset().top;
    if (jQuery(scroll_el).length != 0) {
        jQuery('html, body').animate( { scrollTop: destination }, 1100 );
    }
    return false;
});

