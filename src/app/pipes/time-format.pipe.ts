import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'timeFormat'})
export class TimeFormatPipe implements PipeTransform {
  transform(totalSeconds: number): string {
    const minutes: number = Math.floor(totalSeconds/ 60);
    const seconds = totalSeconds - minutes * 60;
    return minutes + ':' + (seconds < 10 ? "0" : "") + seconds;
  }
}