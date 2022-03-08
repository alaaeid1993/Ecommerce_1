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
  back(){
    const bac = (<HTMLDivElement>document.getElementById("fixed")).style.backgroundImage="url('../assets/images/blog2.jpeg')"
    const bac2 = (<HTMLDivElement>document.getElementById("fixed")).style.display="block"
  
  }
  back2(){
    const bac = (<HTMLDivElement>document.getElementById("fixed")).style.backgroundImage="url('../assets/images/gAMES.jpg')"
    const bac2 = (<HTMLDivElement>document.getElementById("fixed")).style.display="block"
  
  }
  asset(){
    const bac = (<HTMLDivElement>document.getElementById("fixed")).style.backgroundImage="url('../assets/images/Pa.jpg')"
    const bac2 = (<HTMLDivElement>document.getElementById("fixed")).style.display="block"
  
  }

none(){
  const bac = (<HTMLDivElement>document.getElementById("fixed")).style.display="none"
}

}
