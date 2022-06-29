'use strict';

/**
 *  order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order',
    // se crea una funcion que retorna un objeto    
    ({ strapi }) => ({
        confirmarOrder: async (ctx, next) => {
            const { id } = ctx.request.params;
            // sacar el usuario que se esta logeando
            console.log(ctx.state.user);
            return id;
        }
    })
);
