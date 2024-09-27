import mysql from 'mysql2'


const pool = mysql.createPool({
    host: 'homenas.pcpixel.it',
    port: '3333',
    user: 'leggilibri',
    password: 'LEGGIleggi123!',
    database: 'libreria'
}).promise()
/*
const result = await pool.query(`SELECT 
Titolo, generi.nome as Genere, autori.nome as Autore, editori.nome as Editore
 FROM libro
join generi
on generi.id_key = libro.id_key_genere
join autori
on autori.id_key = libro.id_key_autore
join editori
on editori.id_key = libro.id_key_editore;
`)
console.log(result)
*/
export const Libri = async function() {
    //console.log('p') 
    const result = await pool.query(`SELECT 
        Titolo, generi.nome as Genere, autori.nome as Autore, editori.nome as Editore
         FROM libro
        join generi
        on generi.id_key = libro.id_key_genere
        join autori
        on autori.id_key = libro.id_key_autore
        join editori
        on editori.id_key = libro.id_key_editore;
        `)
    return result   
}