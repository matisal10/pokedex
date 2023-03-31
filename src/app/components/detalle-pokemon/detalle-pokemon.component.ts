import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { IPokemon } from '../../interfaces/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-detalle-pokemon',
  templateUrl: './detalle-pokemon.component.html',
  styleUrls: ['./detalle-pokemon.component.scss']
})
export class DetallePokemonComponent implements OnChanges {

  @Input() pokemon?: IPokemon
  @Input() abierto: boolean = false
  @Output() close= new EventEmitter();

  descripcion: string = '' 

  constructor(private PokemonService: PokemonService) { }

  ngOnChanges(): void {
    if(this.pokemon?.id){
      this.PokemonService.getDescription(this.pokemon.id).then( res =>{
      this.descripcion = res
    })
    }
    
  }

}
