// Endpoints para cursos disponibles en la plataforma.
const express = require('express');
const { pool } = require('../db');
const { authenticate, requireRole } = require('../middleware/auth');

const router = express.Router();

router.get('/', async (req, res) => {
  const [rows] = await pool.query(
    'SELECT id, title, description, price, level, cover_url, created_at, updated_at FROM courses'
  );
  return res.json(rows);
});

router.post('/', authenticate, requireRole('admin'), async (req, res) => {
  const { title, description, price, level, coverUrl } = req.body;

  if (!title || price == null) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  const [result] = await pool.query(
    'INSERT INTO courses (title, description, price, level, cover_url) VALUES (?, ?, ?, ?, ?)',
    [title, description || '', price, level || 'beginner', coverUrl || null]
  );

  const [rows] = await pool.query(
    'SELECT id, title, description, price, level, cover_url, created_at, updated_at FROM courses WHERE id = ?',
    [result.insertId]
  );

  return res.status(201).json(rows[0]);
});

router.patch('/:id', authenticate, requireRole('admin'), async (req, res) => {
  const { title, description, price, level, coverUrl } = req.body;
  const updates = [];
  const values = [];

  if (title) {
    updates.push('title = ?');
    values.push(title);
  }
  if (description != null) {
    updates.push('description = ?');
    values.push(description);
  }
  if (price != null) {
    updates.push('price = ?');
    values.push(price);
  }
  if (level) {
    updates.push('level = ?');
    values.push(level);
  }
  if (coverUrl !== undefined) {
    updates.push('cover_url = ?');
    values.push(coverUrl);
  }

  if (updates.length === 0) {
    return res.status(400).json({ message: 'No updates provided' });
  }

  values.push(req.params.id);
  await pool.query(`UPDATE courses SET ${updates.join(', ')}, updated_at = NOW() WHERE id = ?`, values);

  const [rows] = await pool.query(
    'SELECT id, title, description, price, level, cover_url, created_at, updated_at FROM courses WHERE id = ?',
    [req.params.id]
  );

  return res.json(rows[0]);
});

router.delete('/:id', authenticate, requireRole('admin'), async (req, res) => {
  await pool.query('DELETE FROM courses WHERE id = ?', [req.params.id]);
  return res.status(204).send();
});

module.exports = { coursesRoutes: router };
