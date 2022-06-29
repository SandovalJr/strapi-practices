'use strict';
const utils = require("@strapi/utils")
const { PolicyError } = utils.errors;

/**
 * `is-owner` policy.
 */

module.exports = async (policyContext, config, { strapi }) => {
  // Add your own logic here.
  // strapi.log.info('In is-owner policy.');

  // queremos que se confirme si la orden es del dueño que la esta creando
  const { id } = policyContext.request.params;
  const user = policyContext.state.user;

  // const canDoSomething = true;
  const order = await strapi.entityService.findOne("api::order.order", id, {
    // ponemos el id al que nos referimos en la orden
    populate: ["owner"]

  });
  // console.log(order);


  if (order.owner.id === user.id) {
    return true
  }


  throw new PolicyError("You're not allowed to do this")
};
