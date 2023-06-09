import postgres from 'postgres'


const db = postgres({
    user: "postgres",
    password: 'Mimurial20',
    host: "localhost",
    port: 5432,
    database: "LESSONS"
})

export default db