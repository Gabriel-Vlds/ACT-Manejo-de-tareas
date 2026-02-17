// Vista de cuenta: cursos inscritos, compras y cierre de sesion.
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/auth/auth.service';
import { EnrollmentsService } from '../../core/services/enrollments.service';
import { PurchasesService } from '../../core/services/purchases.service';
import { Enrollment } from '../../core/models/enrollment.model';
import { Purchase } from '../../core/models/purchase.model';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {
  enrollments: Enrollment[] = [];
  purchases: Purchase[] = [];
  loading = true;

  constructor(
    public readonly auth: AuthService,
    private readonly enrollmentsService: EnrollmentsService,
    private readonly purchasesService: PurchasesService
  ) {}

  ngOnInit() {
    const user = this.auth.user();
    if (!user) {
      this.loading = false;
      return;
    }

    this.enrollmentsService.list(user.id).subscribe((items) => (this.enrollments = items));
    this.purchasesService.list(user.id).subscribe((items) => (this.purchases = items));
    this.loading = false;
  }

  logout() {
    this.auth.logout();
  }
}
