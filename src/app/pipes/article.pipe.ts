import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'article'
})
export class ArticlePipe implements PipeTransform {

  transform(value: any[], Search: string): any {
    if (Search === '' || Search === null || Search === undefined) {
      return value;
    }
    return  value.filter(p => (p.nom?.toLowerCase().includes(Search)));
  }

}
