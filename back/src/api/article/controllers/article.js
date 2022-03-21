'use strict';

/**
 *  article controller
 */

 const { createCoreController } = require('@strapi/strapi').factories;

 module.exports = createCoreController('api::article.article', ({ strapi }) =>  ({
 
   async find(ctx) {
     // Le code ci dessus permet le remplissage de la reponse de l'api article en fonction d'un rendu souhaité
     const entries = await strapi.entityService.findMany('api::article.article', {
       populate: '*',
     });
      
     
     return entries;
   }
    
 }));