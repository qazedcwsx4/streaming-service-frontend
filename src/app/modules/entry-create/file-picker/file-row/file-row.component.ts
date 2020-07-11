import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-file-row',
  templateUrl: './file-row.component.html',
  styleUrls: ['./file-row.component.scss']
})
export class FileRowComponent implements OnInit {

  @Input() file: File;
  @Output() fileDeletedEvent = new EventEmitter<File>();

  onFileDeleted(): void {
    this.fileDeletedEvent.emit(this.file);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
