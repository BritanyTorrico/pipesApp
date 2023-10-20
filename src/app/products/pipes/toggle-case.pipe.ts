import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
    transform(value: string, toUper:boolean = false): string {
        return (toUper) ? value.toUpperCase() : value.toLowerCase();
    }
}