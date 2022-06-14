(function () {
    $(`.btn`).not('.btn-zoom').on('click', (e) => {
        const state = $(e.target).data('is_show');
        if (state) {
            $(e.target).siblings().hide().removeClass('d-flex');
        } else {
            $(e.target).siblings().show().addClass('d-flex');
        }
        $(e.target).data('is_show', !state)
    })
})();
