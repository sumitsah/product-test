import { Component, Inject, EventEmitter } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close('Cancel');
  }

  onAdd(): void{
    this.data.id = uuidv4();
    this.dialogRef.close('Add');
  }
}