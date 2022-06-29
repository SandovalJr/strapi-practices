const qs = require('qs');



const query = qs.stringify({

  pagination: {
    page: 1,
    pageSize: 2
  }

});

// Sorte para acomodar 
// se pone :desc para desendiente
// se pone :asc para acendente
// const query = qs.stringify({
//   sort: ["title:asc","publishedAt:asc"],
// });

// para que muestre ciertos cambios
// const query = qs.stringify({
//  populate: ["miniature","author"]
//   });


// de tal fecha a tal fecha
// const query = qs.stringify({
//     filters: {
//       $and: [
//         {
//           publishedAt: {
//             $gt: '2022-06-25T19:00:00.305Z',
//           },
//         },
//         {
//           publishedAt: {
//             $lt: '2022-06-25T19:55:56.069Z',
//           },
//         },
//       ],
//     },
//   });

console.log(query);