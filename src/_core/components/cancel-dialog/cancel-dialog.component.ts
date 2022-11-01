import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cancel-dialog',
  templateUrl: './cancel-dialog.component.html',
  styleUrls: ['./cancel-dialog.component.css']
})
export class CancelDialogComponent implements OnInit {
  submitting: boolean = false;

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  save() {
    this.submitting = true;
    
    setTimeout(() => {
      this.submitting = false;
      this.snackBar.open('Changes were saved', 'Close')
      this.dialog.closeAll();
    }, 3000);
  }

}
