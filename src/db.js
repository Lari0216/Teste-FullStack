import { Pool } from "pg"; 

const pool = new Pool({
    user: "postgres", 
    host: "localhost", 
    database: "testefullstack",
    password: "senai",
    port: 5432
}); 

export default pool; 