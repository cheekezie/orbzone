import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-collection',
  templateUrl: './add-collection.component.html',
  styleUrls: ['./add-collection.component.scss']
})
export class AddCollectionComponent implements OnInit {
  create_form = false;
  constructor(
    private MatDialogRef: MatDialogRef<AddCollectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }
  toggleForm(){
    this.create_form = !this.create_form;
  }
}
