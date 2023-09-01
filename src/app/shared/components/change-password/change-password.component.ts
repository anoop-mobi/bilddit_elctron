import { Component } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  hide = true;
  passwords: string[] = [];
  showPassword: boolean[] = [];

  togglePasswordVisibility(index: number) {
    this.showPassword[index] = !this.showPassword[index];
  }
}
