const  express  =  require ( ' express ' );
const  PORT  =  proceso . env . Puerto  ||  3001 ;
const  knex  =  require ( ' ./knex/knex.js ' );
const  app  =  express (); aplicación . obtener ( ' / tareas ' , ( req , res ) => {
   //use la variable knex arriba para crear consultas dinámicas 
}); aplicación . listen ( PORT , () => {
   console . log ( ` Listening on port: $ { PORT } ` ); 
});