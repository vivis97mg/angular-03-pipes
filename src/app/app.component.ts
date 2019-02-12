import { Component } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'pipes';

  nombre:string = 'Viviana';
  nombre2:string = 'viviana marCEla moreno gorDIllo';
  arreglo:any[] = [1,2,3,4,5,6,7,8,9,10];
  pi:number = Math.PI;
  pocentaje:number = 0.259;
  salario:number = 1234.5;
  heroe:any = {
    nombre: 'Viviana',
    clave: 'Vivis',
    edad: 500,
    direccion: {
      calle: 'primera',
      casa: 19
    }
  };

  valorDePromesa = new Promise( ( resolve, reject ) => {
    setTimeout(
      () => resolve('llego la data'), 1000
    )
  });

  fecha = new Date();

  video = 'pXRviuL6vMY';

  activar:boolean = true;
}
