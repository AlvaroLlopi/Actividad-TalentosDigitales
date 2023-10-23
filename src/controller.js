import { pool } from './database.js';

class LibrosController {
    async getAll(req, res) {
        const [result] = await pool.query('SELECT * FROM libros');
        res.json(result);
    }

    async getOne(req, res) {
        const libro = req.body;
        try {
            const [result] = await pool.query(`SELECT * FROM libros WHERE id=(?)`, [libro.id]);
            if (result.length > 0) {
                res.json({ "Datos del Libro": result });
            } else {
                res.status(404).json({ "Mensaje": "No se encontró el libro con el ID especificado" });
            }
        } catch (error) {
            console.error("Error al buscar el libro por ID:", error);
            res.status(500).json({ "Mensaje": "Error en el servidor" });
        }
    }

    async add(req, res) {
        try {
            const libro = req.body;
            if (libro.nombre && libro.autor && libro.categoria && libro.añopublicacion && libro.ISBN) {
                const [result] = await pool.query(`INSERT INTO libros(nombre,autor,categoria,añopublicacion,ISBN) VALUES (?,?,?,?,?)`, [libro.nombre, libro.autor, libro.categoria, libro.añopublicacion, libro.ISBN]);
            res.json({ "id insertado": result.insertId });    
            }
            throw new Error("Completar campos faltantes");
        } catch (error) {
            console.error("Error al añadir el libro:", error);
            res.status(500).json({ "Mensaje": "Error en el servidor" });
        }
    }

    async delete(req, res) {
        const libro = req.body;
        const [result] = await pool.query(`DELETE FROM libros WHERE ISBN=(?)`, [libro.ISBN]);
        res.json({ "Registro Eliminado": result.affectedRows });
    }

    async delete(req, res) {
        try {
          const libro = req.body;
          if (libro.ISBN) {
            const [result] = await pool.query(`DELETE FROM libros WHERE ISBN=(?)`, [libro.ISBN]); 
          res.json({ "Registro Eliminado": result.affectedRows });
          }
          res.status(404).json({ "Mensaje": "No se encontró el libro con el ISBN proporcionado" });
        } catch (error) {
            console.error("Error al buscar el libro por ISBN:", error);
            res.status(500).json({ "Mensaje": "Error en el servidor" });
        }
      }
      

    async update(req, res) {
        const libro = req.body;
        const [result] = await pool.query(`UPDATE libros SET nombre=(?),autor=(?),categoria=(?),añopublicacion=(?),ISBN=(?) WHERE id=(?)`, [libro.nombre, libro.autor, libro.categoria, libro.añopublicacion, libro.ISBN, libro.id]);
        res.json({ "Registro Actualizado": result.affectedRows });
    }

}

export const libro = new LibrosController();
