import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name:string;
  result:number;
  ab:number;
  bc:number;
  fullname:string;
  res:boolean;
  constructor() {
    this.name="";
    this.result=0;
    this.ab=0;
    this.bc=0;
    this.res=false;
    this.fullname="";
   }

  ngOnInit(): void {
  }
  AddNumber(a:number,b:number):any{
    this.result=a+b;
  }
  Addtext(a:string,b:string):any{
    this.fullname=a+' '+b;
  }
}

