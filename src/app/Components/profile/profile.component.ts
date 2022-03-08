import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(router:Router) { }

  ngOnInit(): void {
  }
  none(){
    const bac = (<HTMLDivElement>document.getElementById("fixed")).style.display="none"
  }
}
