import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class STUDIESComponent implements OnInit {
  count = 0;
  duration = 5000;
  constructor() { }

  ngOnInit(): void {
 
  }
 //this is a variable that hold number
 projectcount:number = 0;
 //same process
 accuratecount:number = 0;
 clientcount:number = 0;
 customerfeedback:number = 0;

 //we have created setinterval function with arrow function and
 //and set them in a variable that is projectcountstop.
 projectcountstop:any = setInterval(()=>{
   this.projectcount=this.projectcount+88;
   //we need to stop this at  particular point; will use if condition
   if(this.projectcount >7518)
   {this.projectcount=7518
     //clearinterval will stop tha function
     clearInterval(this.projectcountstop);
   }

 },10) //10 is milisecond you can control it


 accuratecountstop:any = setInterval(()=>{
   this.accuratecount=this.accuratecount+33;
   if(this.accuratecount > 3472)
   {
    this.accuratecount = 3472 
     clearInterval(this.accuratecountstop);
   }
 },10) 


 clientcountstop:any = setInterval(()=>{
   this.clientcount=this.clientcount+44;
   if(this.clientcount > 2184)
   {
    this.clientcount=2184
     clearInterval(this.clientcountstop);
   }
 },10)

 customerfeedbackstop:any = setInterval(()=>{
   this.customerfeedback=this.customerfeedback+58;
   if(this.customerfeedback > 4523)
   {
    this.customerfeedback = 4523
     clearInterval(this.customerfeedbackstop);
   }
 },10)
}
