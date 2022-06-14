import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit,OnChanges,DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked ,OnDestroy{
 @Input() myValue="Arti";
 counter:any;
 num:number=1;
 constructor() {
    console.log ("constructor called")
  }
  ngOnChanges(changes: SimpleChanges) {
   //console.log('ng onchange called');
   console.log("ng On change is called :"+  changes['myValue'].currentValue);
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
     console.log("ng Docheck called");
  }

  ngOnInit(): void {
    console.log("ng init called");
    this.counter=setInterval(()=>{this.num=this.num+1;
    console.log(this.num)},1000)
  }
 ngAfterContentInit(): void {
console.log("ngAfterContentInit called")
 }
ngAfterContentChecked(): void {
  console.log("ngAfterContentchecked called")
}
ngAfterViewInit(): void {
  console.log("ngAfterviewInit called")
}
ngAfterViewChecked(): void {
  console.log("ngAfterviewchecked called")
}
ngOnDestroy(): void {
  console.log("ng destroy called");
  clearInterval(this.counter);
}
}
