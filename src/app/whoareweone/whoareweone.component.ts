import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-whoareweone',
  templateUrl: './whoareweone.component.html',
  styleUrls: ['./whoareweone.component.css']
})
export class WhoareweoneComponent implements OnInit {

  constructor() { }
  navbarfixed:boolean = false;

  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 50)
    {
      this.navbarfixed = true;
    }
    else
    {
      this.navbarfixed = false;
    }
  }
  ngOnInit(): void {
    console.log(1)
  }

}
