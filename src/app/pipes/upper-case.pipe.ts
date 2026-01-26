import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  standalone: true,
  name: 'customUpperCase'
})

export class CustomUpperCasePipe implements PipeTransform {
    transform(text: string,): string {
        return text.toUpperCase();
    }
}
