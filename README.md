# Top 40 API

Simple JavaScript API for BBC Top 40 Charts (11 different charts!)

Basic useful feature list:

 * Receive info from more than 10 different charts!
 * Get track info easily
 * Returns Array if you request full list or
 * Returns String if you request info for a single track

## Setup

Download the [top40.js](http://raw.githubusercontent.com/chiraggalaiya/Top-40-API/master/top40.js) file and add the following code to your HTML file's HEAD tag:

```html
<script src="top40.js"></script>
```

## Initializing API

Add the following code to your javascript:
```javascript
var top40 = new top40([type]);
```
The *type* parameter is OPTIONAL and is for the *type* of chart. The default is `singles`. Other options are:

 * `singles`
 * `albums`
 * `dancesingles`
 * `dancealbums`
 * `indiesingles`
 * `indiealbums`
 * `rnbalbums`
 * `rnbsingles`
 * `rocksingles`
 * `rockalbums`
 * `compilationalbums`

## Methods
All methods are listed below:
 * [`top40.getTitles()`](#getTitles)
 * [`top40.getTitle(position)`](#getTitle)
 * [`top40.getArtists()`](#getArtists)
 * [`top40.getArtist(position)`](#getArtist)
 * [`top40.getWeeksInChart()`](#getWeeksInChart)
 * [`top40.getWeekInChart(position)`](#getWeekInChart)
 * [`top40.getStates()`](#getStates)
 * [`top40.getState(position)`](#getState)
 * [`top40.getAlbumCovers()`](#getAlbumCovers)
 * [`top40.getAlbumCover(position)`](#getAlbumCover)
 * [`top40.getMovements()`](#getMovements)
 * [`top40.getMovement(position)`](#getMovement)

## getTitles
This function will return an *array* which will contain all 40 titles (array[0] = 1st title, array[39] = 40th title)

Example:
```javascript
var top40 = new top40(); // Initialize API
var titles = top40.getTitles(); // Store Array in Variable
console.log(titles[0]); // Logs 1st  Track's Title
console.log(titles[39]); // Logs 40th  Track's Title
```
## getTitle
This function will return a *string* which will contain the given track's title
```javascript
var title = new top40().getTitle(position); // 'position' is an Integer (1 to 40 inclusive)
```

Example:
```javascript
var top40 = new top40(); // Initialize API
var title = top40.getTitle(19); // Store String in Variable
console.log(title); // Logs 20th Track's Title
```
## getArtists
This function will return an *array* which will contain all 40 artists (array[0] = 1st artist, array[39] = 40th artist)

Example:
```javascript
var top40 = new top40(); // Initialize API
var artists = top40.getArtists(); // Store Array in Variable
console.log(artists[0]); // Logs 1st  Track's Artist
console.log(artists[39]); // Logs 40th  Track's Artist
```
## getArtist
This function will return a *string* which will contain the given track's artist
```javascript
var artist = new top40().getArtist(position); // 'position' is an Integer (1 to 40 inclusive)
```

Example:
```javascript
var top40 = new top40(); // Initialize API
var artist = top40.getArtist(19); // Store String in Variable
console.log(artist); // Logs 20th Track's Artist
```
## getWeeksInChart
This function will return an *array* which will contain all 40 track's number of weeks in the chart (array[0] = 1st track's number of weeks in chart, array[39] = 40th track's number of weeks in chart)

Example:
```javascript
var top40 = new top40(); // Initialize API
var weeksInChart = top40.getWeeksInChart(); // Store Array in Variable
console.log(weeksInChart[0]); // Logs 1st Track's Number Of Weeks In Chart
console.log(weeksInChart[39]); // Logs 40th Track's Number Of Weeks In Chart
```
## getWeekInChart
This function will return a *string* which will contain the given track's number of weeks in chart
```javascript
var weekInChart = new top40().getWeekInChart(position); // 'position' is an Integer (1 to 40 inclusive)
```

Example:
```javascript
var top40 = new top40(); // Initialize API
var weekInChart = top40.getWeekInChart(19); // Store String in Variable
console.log(weekInChart); // Logs 20th Track's Number Of Weeks In Chart
```
## getStates
This function will return an *array* which will contain all 40 track states - Either 'NON-MOVER', 'NEW', 'UP [number]' or 'DOWN [number]' - (array[0] = 1st track's state, array[39] = 40th track's state)

Example:
```javascript
var top40 = new top40(); // Initialize API
var states = top40.getStates(); // Store Array in Variable
console.log(states[0]); // Logs 1st Track's State
console.log(states[39]); // Logs 40th Track's State
```
## getState
This function will return a *string* which will contain the given track's state - Either 'NON-MOVER', 'NEW', 'UP [number]' or 'DOWN [number]'
```javascript
var state = new top40().getState(position); // 'position' is an Integer (1 to 40 inclusive)
```

Example:
```javascript
var top40 = new top40(); // Initialize API
var state = top40.getState(19); // Store String in Variable
console.log(state); // Logs 20th Track's State
```
## getAlbumCovers
This function will return an *array* which will contain all 40 track's album covers - Link To JPEG Image - (array[0] = 1st track's album cover, array[39] = 40th track's album cover) - NOT ALL SIZES ARE THE SAME

Example:
```javascript
var top40 = new top40(); // Initialize API
var albumCovers = top40.getAlbumCovers(); // Store Array in Variable
console.log(albumCovers[0]); // Logs 1st Track's Album Cover
console.log(albumCovers[39]); // Logs 40th Track's Album Cover
```
## getAlbumCover
This function will return a *string* which will contain the given track's album cover - Link To JPEG Image
```javascript
var albumCover = new top40().getAlbumCover(position); // 'position' is an Integer (1 to 40 inclusive)
```

Example:
```javascript
var top40 = new top40(); // Initialize API
var albumCover = top40.getAlbumCover(19); // Store String in Variable
console.log(albumCover); // Logs 20th Track's Album Cover
```
## getMovements
This function will return an *array* which will contain all 40 track's movement - to indicate weather track has moved up, down, not moved or is new - (array[0] = 1st track's movement, array[39] = 40th track's movement) - YOU CAN CHANGE RESULTS FROM `top40_config` VARIABLE FOUND AT THE TOP OF `top40.js`

Example:
```javascript
var top40 = new top40(); // Initialize API
var movement = top40.getMovements(); // Store Array in Variable
console.log(movement[0]); // Logs 1st Track's Movement
console.log(movement[39]); // Logs 40th Track's Movement
```
## getMovement
This function will return a *string* which will contain the given track's album cover - to indicate weather track has moved up, down, not moved or is new - YOU CAN CHANGE RESULTS FROM `top40_config` VARIABLE FOUND AT THE TOP OF `top40.js`
```javascript
var movement = new top40().getMovement(position); // 'position' is an Integer (1 to 40 inclusive)
```

Example:
```javascript
var top40 = new top40(); // Initialize API
var movement = top40.getMovements(19); // Store String in Variable
console.log(movement); // Logs 20th Track's Movement
```
## Contact Me
You can all contact me at `chiraggalaiya@outlook.com`. Please contact me if you find bugs or glitches. Thank You.