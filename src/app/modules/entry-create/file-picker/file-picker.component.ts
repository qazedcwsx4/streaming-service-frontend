import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.scss']
})
export class FilePickerComponent implements OnInit {

  @Input() pickedFiles: Array<File>;
  @Output() filesPickedEvent = new EventEmitter<Array<File>>();

  onFilesPicked(e: Event) {
    console.log('picked');
    this.pickedFiles = Array.from((e.target as HTMLInputElement).files);
    this.filesPickedEvent.emit(this.pickedFiles);
  }

  fileDeletedHandler(file: File){
    this.pickedFiles = this.pickedFiles.filter(it => it !== file);
  }



  constructor() {
  }

  ngOnInit(): void {
  }

}
