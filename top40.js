/*

Top 40 API Developed And Built By Chirag Galaiya From http://chiragalaiya.uk/

Top 40 Lists From BBC Radio 1

Documentation : https://github.com/chiraggalaiya/Top-40-API/blob/master/README.md

*/



// DO NOT DELETE
var top40_config = [
    'true', // Console Log Errors - 'true' to Console Log  or  'false' to Not Console Log
    'upper', // State Result - Upper or Lower Case ('upper' for UPPER CASE  or  'lower' for lower case)
    'new', // Movement Result For Newly Added Song
    'up', // Movement Result For Song Which Has Moved Up
    'down', // Movement Result For Song Which Has Moved Down
    'non-mover' // Movement Result For Song Which Has Not Moved
];



function top40(type) {
    if (typeof type === 'undefined') { type = 'singles'; }
    if (type=='singles'||type=='albums'||type=='dancesingles'||type=='dancealbums'||type=='indiesingles'||type=='indiealbums'||type=='rnbalbums'||type=='rnbsingles'||type=='rocksingles'||type=='rockalbums'||type=='compilationalbums') {
        this.getTitles = getTitles,
        this.getTitle = getTitle,
        this.getArtists = getArtists,
        this.getArtist = getArtist,
        this.getWeeksInChart = getWeeksInChart,
        this.getWeekInChart = getWeekInChart,
        this.getStates = getStates,
        this.getState = getState,
        this.getAlbumCovers = getAlbumCovers,
        this.getAlbumCover = getAlbumCover,
        this.getMovements = getMovements,
        this.getMovement = getMovement;
        
        if (typeof top40_config == 'undefined') {
            top40_config = ['true', 'upper', 'new', 'up', 'down', 'non-mover']; // BACKUP - DO NOT DELETE
        }
        
        xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "http://www.bbc.co.uk/radio1/chart/" + type, false );
        xmlHttp.send( null );
        data = xmlHttp.responseText;

        function getTitles() {
            var titles = [];
            var temp = data.split('<div class="cht-entry-title">');
            for (var i = 1; i < temp.length; i++) {
                var temp1 = temp[i].split("</div>")[0].trim();
                titles.push(temp1);
            }
            return titles;
        }

        function getTitle(position) {
            var temp = data.split('<div class="cht-entry-title">');
            if (position > 0 && position < 41) {
                var title = temp[position].split("</div>")[0].trim();
            } else {
                var title = "'position' parameter invalid [getTitle(position)]. Please see documentation for more info.";
                if (top40_config[0] == 'true') {
                    console.log(title);
                }
            }
            return title;
        }

        function getArtists() {
            var artists = [];
            var temp = data.split('<div class="cht-entry-artist">');
            for (var i = 1; i < temp.length; i++) {
                var temp1 = temp[i].split("</a>")[0].trim().split('">')[1].trim();
                artists.push(temp1);
            }
            return artists;
        }

        function getArtist(position) {
            var temp = data.split('<div class="cht-entry-artist">');
            if (position > 0 && position < 41) {
                var artist = temp[position].split("</a>")[0].trim().split('">')[1].trim();
            } else {
                var artist = "'position' parameter invalid [getArtist(position)]. Please see documentation for more info.";
                if (top40_config[0] == 'true') {
                    console.log(artist);
                }
            }
            return artist;
        }

        function getWeeksInChart() {
            var weeksInChart = [];
            var temp = data.split('<div class="cht-entry-status">');
            for (var i = 1; i < temp.length; i++) {
                var temp1 = temp[i].split("</div>")[0].trim().toUpperCase().split("|")[1].split("W")[0].trim();
                weeksInChart.push(temp1);

            }
            return weeksInChart;
        }

        function getWeekInChart(position) {
            var temp = data.split('<div class="cht-entry-status">');
            if (position > 0 && position < 41) {
                var weekInChart = temp[position].split("</div>")[0].trim().toUpperCase().split("|")[1].split("W")[0].trim();
            } else {
                var weekInChart = "'position' parameter invalid [getWeekInChart(position)]. Please see documentation for more info.";
                if (top40_config[0] == 'true') {
                    console.log(weekInChart);
                }
            }
            return weekInChart;
        }

        function getStates() {
            var states = [];
            var temp = data.split('<div class="cht-entry-status">');
            for (var i = 1; i < temp.length; i++) {
                if (top40_config[1] == 'lower') {
                    var temp1 = temp[i].split("</div>")[0].trim().toLowerCase().split("|")[0].trim();
                } else {
                    var temp1 = temp[i].split("</div>")[0].trim().toUpperCase().split("|")[0].trim();
                }
                states.push(temp1);

            }
            return states;
        }

        function getState(position) {
            var temp = data.split('<div class="cht-entry-status">');
            if (position > 0 && position < 41) {
                if (top40_config[1] == 'lower') {
                    var state = temp[position].split("</div>")[0].trim().toLowerCase().split("|")[0].trim();
                } else {
                    var state = temp[position].split("</div>")[0].trim().toUpperCase().split("|")[0].trim();
                }
            } else {
                var state = "'position' parameter invalid [getState(position)]. Please see documentation for more info.";
                if (top40_config[0] == 'true') {
                    console.log(state);
                }
            }
            return state;
        }

        function getAlbumCovers(response) {
            var albumCovers = [];
            var temp = data.split('<img class="cht-entry-image"');
            for (var i = 1; i < temp.length; i++) {
                var temp1 = temp[i].split('alt="')[0].trim().split('src="')[1].split('"')[0].trim();
                albumCovers.push(temp1);
            }
            return albumCovers;
        }

        function getAlbumCover(position) {
            var temp = data.split('<img class="cht-entry-image"');
            if (position > 0 && position < 41) {
                var albumCover = temp[position].split('alt="')[0].trim().split('src="')[1].split('"')[0].trim();
            } else {
                var albumCover = "'position' parameter invalid [getAlbumCover(position)]. Please see documentation for more info.";
                if (top40_config[0] == 'true') {
                    console.log(albumCover);
                }
            }
            return albumCover;
        }

        function getMovements() {
            var movementImgs = [];
            var temp = data.split('<img class="cht-entry-movement-image"');
            for (var i = 1; i < temp.length; i++) {
                if (temp[i].split('" />')[0].trim().split('src="')[1].trim() == "http://static.bbci.co.uk/radio/66/1.68/img/icons/chart_nonmover.png") {
                    var temp1 = top40_config[5];
                } else if (temp[i].split('" />')[0].trim().split('src="')[1].trim() == "http://static.bbci.co.uk/radio/66/1.68/img/icons/chart_down.png") {
                    var temp1 = top40_config[4];
                } else if (temp[i].split('" />')[0].trim().split('src="')[1].trim() == "http://static.bbci.co.uk/radio/66/1.68/img/icons/chart_up.png") {
                    var temp1 = top40_config[3];
                } else {
                    var temp1 = top40_config[2];
                }
                movementImgs.push(temp1);
            }
            return movementImgs;
        }

        function getMovement(position) {
            var temp = data.split('<img class="cht-entry-movement-image"');
            if (position > 0 && position < 41) {
                if (temp[position].split('" />')[0].trim().split('src="')[1].trim() == "http://static.bbci.co.uk/radio/66/1.68/img/icons/chart_nonmover.png") {
                    var movement = top40_config[5];
                } else if (temp[position].split('" />')[0].trim().split('src="')[1].trim() == "http://static.bbci.co.uk/radio/66/1.68/img/icons/chart_down.png") {
                    var movement = top40_config[4];
                } else if (temp[position].split('" />')[0].trim().split('src="')[1].trim() == "http://static.bbci.co.uk/radio/66/1.68/img/icons/chart_up.png") {
                    var movement = top40_config[3];
                } else {
                    var movement = top40_config[2];
                }
            } else {
                var movement = "'position' parameter invalid [getAlbumCover(position)]. Please see documentation for more info.";
                if (top40_config[0] == 'true') {
                    console.log(movement);
                }
            }
            return movement;
        }
    } else {
        this.getTitles = alertError,
        this.getTitle = alertError,
        this.getArtists = alertError,
        this.getArtist = alertError,
        this.getWeeksInChart = alertError,
        this.getWeekInChart = alertError,
        this.getStates = alertError,
        this.getState = alertError,
        this.getAlbumCovers = alertError,
        this.getAlbumCover = alertError,
        this.getMovements = alertError,
        this.getMovement = alertError;
        if (top40_config[0] == 'true') {
            console.log("'type' parameter is invalid. Please see documentation for valid parameters.");
        }
        console.log("'type' parameter is invalid. Please see documentation for valid parameters.");
        
        function alertError() {
            if (top40_config[0] == 'true') {
                console.log("'type' parameter is invalid. Please see documentation for valid parameters.");
            }
        }
    }
}