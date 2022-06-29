module.exports = {
    routes: [
        {
            // METODO QUE USO
            method: "POST",
            //  LA RUTA PARA ACCEDER A DICHO METODO
            path: "/orders/confirm/:id",
            // SE PONE EL CONTROLADOR QUE USA
            // controlador name (nombre de la coleccion) - nombre del archivo controlador
            handler: "order.confirmarOrder",
        }
    ]
};