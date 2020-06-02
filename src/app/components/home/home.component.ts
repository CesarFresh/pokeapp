import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';
import { Sort } from '../../pipes/sort.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
  pokemonArray: any[] = [];
  sortArray: any[] = [];

  constructor( private pokemon: PokemonService, private router: Router, private sortPipe: Sort) {
    this.getPokemon();
  }

  ngOnInit(): void {
  }
  getPokemon(){
    if ( this.pokemonArray.length == 0 || this.pokemonArray == undefined){
      this.pokemon.getAllPokemon().subscribe( (value: any) => { 
        this.pokemonArray = value;
      }, (error: any) => {
        console.log(error);
      }, () => {
        this.getSort();
        console.log(this.pokemonArray);
      }
      );
    }
  }
  getSort(){
    this.pokemonArray.sort((val1, val2)=>{ return (val1.id) -  (val2.id)});
  }
  verDetalle(idx: number){
    this.router.navigate(['detalle', idx]);
  }

}
