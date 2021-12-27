import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  pokemon!:any

  @Input()
  numero!:number

  constructor() {

   }

/*  pegarImagemPokemon(){
  const numeroFormatado = this.leadingZero(this.numero)
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`
 }

 leadingZero(str:string | number, size= 3):string{


    let x = String(str)

    while(x.length< (3 || 2)){

      x = '0' + x
    }

    return x
 }
 */
 pegarImagemPokemon() {
    const numeroFormatado = String(this.numero).padStart(3, '0');

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`
  }
}
