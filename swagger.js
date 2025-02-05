const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    version: "1.0",
    title: "Willow",
    description: "Willow, the real estate API",
  },
  host: "",
  basePath: "/",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "Willow API",
      description: "CRUD operations accessing the 4 collections", //
    },
  ],
  // paths: {
  //   // "/apartments/": {
  //   //   post: {
  //   //     description: "Create a new listing",
  //   //     parameters: [
  //   //       {
  //   //         name: "body",
  //   //         in: "body",
  //   //         schema: {
  //   //           type: "object",
  //   //           properties: {
  //   //           price: {example: "120000.00"},
  //   //           listDate: {example: "2012-10-10"},
  //   //           address: {example: ""},
  //   //           residenceType: {example: ""},
  //   //           yearBuilt: {example: ""},
  //   //           sqFeet: {example: 2000},
  //   //           pricePerSqFeet: {example: 100.00},
  //   //           availability: {example: true},
  //   //           propertyDescription: {example: ""},
  //   //           lengthTimeListed: {example: 222}
  //   //           },
  //   //         },
  //   //       },
  //   //     ],
  //   //     responses: {
  //   //       200: {
  //   //         description: "OK",
  //   //       },
  //   //       201: {
  //   //         description: "Created new apartments listing",
  //   //       },
  //   //       401: {
  //   //         description: "Not Authorized",
  //   //       },
  //   //       500: {
  //   //         description: "Server Error",
  //   //       },
  //   //     },
  //   //   },
  //   // },
  //   // "/apartments/{apartmentsId}": {
  //   //   get: {
  //   //     description: "Find and return specific apartments listing, ID required",
  //   //     parameters: [
  //   //       {
  //   //         name: "id",
  //   //         in: "path",
  //   //         required: true,
  //   //         type: "string",
  //   //       },
  //   //     ],
  //   //     responses: {
  //   //       200: {
  //   //         description: "OK",
  //   //       },
  //   //       401: {
  //   //         description: "Not Authorized",
  //   //       },
  //   //       500: {
  //   //         description: "Server Error",
  //   //       },
  //   //     },
  //   //   },
  //   //   put: {
  //   //     description: "Updates specific contact by id",
  //   //     parameters: [
  //   //       {
  //   //         name: "id",
  //   //         in: "path",
  //   //         required: true,
  //   //         type: "string",
  //   //       },
  //   //       {
  //   //         name: "body",
  //   //         in: "body",
  //   //         schema: {
  //   //           type: "object",
  //   //           properties: {
  //   //             price: {
  //   //               example: "any",
  //   //             },
  //   //             listDate: {
  //   //               example: "any",
  //   //             },
  //   //             address: {
  //   //               example: "any",
  //   //             },
  //   //             residenceType: {
  //   //               example: "any",
  //   //             },
  //   //             yearBuilt: {
  //   //               example: "any",
  //   //             },
  //   //             sqFeet: {
  //   //               example: "any",
  //   //             },
  //   //             pricePerSqFeet: {
  //   //               example: "any",
  //   //             },
  //   //             availability: {
  //   //               example: "any",
  //   //             },
  //   //             propertyDescription: {
  //   //               example: "any",
  //   //             },
  //   //             lengthTimeListed: {
  //   //               example: "any",
  //   //             },
  //   //           },
  //   //         },
  //   //       },
  //   //     ],
  //   //     responses: {
  //   //       200: {
  //   //         description: "OK",
  //   //       },
  //   //       204: {
  //   //         description: "Updated apartments listing",
  //   //       },
  //   //       401: {
  //   //         description: "Not Authorized",
  //   //       },
  //   //     },
  //   //   },
  //   //   delete: {
  //   //     description: "Deletes specific apartments listing by id",
  //   //     parameters: [
  //   //       {
  //   //         name: "id",
  //   //         in: "path",
  //   //         required: true,
  //   //         type: "string",
  //   //       },
  //   //     ],
  //   //     responses: {
  //   //       200: {
  //   //         description: "OK",
  //   //       },
  //   //       401: {
  //   //         description: "Not Authorized",
  //   //       },
  //   //     },
  //   //   },
  //   // },
  //   // "/apartments/findByAvailability": {
  //   //   get: {
  //   //     description:
  //   //       "Find and return all apartments listings by either available or unavailable",
  //   //     parameters: [
  //   //       {
  //   //         name: "availability",
  //   //         in: "path",
  //   //         required: true,
  //   //         type: "string", //boolean?
  //   //       },
  //   //     ],
  //   //     responses: {
  //   //       200: {
  //   //         description: "OK",
  //   //       },
  //   //       401: {
  //   //         description: "Not Authorized",
  //   //       },
  //   //       500: {
  //   //         description: "Server Error",
  //   //       },
  //   //     },
  //   //   },
  //   // },
  //   // "/apartments/{apartmentsId}/uploadImage": {
  //   //   post: {
  //   //     description: "Add image to existing listing",
  //   //     parameters: [
  //   //       {
  //   //         name: "id",
  //   //         in: "path",
  //   //         required: true,
  //   //         type: "string",
  //   //       },
  //   //       {
  //   //         name: "body",
  //   //         in: "body",
  //   //         schema: {
  //   //           type: "object",
  //   //           properties: {
  //   //             apartmentsID: {
  //   //               example: "any",
  //   //             },
  //   //           },
  //   //         },
  //   //       },
  //   //     ],
  //   //     responses: {
  //   //       200: {
  //   //         description: "OK",
  //   //       },
  //   //       201: {
  //   //         description: "Created new apartments listing",
  //   //       },
  //   //       401: {
  //   //         description: "Not Authorized",
  //   //       },
  //   //       500: {
  //   //         description: "Server Error",
  //   //       },
  //   //     },
  //   //   },
  //   // },

  // },
  // securityDefinitions: {
  //   Authorization: {
  //     type: "apiKey",
  //     name: "Authorization",
  //     in: "header",
  //     description: "Authentication token (Bearer)",
  //     example: "Bearer <your token>",
  //   },
  // }, // by default: empty object
  definitions: {}, // by default: empty object (Swagger 2.0)
  components: {}, // by default: empty object (OpenAPI 3.x)
};
const outputFile = "./swagger.json";
const endpointsFiles = ["./index"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
  require("./index");
});
