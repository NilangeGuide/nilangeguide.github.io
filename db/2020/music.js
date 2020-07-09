// Music Data for the year 2020

var $table = $('#table');
    var mydata = 
[
    {
        "id": 2,
        "name": "test2",
        "price": "$2"
    },
    {
        "id": 3,
        "name": "test3",
        "price": "$3"
    },
    {
        "star": "<a rel=\"tooltip\" title=\"Platinum Star\" data-placement = \"left\"><img src=\"certification/music/platinum-01.png\" width=\"40px;\" alt=\"Platinum Star\"></a>",
        "artist": "The Weeknd",
        "title": "Blinding Lights",
        "date": "10 July, 2020"
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
    }
];

$(function () {
    $('#table').bootstrapTable({
        data: mydata
    });
});