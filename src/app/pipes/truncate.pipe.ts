import { Pipe, PipeTransform } from '@angular/core';

/**
 * Проверяет длину строки value и, если она превосходит maxlength, заменяет конец value на "…", так, чтобы её длина стала равна maxlength
 * Результатом является та же строка, если усечение не требуется, либо, если необходимо, усечённая строка
 * По умолчанию длмна строки равна 100 символам
 */
@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string = '', maxLength: number = 100): string {
    return value.length > maxLength
      ? value.slice(0, maxLength - 1) + '…'
      : value;
  }
}
