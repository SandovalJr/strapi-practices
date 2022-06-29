'use strict';

/**
 *  product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product',
    ({ strapi }) => ({

        // CREAR PRODUCT 1
        // async create(ctx, next) {
        //     const response = await super.create(ctx);
        //     return response
        // }

        async create(ctx, next) {
            //  crearemos la orden (sin confirmar aun)
            const producto = await strapi.entityService.create("api::product.product", {
                data: {
                    // relaciones
                    name: ctx.request.body.data.name,
                    product_code: ctx.request.body.data.product_code,
                }
            })
            console.log(producto);

            return { producto }
        }


        
    })




);
