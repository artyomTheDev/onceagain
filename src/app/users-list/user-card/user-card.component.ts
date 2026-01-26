import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {EditUserDialogComponent} from "../edit-user-dialog/edit-user-dialog.component";
import {CustomUpperCasePipe} from "../../pipes/upper-case.pipe";
import {DeleteDashPipe} from "../../pipes/deleteDash.pipe";
import {RedDirective} from "../../directives/red.directive";
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {ShadowBoxDirective} from "../../directives/shadow-box.directive";

@Component({
  selector: 'app-user-card',
  imports: [CustomUpperCasePipe, DeleteDashPipe, RedDirective, MatButton, MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardActions, ShadowBoxDirective],
  standalone: true,
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input()
  user: any

@Output()
  deleteUser = new EventEmitter<number>();
  @Output()
  editUser = new EventEmitter<any>();

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: { user: this.user},
    });

      dialogRef.afterClosed().subscribe(editedResult => {
          if (editedResult) {
            this.editUser.emit(editedResult)
          }
      });
  }

onDeleteUser(userId: number) {
    this.deleteUser.emit(userId)
}
}
