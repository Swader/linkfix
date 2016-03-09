chrome.extension.sendMessage({}, function(response) {});

var button = $('<button>Copy</button>');
$(button).css('position', 'absolute').css('top', '0').css('left', '0');
$(button).on('click', copyLink);
$('h3.r').css('padding-left', '50px').prepend(button);

function copyLink(event) {
    var link = $(event.currentTarget).parent().find('a').attr('href');
    copyTextToClipboard(link);
}

function copyTextToClipboard(text) {
    var copyFrom = document.createElement("textarea");
    copyFrom.textContent = text;
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    body.removeChild(copyFrom);
}