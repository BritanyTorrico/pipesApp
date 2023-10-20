import { Component } from "@angular/core";
import { interval, tap } from "rxjs";

@Component({
    selector: "app-uncommon-pages",
    templateUrl: "./uncommon-pages.component.html",
    styleUrls: ["./uncommon-pages.component.css"],
})
export class UncommonPagesComponent {
    //i18nSelect
    public name: string = "Britany";
    public gender: "male" | "female" = "female";
    public invitationMap = {
        'male': 'invitarlo',
        'female': 'invitarla'
    }
    changeClient(): void {
        this.name = "Carlos";
        this.gender = "male";
    }
    //i18nPlural
    public clients: string[] =['Maria','Alan','Jose','Olivia','Naty'];
    public clientsMap = {
        '=0':'no tenemos ningun cliente esperando.',
        '=1': 'tenemos un cliente esperando',
        '=2': 'tenemos 2 clientes esperando',
        'other': 'tenemos # clientes esperando'
    }
    deletedClient(): void{
        this.clients.shift();
    }
    //key value pipe
    public person = {
        name:'Britany',
        age:'24',
        address:'Cochabamba,Bolivia'
    }
    //Async pipe
    public myObservableTimer= interval(2000).pipe(
        tap(value => console.log('tap:', value))
    );
    public promiseValue: Promise<string> = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Tenemos data en la promesa')
        }, 3500);
    })
}
