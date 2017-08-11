import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})

@Injectable()
export class FilterPipe implements PipeTransform {
    transform(input: any, min: number, max: number): any {
       return input.filter(member  => {
           if (member.age >= min && member.age <= max) return member; 
       });
    }
}