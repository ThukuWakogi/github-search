import { Pipe, PipeTransform } from '@angular/core'

import { format } from 'date-fns'

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return format(new Date(value), 'do MMMM yyyy')
  }

}
