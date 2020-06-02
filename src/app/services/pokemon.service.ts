import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemon: any[] = [];

  constructor(private http: HttpClient) { }

  getQuery(query: string){
    const url = `https://pokeapi.co/api/v2/${query}`;
    return this.http.get(url);
  }
  getAllPokemon(){
    return this.getQuery('pokemon/?limit=20&offset=0.').pipe( map( (data: any) => {
      for ( let i = 1; i <= data.results.length; i++){
        this.getQuery(`pokemon/${i}`).subscribe( (dt: any[]) => {
          this.pokemon.push(dt);
        });
      }
      return this.pokemon;
    }));
  }

  getPokemon(idx: number){
    return this.getQuery(`pokemon/${idx}`).pipe( map( (data: any) => {
      return data;
    }));
  }
}
