import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage=0;
  images=[
    {
      title:"At the beach",
      url:"https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title:"At the beach",
      url:"https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title:"At the beach",
      url:"https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title:"At the beach",
      url:"https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title:"At the beach",
      url:"https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title:"At the beach",
      url:"https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title:"At the beach",
      url:"https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title:"At the beach",
      url:"https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title:"At the beach",
      url:"https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title:"At the beach",
      url:"https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title:"At the beach",
      url:"https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title:"At the beach",
      url:"https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title:"At the beach",
      url:"https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title:"At the beach",
      url:"https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title:"At the beach",
      url:"https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title:"At the beach",
      url:"https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title:"At the beach",
      url:"https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title:"At the beach",
      url:"https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title:"At the beach",
      url:"https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title:"At the beach",
      url:"https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title:"At the beach",
      url:"https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title:"At the beach",
      url:"https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title:"At the beach",
      url:"https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title:"At the beach",
      url:"https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
  ]
  showPage(i){ 
    return Math.abs(i-this.currentPage)< 5
  }
}
