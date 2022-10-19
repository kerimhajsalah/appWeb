import { Component, OnInit } from '@angular/core';
interface CarouselItem {
  name: number;
}

@Component({
  selector: 'app-whatwedo',
  templateUrl: './whatwedo.component.html',
  styleUrls: ['./whatwedo.component.css']
})
export class WhatwedoComponent implements OnInit {
  
  images = [
    {path: 'https://source.unsplash.com/800x600/?nature'},
    {path: 'https://source.unsplash.com/800x600/?car'},
    {path: 'https://source.unsplash.com/800x600/?moto'},
    {path: 'https://source.unsplash.com/800x600/?fantasy'},
  ]
  items: [
    {name: 1},
    {name: 2},
    {name: 3},
]
  constructor() { }

  ngOnInit(): void {
  }

}
