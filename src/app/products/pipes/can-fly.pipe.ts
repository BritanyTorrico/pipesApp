import { I18nSelectPipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "canFly",
})
export class CanFlyPipe implements PipeTransform {
    public options = {
        true: "puede volar",
        false: "no puede ",
    };
    transform(value: boolean): 'vuela' | 'no vuela' {
       return value ? 'vuela' : 'no vuela';
    }
}
