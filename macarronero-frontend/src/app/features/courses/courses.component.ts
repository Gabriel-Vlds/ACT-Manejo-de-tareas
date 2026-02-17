// Vista para explorar y listar cursos.
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesService } from '../../core/services/courses.service';
import { EnrollmentsService } from '../../core/services/enrollments.service';
import { AuthService } from '../../core/auth/auth.service';
import { Course } from '../../core/models/course.model';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  loading = true;
  error = '';

  constructor(
    private readonly coursesService: CoursesService,
    private readonly enrollmentsService: EnrollmentsService,
    private readonly auth: AuthService
  ) {}

  ngOnInit() {
    this.coursesService.list().subscribe({
      next: (courses) => {
        this.courses = courses;
        this.loading = false;
      },
      error: () => {
        this.error = 'No se pudieron cargar los cursos.';
        this.loading = false;
      }
    });
  }

  enroll(courseId: number) {
    const user = this.auth.user();
    if (!user) {
      this.error = 'Inicia sesion para inscribirte.';
      return;
    }

    this.enrollmentsService.create(user.id, courseId).subscribe({
      next: () => {
        this.error = 'Inscripcion registrada.';
      },
      error: () => {
        this.error = 'No se pudo registrar la inscripcion.';
      }
    });
  }
}
