import pool from '../database/configuracion.js'


export const getComprasModel = async () => {
    const result = await pool.query('SELECT * FROM compras')
    console.log(result);
    return result.rows;
};

export const addCompraModel = async ({usuario_id, publicacion_id}) => {
    const result = await pool.query(
        'INSERT INTO compras (id, usuario_id, publicacion_id) VALUES (DEFAULT, $1 ,$2);',
        [usuario_id, publicacion_id]);
    console.log(result.rows);
    return result.rows[0]
};


export const deleteCompraModel = async (id) => {
    const result = await pool.query(
        'DELETE FROM compras WHERE id = $1;', [id]);
        console.log(result.rows);
        return result.rows
}
