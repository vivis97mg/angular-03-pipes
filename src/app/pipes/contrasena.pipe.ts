import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform( value:string, activar:boolean = true ): any {
   
    if (activar) {
      let pass:string = '';
      for (let i = 0; i < value.length; i++  ) {
        pass += '*';
      }
      return pass;
    } else {
        return value;
      }

  }

}
