import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  pokemon: any = {};
  moves:   any[] = [];
  constructor( private pokemonDetalle: PokemonService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe((params: any) => {
      this.pokemonDetalle.getPokemon(params['id']).subscribe((data: any) => {
        this.pokemon = data;
        this.moves = data.moves;
        console.log(this.moves);
      });
    })
   }

  ngOnInit(): void {
  }

}
