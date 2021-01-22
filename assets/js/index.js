$(document).ready(function () {
    $("#switch_lang").click(function () {
        const lang_now = document.cookie.match(/lang=[a-zA-Z]+/g);
        const lang_after = lang_now[0].toLowerCase() === 'lang=fr' ? 'en' : 'fr';
        Cookies.set('lang', lang_after);
        $("body").load(window.location.href);
    });
});