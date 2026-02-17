// Vista para explorar MacarroKits.
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitsService } from '../../core/services/kits.service';
import { AuthService } from '../../core/auth/auth.service';
import { Kit } from '../../core/models/kit.model';

@Component({
  selector: 'app-kits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kits.component.html',
  styleUrl: './kits.component.css'
})
export class KitsComponent implements OnInit {
  kits: Kit[] = [];
  loading = true;
  message = '';

  constructor(private readonly kitsService: KitsService, private readonly auth: AuthService) {}

  ngOnInit() {
    this.kitsService.list().subscribe({
      next: (kits) => {
        this.kits = kits;
        this.loading = false;
      },
      error: () => {
        this.message = 'No se pudieron cargar los kits.';
        this.loading = false;
      }
    });
  }

  buy(kitId: number) {
    if (!this.auth.isLoggedIn()) {
      this.message = 'Inicia sesion para comprar.';
      return;
    }

    this.kitsService.purchase(kitId, 1).subscribe({
      next: () => {
        this.message = 'Compra registrada.';
        this.kitsService.list().subscribe((kits) => (this.kits = kits));
      },
      error: () => {
        this.message = 'No se pudo completar la compra.';
      }
    });
  }
}
