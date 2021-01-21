import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetUnits:string): any {
    if (!value){
      return value*1.60934;
    }
    console.log(targetUnits)
    switch(targetUnits){
      case "km":
        return value*1.60934
      case "m":
        return value*1609.34
      case "cm":
        return value*1609.34*1000
      default:
        throw new Error("ENTER A PROPER ARG")

    }
  }

}
