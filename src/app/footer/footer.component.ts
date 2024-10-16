import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentDate: Date = new Date();
   message=" nithya pandii";
   Currency=900;
   fraction=6/9;
   deci=2.900;
}

