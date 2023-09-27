import { Component, OnInit } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';
import { Observable } from 'rxjs';
import { MoviesDto } from 'src/app/modules/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  showsList$: Observable<MoviesDto> | null = null;
  searchValue = '';

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getPagedShows(1);
  }

  getPagedShows(page: number, searchKeyword?: string) {
    this.showsList$ = this.moviesService.searchMovies(page, searchKeyword);
  }

  searchChanged() {
    this.getPagedShows(1, this.searchValue);
  }

  pageChanged(event: PaginatorState) {
    const pageNumber = event.page ? event.page + 1 : 1;
    this.getPagedShows(pageNumber, this.searchValue);
  }
}
