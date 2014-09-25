<script type="text/javascript">

var index = document.rss.rss.selectedIndex;
var value = document.rss.rss.options[index].value;

var FEED_URL = value;
var url = value;
var selct_title = index;

function TXP_RSS(FEED_URL, selct_title)
{
$.get(FEED_URL, function (data) {
$(data).find("entry").each(function () { // or "item" or whatever suits your feed
    var el = $(this);

    console.log("------------------------");
console.log("your selection" + selct_title);
    console.log("title      : " + el.find("title").text());
    console.log("author     : " + el.find("author").text());
    console.log("description: " + el.find("description").text());
});
});

parseRSS();
}


function parseRSS(url, callback) 
{
  $.ajax({
url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
dataType: 'json',
success: function(data) {
  callback(data.responseData.feed);
}
  });
}