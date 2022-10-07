'use strict'
console.log("hej");
class MOVIE {
    movieurlData = 'http://localhost:8080/api/v1/movies';

    constructor(data) {
        this.data = data;
        this.fetchData();
    }

    async fetchData(){
        let response = await fetch(this.movieurlData);
        this.data = await response.json();
        this.showUI();
        this.setMovieData(1);
    };

    showUI(){
        $('#movie').text(this.data.movie);
    }

    setMovieData(index) {
        let entry = this.data[index];
        $("#movie-title").text(entry.title);
        $("#movie-movieGenre").text(entry.movieGenre);
        $("#movie-playTime").text(entry.playTime);
        $("#movie-pgrating").text(entry.pgrating);
        $("#movie-data").show();
    }
}
var movie = new MOVIE();