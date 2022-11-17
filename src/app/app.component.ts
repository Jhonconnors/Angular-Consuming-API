import { Component } from '@angular/core';
import { NoticiasService } from './service/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listadoDeNoticias: any [] =[];
  loading: boolean = false;

  constructor(private _api: NoticiasService){

  }

  buscarNoticias(parametro: any){
    this.loading = true;

    this._api.getNoticias(parametro).subscribe(result => {
      console.log(result);
      this.listadoDeNoticias = result.articles;
      this.loading = false;
    })

  }
}
