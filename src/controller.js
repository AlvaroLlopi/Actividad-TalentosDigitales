import { pool } from './database.js';

class ProductosController {
  async getAll(req, res) {
    try {
      const [result] = await pool.query('SELECT * FROM productos');
      res.json(result);
    } catch (error) {
      console.error("Error al obtener la lista de productos:", error);
      res.status(500).json({ "Mensaje": "Error en el servidor" });
    }
  }

  async getOne(req, res) {
    const producto = req.body;
    try {
      const [result] = await pool.query(`SELECT * FROM productos WHERE id = ?`, [producto.id]);
      if (result.length > 0) {
        res.json({ "Datos del Producto": result });
      } else {
        res.status(404).json({ "Mensaje": "No se encontró el producto con el ID especificado" });
      }
    } catch (error) {
      console.error("Error al buscar el producto por ID:", error);
      res.status(500).json({ "Mensaje": "Error en el servidor" });
    }
  }

  async add(req, res) {
    try {
      const producto = req.body;
      if (producto.nombre && producto.descripcion && producto.categoria_id && producto.precio && producto.stock) {
        const query = 'INSERT INTO productos(nombre, descripcion, categoria_id, precio, stock, baja) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [producto.nombre, producto.descripcion, producto.categoria_id, producto.precio, producto.stock, 'NO'];
        const [result] = await pool.query(query, values);
        res.json({ "id insertado": result.insertId });
      } else {
        res.status(400).json({ "Mensaje": "Faltan rellenar campos obligatorios" });
      }
    } catch (error) {
      console.error("Error al añadir el producto:", error);
      res.status(500).json({ "Mensaje": "Error en el servidor" });
    }
  }

  async delete(req, res) {
    const producto = req.body;
    try {
      const [result] = await pool.query('SELECT * FROM productos WHERE id = ?', [producto.id]);
      if (result.length > 0) {
        const [deleteResult] = await pool.query('DELETE FROM productos WHERE id = ?', [producto.id]);
        res.json({ "Registro eliminado": deleteResult.affectedRows });
      } else {
        res.status(404).json({ "Mensaje": "No se encontró el producto con el ID especificado" });
      }
    } catch (error) {
      console.error("Error al eliminar el producto por ID:", error);
      res.status(500).json({ "Mensaje": "Error en el servidor" });
    }
  }

  async update(req, res) {
    try {
      const producto = req.body;
      if (producto.id && producto.nombre && producto.descripcion && producto.categoria_id && producto.precio && producto.stock) {
        const query = 'UPDATE productos SET nombre = ?, descripcion = ?, categoria_id = ?, precio = ?, stock = ?, baja = ? WHERE id = ?';
        const values = [producto.nombre, producto.descripcion, producto.categoria_id, producto.precio, producto.stock, producto.baja, producto.id];
        const [result] = await pool.query(query, values);
        if (result.affectedRows === 0) {
          res.status(404).json({ "Mensaje": "No se encontró ningún registro para actualizar" });
        } else {
          res.json({ "Registro Actualizado": result.affectedRows });
        }
      } else {
        res.status(400).json({ "Mensaje": "Faltan campos obligatorios" });
      }
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
      res.status(500).json({ "Mensaje": "Error en el servidor" });
    }
  }
  
  async baja(req, res) {
    try {
      const producto = req.body;
      if (producto.id) {
        const query = 'UPDATE productos SET baja = "SI" WHERE id = ?';
        const [result] = await pool.query(query, [producto.id]);
        if (result.affectedRows === 0) {
          res.status(404).json({ "Mensaje": "No se encontró ningún registro para dar de baja" });
        } else {
          res.json({ "Producto dado de baja": result.affectedRows });
        }
      } else {
        res.status(400).json({ "Mensaje": "Falta el ID del producto" });
      }
    } catch (error) {
      console.error("Error al dar de baja el producto:", error);
      res.status(500).json({ "Mensaje": "Error en el servidor" });
    }
  }
  
}

export const producto = new ProductosController();
