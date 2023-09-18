import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-temporary-modal-window',
  templateUrl: './temporary-modal-window.component.html',
  styleUrls: ['./temporary-modal-window.component.scss'],
})
export default class TemporaryModalWindow {
  constructor(private dialogRef: MatDialogRef<TemporaryModalWindow>) {}

  closeModal(): void {
    this.dialogRef.close();
  }
}
