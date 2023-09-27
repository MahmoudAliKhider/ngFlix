import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginatorState } from 'primeng/paginator';
import { Observable, map } from 'rxjs';
import { MoviesDto } from 'src/app/modules/movie';
import { mapToMoviesDto } from 'src/app/modules/tvshows';
import { MoviesService } from 'src/app/services/movies.service';
import { TvshowsService } from 'src/app/services/tvshows.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  showsList$: Observable<MoviesDto> | null = null;
  searchValue = '';
  showsType: 'movie' | 'tv' = 'movie';

  constructor(
    private moviesService: MoviesService,
    private tvShowsService: TvshowsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.showsType = this.route.snapshot.params['type'];
    this.getPagedShows(this.showsType, 1);
  }

  getPagedShows(
    showsType: 'movie' | 'tv',
    page: number,
    searchKeyword?: string
  ) {
    if (showsType === 'movie') {
      this.showsList$ = this.moviesService.searchMovies(page, searchKeyword);
    }
    if (showsType === 'tv') {
      this.showsList$ = this.tvShowsService
        .searchTvShows(page, searchKeyword)
        .pipe(map(mapToMoviesDto));
    }
  }

  searchChanged() {
    this.getPagedShows(this.showsType, 1, this.searchValue);
  }

  pageChanged(event: PaginatorState) {
    const pageNumber = event.page ? event.page + 1 : 1;
    this.getPagedShows(this.showsType, pageNumber, this.searchValue);
  }
}
