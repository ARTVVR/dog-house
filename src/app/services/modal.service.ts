import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import TemporaryModalWindow from '../components/temporary-modal-window/temporary-modal-window.component';

@Injectable({
  providedIn: 'root',
})
export default class ModalService {
  constructor(private dialog: MatDialog) {}

  openModal(delaySeconds: number): void {
    setTimeout(() => {
      const dialogRef = this.dialog.open(TemporaryModalWindow, {
        width: '400px',
      });
    }, delaySeconds * 1000);
  }
}
