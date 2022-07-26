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
        //  CREAR
        create: async (ctx, next) => {
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
        },

        // ELIMINAR PRODUCTO
        delete: async (ctx, next) => {
            const { id } = ctx.request.params;
            const productoEliminado = await strapi.entityService.delete("api::product.product", id)
            // const productoEliminado = await strapi.entityService.delete("api::product.product")
            return productoEliminado
        },
        // ACTUALIZAR PRODUCTO
        update: async (ctx, next) => {
            const { id } = ctx.request.params
            console.log(id);

            // const dataupdate = {
            //     name: ctx.request.body.data.name,
            //     product_code: ctx.request.body.data.product_code
            // }
            // console.log(dataupdate);
            const updateproduct = await strapi.entityService.update("api::product.product", id, {
                data: {
                    name: ctx.request.body.data.name,
                    product_code: ctx.request.body.data.product_code
                }
            })
            return updateproduct
        },
        // RETORNAR INFORMACION PRODUCTO
        findOne: async (ctx, next) => {
            const { id } = ctx.request.params
            const producto = await strapi.entityService.findOne("api::product.product", id)
            // console.log(producto);
            return producto
        },

        // crear codigo qr y guardar la ruta en la bd
        qrCode: async (ctx, next) => {
            const { id } = ctx.request.params
            const QRCode = require('qrcode');

            const data = await strapi.entityService.findMany("api::product.product",
                { filters: { id: id }, populate: ['order'] })

            const jsondata = JSON.stringify(data[0]);

            // qr code 
            // const QR = async info => {
            //     try {
            //         console.log(await QRCode.toString(info, { type: 'terminal' }))
            //     } catch (err) {
            //         console.error(err)
            //     }
            // }

            // QR(jsondata);

            // data del qr encode
            const generateQR = async info => {
                try {
                    var qrdata = await QRCode.toDataURL(info)
                    qrdata.toString();
                    console.log(qrdata)
                    let updateData = await strapi.entityService.update("api::product.product", id, {
                        data: {
                            qr: qrdata
                        }
                    })
                    return updateData

                } catch (err) {
                    console.error(err)
                }
            }

            

            return generateQR(jsondata)
        }

    })




);
