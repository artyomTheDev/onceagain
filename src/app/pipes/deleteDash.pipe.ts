import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'deleteDash',
  standalone: true,
})

export class DeleteDashPipe implements PipeTransform {
  transform(phoneNumber: any): any {
    let newArray = phoneNumber.split('')
    return newArray.filter((item: any) => item !== '-').join('')
  }
}
