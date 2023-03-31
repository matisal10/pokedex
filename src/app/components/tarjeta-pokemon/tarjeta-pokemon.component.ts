import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { Result } from '../../interfaces/pokeapi';
import { PokemonService } from '../../services/pokemon.service';
import { IPokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-tarjeta-pokemon',
  templateUrl: './tarjeta-pokemon.component.html',
  styleUrls: ['./tarjeta-pokemon.component.scss']
})
export class TarjetaPokemonComponent implements OnChanges {

  @Input() data?:Result;
  @Output() clicked = new EventEmitter<string>(); 
  @Input() select:boolean = false;
  @Input() fullFata?: IPokemon
  id: string = '0'

  constructor(private PokemonService: PokemonService) { }

  ngOnChanges(): void {
    this.extraerInfo()
  }

  extraerInfo(){
    if(this.data && this.data.url !== ""){
      this.id = this.data.url.substring(34,this.data.url.length-1)
      return
    }
    if(this.fullFata){
      this.id = this.fullFata.species.url.substring(42,this.fullFata.species.url.length-1)
      this.data = {
        name : this.fullFata.species.name,
        url: ''
      }
    }
  }

}
