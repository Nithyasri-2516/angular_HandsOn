import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
    title="list"
    movies=["unakum enakum","sachin","kutty","Ghilli","goat"]

  value="student"
  
    s=[
      {name:"nithu", age:"40"},
      {name:"jemi", age:"90"},
      {name:"kavi", age:"100"}
    ]
}
