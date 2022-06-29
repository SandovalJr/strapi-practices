module.exports = {
    routes: [
        {
            // METODO QUE USO
            method: "POST",
            //  LA RUTA PARA ACCEDER A DICHO METODO
            // el id es el de la orden
            path: "/orders/confirm/:id",
            // SE PONE EL CONTROLADOR QUE USA
            // controlador name (nombre de la coleccion) - nombre del archivo controlador
            handler: "order.confirmarOrder",
            // POLICYS (son cosas que debe cumplir y si no las cumple no pasa a lo siguiente)
            // se adjunta a la politica de crear pedido, si no lo hace lo regresa
           
            config: {
                policies: [
                    "api::order.is-owner"
                ]
            }
        }
    ]
};