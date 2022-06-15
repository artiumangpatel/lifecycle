import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecycleComp';
  value:any;
  comp1Exit=true;
  submitValue(val:any){
    this.value=val.value;
  }
  destroy(){
this.comp1Exit=!this.comp1Exit;
  }
}
