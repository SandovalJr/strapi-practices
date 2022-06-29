'use strict';

/**
 *  order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order',
    // se crea una funcion que retorna un objeto    
    ({ strapi }) => ({
        // CONFIRMAR ORDEN 
        confirmarOrder: async (ctx, next) => {
            const { id } = ctx.request.params;
            // sacar el usuario que se esta logeando
            const user = ctx.state.user;
            const order = await strapi.entityService.findOne("api::order.order", id);

            await strapi.entityService.update("api::order.order", id, {

                data: {
                    confirmed: true,
                    date_confirmed: new Date()
                }
            })

            // send an email after confirmation
            return {
                message: "confirmed",
            }
        },

        // CREAR LA ORDEN
        // definimos una funcion , mientras antes definimos una clave que se asigna
        async create(ctx, next) {
            const user = ctx.state.user;

            //  crearemos la orden (sin confirmar aun)
            const order = await strapi.entityService.create("api::order.order", {
                data: {
                    // relaciones
                    products: ctx.request.body.data.products,
                    owner: user.id
                }
            })

            return { order }
        }


    })
);
