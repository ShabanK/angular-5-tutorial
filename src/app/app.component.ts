import { Component } from '@angular/core';
import { parse } from 'querystring';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password:string=""
  includeLetters:boolean=false;  
  includeNumbers:boolean=false;
  includeSymbols:boolean=false;
  passwordLength:number=0;

  constructor(){}

  onChangeLength(length:string){
    const parsedValue = parseInt(length)
    if (!isNaN(parsedValue)){
      this.passwordLength=parsedValue
    }
  }
  onChangeUseLetters(){
    this.includeLetters=!this.includeLetters
  }
  onChangeUseNumbers(){
    this.includeNumbers=!this.includeNumbers
  }
  onChangeUseSymbols(){
    this.includeSymbols=!this.includeSymbols
  }
  onButtonClick(){
    console.log("Button was pressed")
    // console.log(this.includeLetters)
    // console.log(this.includeNumbers)
    // console.log(this.includeSymbols)
    // console.log(this.passwordLength)
    const numbers = "1234567890";
    const letters = "qwertyuiopasdfghjklzxcvbnm"
    const symbols = "!@#$%^&*()"
    let validChars = ""
    if (this.includeLetters) validChars+=letters;
    if (this.includeNumbers) validChars+=numbers;
    if (this.includeSymbols) validChars+=symbols;
    let generatedPassword = ""
    for (let i = 0; i<this.passwordLength; i++){
      const index = Math.floor(Math.random()*validChars.length)
      generatedPassword+=validChars[index]
    }
    this.password=generatedPassword
  }
}
