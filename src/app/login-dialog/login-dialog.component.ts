import { Component, inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatButton } from "@angular/material/button";
import { LoginResult } from "./login-result.interface";
import {MatInput} from "@angular/material/input";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-login-dialog',
  templateUrl: 'login-dialog.component.html',
  styleUrl: 'login-dialog.component.scss',
  standalone: true,
  imports: [
    MatButton,
    MatInput,
    FormsModule
  ]
})

export class LoginDialogComponent {
  readonly dialogRef = inject(MatDialogRef<LoginDialogComponent, LoginResult>);
  readonly data : { title:string } = inject(MAT_DIALOG_DATA);
  displayName: string | null | undefined;

  loginAsAdmin(): void {
    this.dialogRef.close({
      isAdmin: true,
      displayName: this.displayName
    })
  }

  loginAsUser(): void {
    const result: LoginResult = { isAdmin:false }
    this.dialogRef.close(result)
  }
}
