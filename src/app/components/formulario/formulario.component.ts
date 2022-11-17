import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() parametrosSeleccionados = new EventEmitter<any>();

  categoriaSeleccionada = 'business';
  paisSeleccionado = 'ar';

  categorias: any[]= [
    {value: 'business', nombre: 'Negocios'},
    {value: 'entretaiment', nombre: 'Entretenimiento'},
    {value: 'general', nombre: 'General'},
    {value: 'health', nombre: 'Salud'},
    {value: 'science', nombre: 'Ciencia'},
    {value: 'sports', nombre: 'Deportes'},
    {value: 'technology', nombre: 'Tecnología'}
  ];

  paises: any[]= [
    {value: 'ar', nombre: 'Argentina'},
    {value: 'br', nombre: 'Brazil'},
    {value: 'ca', nombre: 'Canada'},
    {value: 'jp', nombre: 'Japan'},
    {value: 'mx', nombre: 'Mexico'},
    {value: 'nz', nombre: 'New Zealand'},
    {value: 'ua', nombre: 'Ukraine'},
    {value: 'gb', nombre: 'United Kingdom'},
    {value: 'us', nombre: 'United States'},
    {value: 've', nombre: 'Venezuela'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticia(){
    // console.log(this.categoriaSeleccionada);
    // console.log(this.paisSeleccionado);
    const PARAMETROS= {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }
    this.parametrosSeleccionados.emit(PARAMETROS);

  }

}
