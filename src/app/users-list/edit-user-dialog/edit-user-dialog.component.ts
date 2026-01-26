import {Component, inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogClose, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {User} from "../user.interface";

@Component({
  selector: "app-edit-user-dialog",
  templateUrl: 'edit-user-dialog.component.html',
  styleUrl: 'edit-user-dialog.component.scss',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    FormsModule,
    MatDialogClose,
  ]
})

export class EditUserDialogComponent {
  readonly data = inject<{user: User}>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<EditUserDialogComponent>)


  editUserForm = new FormGroup({
    name: new FormControl(this.data.user.name, [Validators.required, Validators.minLength(4)]),
    email: new FormControl(this.data.user.email, [Validators.required, Validators.email]),
    website: new FormControl(this.data.user.website, [Validators.required, Validators.minLength(4)]),
    company: new FormGroup({
      name: new FormControl(
        this.data.user?.company?.name || '',
        [Validators.required]
      )
    })
  })
  submitForm():void {
    this.dialogRef.close(this.userWithUpdatedFields)
    console.log(this.userWithUpdatedFields)
  }

  get userWithUpdatedFields() {
    return {
      ...this.editUserForm.value,
      id: this.data.user.id,
      phone: this.data.user.phone,
    }
  }
}
