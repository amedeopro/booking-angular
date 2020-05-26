import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-results',
  template: `
 <div class="wrapper centerd">
   <div class="card vh-centered center">
     <div class="title">No results</div>
     <div class="content">
       In this demo you can find results only in Milano and Roma
     </div>
     <button type="submit" routerLink="search">BACK</button>
   </div>
 </div>
  `,
  styles: [
  ]
})
export class NoResultsComponent {



}
