import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Dog } from '../shared/models/dog.model';

@Injectable()
export class DogService {

  constructor(private http: HttpClient) { }

  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>('/api/dogs');
  }

  countDogs(): Observable<number> {
    return this.http.get<number>('/api/dogs/count');
  }

  addDog(dog: Dog): Observable<Dog> {
    return this.http.post<Dog>('/api/dog', dog);
  }

  getDog(dog: Dog): Observable<Dog> {
    return this.http.get<Dog>(`/api/dog/${dog._id}`);
  }

  editDog(dog: Dog): Observable<string> {
    return this.http.put(`/api/dog/${dog._id}`, dog, { responseType: 'text' });
  }

  deleteDog(dog: Dog): Observable<string> {
    return this.http.delete(`/api/dog/${dog._id}`, { responseType: 'text' });
  }

}
