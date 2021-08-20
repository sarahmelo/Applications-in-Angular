import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Photo } from "../../photo/photo";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges{

  @Input() photos: Photo[] = []
  rows: any = []

  constructor() { }

  ngOnChanges(change: SimpleChanges): void {
    /*change.photos => se houver mudança, será adicionado uma propriedade com o mesmo nome da property que
    sofreu uma mudança, nesse caso a property photos
    */
    if(change.photos) {
      this.rows = this.groupPhotos(this.photos);
    }
  }

  groupPhotos(photos: Photo[]) {
    const newRow = []
    for (let index = 0; index < photos.length; index+=3) {

      /* slice, primeiro parâmetro o index atual, o segundo o ultimo index (ele não será levado em conta)
        row = [0,1,2]
        ...push.slice(index, index + 3) o segundo index será a posição "3" no array, colocando como limite  */
      newRow.push(photos.slice(index, index + 3))
    }

    return newRow
  }



}
