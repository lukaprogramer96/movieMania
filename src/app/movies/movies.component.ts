import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnInit {
  public apiMovieList: any;
  public apiMovieDetails: any;
  public currentNumber: number = 0; 
  public endSlice: number = 6;
  public startSlice: number = 0;
  public size: number = 0;
  public orderFilter: string = 'asc';
  public sortFilter: string = 'year';
  

  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovie()
    
  }

  getMovie() {
    this.movieService.getMovie().subscribe((response: any) => {
      console.log(response);
      this.apiMovieList = response.results;
      this.size = Math.floor(this.apiMovieList.length / 6);
    })
  }

  

  displayForm() {
    console.log('kliknuo si')
  }

  nextButton() {
    //uzimam vrednost najvecu za indexe liste
    this.size = Math.floor(this.apiMovieList.length / 6);
    if(this.currentNumber <  this.size) {
      this.currentNumber = this.currentNumber +1;
      this.changeList();
    }
  }

  prevButton() {
    if(this.currentNumber > 0) {
      this.currentNumber = this.currentNumber -1;
    this.changeList();
    
    }
    
  }

  changeList() {
    this.startSlice = 6 * this.currentNumber;
    this.endSlice = 6 * (this.currentNumber+1);
  }
  
  sortBy(e: any) {
    this.sortFilter = e.target.value;
    if(this.sortFilter == 'year'){
      this.sortByYear()

    }
    else
    this.sortByRating()

    console.log(e.target.value);
  }

  orderBy() {
    if(this.orderFilter == 'asc' ) {
      this.orderFilter = 'desc';
    }
    else if(this.orderFilter = 'desc') {
      this.orderFilter = 'asc';
    }
    if(this.sortFilter == 'year') {
      this.sortByYear()
    }
    else if(this.sortFilter == 'rating') {
      this.sortByRating()
    }
  }

  sortByRating() {
    if(this.orderFilter == 'asc') {
      this.apiMovieList.sort((a: { rating: number; }, b: { rating: number; }) => {
      return a.rating - b.rating;
      
      });
     } else if (this.orderFilter = 'desc') {
      this.apiMovieList.sort((a: { rating: number; }, b: { rating: number; }) => {
        return b.rating - a.rating;
      
      
      });
     }
    
  }

  sortByYear() {
    if(this.orderFilter == 'asc') {
      this.apiMovieList.sort((a: { year: number; }, b: { year: number; }) => {
      
        return a.year - b.year;
      });
     } else if (this.orderFilter = 'desc') {
      this.apiMovieList.sort((a: { year: number; }, b: { year: number; }) => {
      
        return b.year - a.year;
      });
     }
    
  }

}
