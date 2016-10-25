import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterData',
    pure: false
})

export class FilterData implements PipeTransform {
    transform(items:any[], args:any[], filterKeys: any):any[] {

            if (typeof items === 'object') {
                var resultArray:any = [];
                if (args.length === 0) {
                    resultArray = items;
                }

                else {

                    items.forEach((item) => {
                        if (item[filterKeys] != null && item[filterKeys].match(new RegExp(''+args, 'i'))) {
                            resultArray.push(item);
                        }
                    })

                }

                return resultArray;
            }
            else {
                return null;
            }

        }

}
