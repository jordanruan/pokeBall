import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/servicos/pokemon.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons = []

  constructor(public pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.inserirPokemons()
  }

  async inserirPokemons() {
    this.pokemonService.pegarPokemon().subscribe({
      next: (res)=> {this.pokemons = res.results},
      error: (err) => console.error(err),
      complete: () => console.log('Pokebola sucess')
    })

  }


}

