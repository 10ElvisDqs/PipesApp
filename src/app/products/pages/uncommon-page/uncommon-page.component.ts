import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  //i18 Select
  public name:string ='Elvis';
  public gender:'male'|'female'='male';
  public invitationMap = {
    'male':'invitarlo',
    'female':'invitarla'
  }

  public clientesMap = {
    '=0':'no tenemos nigun cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2':'tenemos 2 personas esperando.',
    'other':'tenemos # cliente esperando.',
  }

  changeClient():void{
    this.name ='Melissa';
    this.gender ='female';
  }
  // i18nPlural
  public clients:string[]=['maria','pedro','fernando','eduardo','damaris','ines','jhobana'];

  deleteClient():void{
    this.clients.shift();
  }
  //keyValue Pipe
  public person = {
    name:'Elvis',
    age:23,
    address:'Santa Cruz, Bolivia'
  }

  //Async Pipe
  public myObservableTimer:Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap',value ) ),
  );

  public promiseValue:Promise<string> = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data en la promesa.');
      console.log('Tenemos data en la promesa.');
    },3500);
  })
}
