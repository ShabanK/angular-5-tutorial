import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string;
  date:string;
  amount: number;
  height: number;

  car={
    make: "Toyota",
    model: "Camry",
    year: 2000
  }

  onNameChange(name:string){
    this.name=name;
  }
  onDateChange(date:string){
    this.date = date
  }
  onAmountChange(amount:string){
    this.amount = parseInt(amount)
  }
  onHeightChange(height:string){
    this.height=parseFloat(height)
  }
}
