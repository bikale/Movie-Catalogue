import { Component } from "@angular/core";
import { Store } from "@ngrx/store";

import { Movie } from "../../types";
import * as movieListData from "../../static/movie-list.json";
import { setPageTitle } from "../../root.actions";
import { RootStore } from "../../types";

@Component({
  selector: "app-movie-page",
  templateUrl: "./movie-page.component.html",
  styleUrls: ["./movie-page.component.css"]
})
export class MoviePage {
  selectedMovie = movieListData[0];
  movieListData = movieListData;

  onMovieSelected(movie: Movie) {
    console.log(movie);
    this.selectedMovie = movie;
  }

  constructor(private store: Store<RootStore>) {}
}
