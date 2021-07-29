import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-increment',
  templateUrl: './quantity-increment.component.html',
  styleUrls: ['./quantity-increment.component.css']
})


export class QuantityIncrementComponent implements OnInit {
  buttonClicked:string="";
val:number=0;
value:number=0;
  //Requisite variables.
  constructor() { }

  ngOnInit(): void {
  }
 
  myFunc():void{
    this.buttonClicked="Click Me Button Clicked";
//     // 1. Select the div element using the id property
//   const app = document.getElementById("Clicked");
// // 2. Create a new <p></p> element programmatically
//   const p = document.createElement("p");
// // 3. Add the text content
//   p.textContent = "Click Me Button Clicked";
// // 4. Append the p element to the div element
//   app?.appendChild(p);
    //document.getElementById("Clicked").innerHTML="Click Me Button Clicked";
  }
  addition():void{
    this.val+=1;
  }
  substraction():void{
    this.value-=1;
  }
  additionsymbol():void{
    this.value+=1;
  }


}

