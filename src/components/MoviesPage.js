import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const { path } = useRouteMatch();

  return (
    <div>
      <h1>Movies</h1>
      <MoviesList movies={movies} />
      <Switch>
        <Route exact path={path}>
          <h3>Please select a movie from the list.</h3>
        </Route>
        <Route path={`${path}/:movieId`}>
          <MovieShow movies={movies} />
        </Route>
      </Switch>
    </div>
  );
}

export default MoviesPage;

