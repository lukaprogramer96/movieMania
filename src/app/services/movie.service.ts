import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
public year: boolean = false;
public rating: boolean = false;

  constructor(private http: HttpClient) { }

getMovie() {
  return this.http.get("http://localhost:3000/api/movies").pipe(map(response => {return response;
}))
}

getMovieDetails(MId: any) {
  return this.http.get("http://localhost:3000/api/movies/"+MId).pipe(map(response => {return response;
}))
}

getMovieGenre() {
  return this.http.get("http://localhost:3000/api/genres").pipe(map(response => {return response;

  }))
}

saveMovie(movieObject: any) {
  return this.http.post('http://localhost:3000/api/movies/:movieId', movieObject).pipe(map(response => {return response;
}))
}

// // putMovie() {
// //   return this.http.put('http://localhost:3000/api/movies/'+obj._id, obj).pipe(map(response => {return response; 
// // }))
// }

}
