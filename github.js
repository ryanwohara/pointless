
function initGitHub(){
        $('a').each(function(key, element) {
            if ($(element).attr('href').match('https:\/\/circleci.com\/')) {
                $(element).attr('href', $(this).attr('href') + '&fullLogs=true');
            }
        });
}

$(document).ready(function(){

	$(document).on('pjax:end', function (t) {
		initGitHub();
	});

});
