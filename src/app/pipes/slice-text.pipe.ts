import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  standalone: true,
  name: 'sliceTextPipe',
})

export class SliceTextPipe implements PipeTransform {
  transform(text: string,): string {
    if (text.length > 20){
      return text.slice(0 ,19) + '...'
    } else {
      return text
    }
  }
}
