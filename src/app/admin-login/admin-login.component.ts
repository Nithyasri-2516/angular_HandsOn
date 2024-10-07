import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
    firstname="nithu"
    lastname="as"
    title="learn angular"

    addr="13,bbcstreet"
    color="blue"  

    isDisabled= false


    getName(){
      return this.firstname;
    }
    
    getMax(a:number, b:number){
      return Math.max(a,b);
    }

    clickCount=0
    click(){
      this.clickCount++;
    }

    

    

}
