import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts=[
    {
      title:"Neat Tree",
      imageURL:"assets/tree.jpeg",
      username: "nature",
      content:"I saw a neat tree today."
    },
    {
      title:"Big Mountain",
      imageURL:"assets/mountain.jpeg",
      username: "mountainlover",
      content:"It do be snowing tho"
    },
    {
      title:"Mountain Biking",
      imageURL:"assets/biking.jpeg",
      username: "bikingisrad",
      content:"I did some biking today"
    },
  ]
}
