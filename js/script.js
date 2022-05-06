// How to request data from an API using javaScript and jQuery

// There are many ways to do this!
// 1. jQuerys $.ajax() function
// 2. The Browser's fetch() function 
// 3. Using the Axios hhtp client library
const URL = 'http://www.omdbapi.com/?apikey=a71b148a&t=Die+Hard';

$.ajax(URL).then(function() {
    console.log('movie data is ready');
    console.log(data);
});