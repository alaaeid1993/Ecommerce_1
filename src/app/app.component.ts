import { Component,  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Ecommerce_1';
  
  // switcher = window.document.getElementById("switcher");
  change(){
    let switcher = (<HTMLInputElement>document.getElementById("switcher"));
    if(switcher.checked){
      let content = (<HTMLDivElement>document.getElementById("content")).style.backgroundColor="black";
    }
    else{
      let content = (<HTMLDivElement>document.getElementById("content")).style.backgroundColor="rgb(246, 248, 248)";
    }

  }
}
