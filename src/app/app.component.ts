import { Component } from '@angular/core';
import {lorem} from "faker"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText:string=lorem.sentence()
  enteredText=""
  onInput(value:string){
    this.enteredText=value
  }
  compare(letter,enteredText){
    if(!enteredText){
      return "pending"
    } else if(letter===enteredText){
      return "success"
    } else if(letter!==enteredText){
      return "bad"
    }
  }
}
