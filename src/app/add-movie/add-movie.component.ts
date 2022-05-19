import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { FormControl, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  public apiMovieDetails: any; 
  public MId: number = 0;
  public movie: any;
  public closeResult: any;
  movieForm = new FormGroup({
    movieName: new FormControl('', [Validators.required]),
    movieDescription: new FormControl('', [Validators.required, Validators.minLength(30), Validators.maxLength(250)]),
    movieYear: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
    movieRating: new FormControl(''),
    movieDuration: new FormControl(''),
    movieDirector: new FormControl(''),
    movieGenre: new FormControl('')
  })

  constructor(public movieService: MovieService, public _activeRoutes: ActivatedRoute, public router: Router, config:NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit(): void {
    
    this.MId = this._activeRoutes.snapshot.params['id'];
    console.log(this.MId);
    this.getMovieDetails(this.MId)
  }

    getMovieFormData(movie: any) {
      console.warn(movie);
    }

    updateMovie() {
      console.warn(this.movieForm.value);
    }

    get movieName() {
      return this.movieForm.get('movieName')
    }

    get movieDescription() {
      return this.movieForm.get('movieDescription')
    }

    get movieYear() {
      return this.movieForm.get('movieYear')
    }

    get movieRating() {
      return this.movieForm.get('movieRating')
    }

    get movieDuration() {
      return this.movieForm.get('movieDuration')
    }

    get movieDirector() {
      return this.movieForm.get('movieDirector')
    }

    get movieGenre() {
      return this.movieForm.get('movieRating')
    }

    save() {
      let movieObject: {
        _id: null,
        name: string,
        description: string,
        year: number,
        rating: number,
        duration: number,
        director: string,
        genre: string
      }
    }

  saveMovie(movieObject: any) {
    this.movieService.saveMovie(movieObject).subscribe((response: any) =>{
       console.log(response);
      // this.router.navigate('')
    })
  }

  getMovieDetails(MId: any) {
    this.movieService.getMovieDetails(MId).subscribe((response: any) =>{
      console.log(response);
      this.apiMovieDetails = response;
      //nakon napravljene forme pisem ovo:
      this.movieForm.patchValue({
        movieYear: this.apiMovieDetails.year,
        movieName: this.apiMovieDetails.name,
        movieDescription: this.apiMovieDetails.description,
        movieRating: this.apiMovieDetails.rating,
        movieDuration: this.apiMovieDetails.duration,
        movieDirector: this.apiMovieDetails.director,
        movieGenre: this.apiMovieDetails.genre
      });
    })
  }

  open(content: any) {
    this.modalService.open(content);
  }
}


