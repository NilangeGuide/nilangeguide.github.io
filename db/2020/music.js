// Music Data for the year 2020

var $table = $('#table');
    var mydata = 
[
    {
        "star": "<a rel=\"tooltip\" title=\"Platinum Star\" data-placement = \"left\"><img src=\"certification/music/platinum-01.png\" width=\"40px;\" alt=\"Platinum Star\"></a>",
        "artist": "Lil Nas X",
        "title": "Old Town Road",
        "date": "15 October, 2020"
    },
	{
        "star": "<a rel=\"tooltip\" title=\"Platinum Star\" data-placement = \"left\"><img src=\"certification/music/platinum-01.png\" width=\"40px;\" alt=\"Platinum Star\"></a>",
        "artist": "Lewis Capaldi",
        "title": "Someone You Loved",
        "date": "15 July, 2020"
    },
	{
        "star": "<a rel=\"tooltip\" title=\"Gold Star\" data-placement = \"left\"><img src=\"certification/music/gold-01.png\" width=\"40px;\" alt=\"Gold Star\"></a>",
        "artist": "Ariana Grande, Justin Bieber",
        "title": "Stuck with U",
        "date": "15 July, 2020"
    },
	{
        "star": "<a rel=\"tooltip\" title=\"Gold Star\" data-placement = \"left\"><img src=\"certification/music/gold-01.png\" width=\"40px;\" alt=\"Gold Star\"></a>",
        "artist": "Dua Lipa",
        "title": "Don't Start Now",
        "date": "15 July, 2020"
    },
    {
        "star": "<a rel=\"tooltip\" title=\"Gold Star\" data-placement = \"left\"><img src=\"certification/music/gold-01.png\" width=\"40px;\" alt=\"Gold Star\"></a>",
        "artist": "Drake",
        "title": "Toosie Slide",
        "date": "15 July, 2020"
    },
    {
        "star": "<a rel=\"tooltip\" title=\"Gold Star\" data-placement = \"left\"><img src=\"certification/music/gold-01.png\" width=\"40px;\" alt=\"Gold Star\"></a>",
        "artist": "Tones And I",
        "title": "Dance Monkey",
        "date": "11 July, 2020"
    },
    {
        "star": "<a rel=\"tooltip\" title=\"Gold Star\" data-placement = \"left\"><img src=\"certification/music/gold-01.png\" width=\"40px;\" alt=\"Gold Star\"></a>",
        "artist": "Powfu",
        "title": "death bed (coffee for your head) ft. beabadoobee",
        "date": "10 July, 2020"
    },
    {
        "star": "<a rel=\"tooltip\" title=\"Gold Star\" data-placement = \"left\"><img src=\"certification/music/gold-01.png\" width=\"40px;\" alt=\"Gold Star\"></a>",
        "artist": "Harry Styles",
        "title": "Watermelon Sugar",
        "date": "10 July, 2020"
    },
    {
        "star": "<a rel=\"tooltip\" title=\"Gold Star\" data-placement = \"left\"><img src=\"certification/music/gold-01.png\" width=\"40px;\" alt=\"Gold Star\"></a>",
        "artist": "Saint Jhn",
        "title": "Roses - Imanbek Remix",
        "date": "10 July, 2020"
    },
    {
        "star": "<a rel=\"tooltip\" title=\"Gold Star\" data-placement = \"left\"><img src=\"certification/music/gold-01.png\" width=\"40px;\" alt=\"Gold Star\"></a>",
        "artist": "DaBaby, Roddy Ricch",
        "title": "Rockstar",
        "date": "10 July, 2020"
    },
    {
        "star": "<a rel=\"tooltip\" title=\"Platinum Star\" data-placement = \"left\"><img src=\"certification/music/platinum-01.png\" width=\"40px;\" alt=\"Platinum Star\"></a>",
        "artist": "The Weeknd",
        "title": "Blinding Lights",
        "date": "09 July, 2020"
    },
    {
        "star": "<a rel=\"tooltip\" title=\"Gold Star\" data-placement = \"left\"><img src=\"certification/music/gold-01.png\" width=\"40px;\" alt=\"Gold Star\"></a>",
        "artist": "The Weeknd",
        "title": "Blinding Lights",
        "date": "06 June, 2020"
    },
    {
        "star": "<a rel=\"tooltip\" title=\"Gold Star\" data-placement = \"left\"><img src=\"certification/music/gold-01.png\" width=\"40px;\" alt=\"Gold Star\"></a>",
        "artist": "Maroon 5",
        "title": "Memories",
        "date": "06 June, 2020"
    },
    {
        "star": "<a rel=\"tooltip\" title=\"Platinum Star\" data-placement = \"left\"><img src=\"certification/music/platinum-01.png\" width=\"40px;\" alt=\"Platinum Star\"></a>",
        "artist": "Maroon 5",
        "title": "Girls Like You (feat. Cardi B)",
        "date": "06 June, 2020"
    },
    {
        "star": "<a rel=\"tooltip\" title=\"Gold Star\" data-placement = \"left\"><img src=\"certification/music/gold-01.png\" width=\"40px;\" alt=\"Gold Star\"></a>",
        "artist": "Jon Pardi",
        "title": "Heatache On The Dance Floor",
        "date": "03 June, 2020"
    }
];

$(function () {
    $('#table').bootstrapTable({
        data: mydata
    });
});