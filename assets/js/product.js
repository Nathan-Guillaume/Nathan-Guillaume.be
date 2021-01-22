$(function() {
    $("video").click(function() {
        this.volume = 0.1;

        if (this.paused) {
            this.currentTime = 0;
            $(this).trigger('play');
        } else {
            this.currentTime = 0;
            $(this).trigger('pause');
        }
    });

    $("#see-other").click(function () {
        $("video").each(function (_, video) {
            if (!video.paused) {
                video.currentTime = 0;
                $(video).trigger('pause');
            }
            if($(video).is(':hidden')) $(video).show();
            else $(video).hide();
        });
    });
});
