// Modelo de datos para cursos.
export interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  level: 'beginner' | 'intermediate' | 'advanced';
  cover_url?: string | null;
  created_at?: string;
  updated_at?: string;
}
