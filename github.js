function initGitHub() {
    var href = '';
    $('a').each(function(key, element) {
        href = $(element).attr('href');
        if (
            href !== undefined &&
            href.match('https://circleci.com/') &&
            !href.match('fullLogs=true')
        ) {
            $(element).attr('href', href + '&fullLogs=true');
        }
    });
}

$(document).ready(function() {
    $('div.commit-ci-status summary').click(function(t) {
        setTimeout(initGitHub, 500);
    });
});
