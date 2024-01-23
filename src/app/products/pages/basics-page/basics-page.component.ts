import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameUpper:string = 'elvis david';
  public nameLower:string = 'ELVIS DAVID';
  public nameTitle:string = 'ElViS DaVid';

  public customDate:Date = new Date();

}
