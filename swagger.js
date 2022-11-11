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
  paths: {
    "/house/": {
      post: {
        tags: "/house",
        description: "Create a new listing",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            type: "string",
          },
          {
            name: "body",
            in: "body",
            schema: {
              type: "object",
              properties: {
                price: {
                  example: "any",
                },
                listDate: {
                  example: "any",
                },
                address: {
                  example: "any",
                },
                residenceType: {
                  example: "any",
                },
                yearBuilt: {
                  example: "any",
                },
                sqFeet: {
                  example: "any",
                },
                pricePerSqFeet: {
                  example: "any",
                },
                availability: {
                  example: "any",
                },
                propertyDescription: {
                  example: "any",
                },
                lengthTimeListed: {
                  example: "any",
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          201: {
            description: "Created new house listing",
          },
          401: {
            description: "Not Authorized",
          },
          500: {
            description: "Server Error",
          },
        },
      },
    },
    "/house/{houseId}": {
      get: {
        tags: "/house",
        description: "Find and return specific house listing, ID required",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          401: {
            description: "Not Authorized",
          },
          500: {
            description: "Server Error",
          },
        },
      },
      put: {
        tags: "/house",
        description: "Updates specific contact by id",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            type: "string",
          },
          {
            name: "body",
            in: "body",
            schema: {
              type: "object",
              properties: {
                price: {
                  example: "any",
                },
                listDate: {
                  example: "any",
                },
                address: {
                  example: "any",
                },
                residenceType: {
                  example: "any",
                },
                yearBuilt: {
                  example: "any",
                },
                sqFeet: {
                  example: "any",
                },
                pricePerSqFeet: {
                  example: "any",
                },
                availability: {
                  example: "any",
                },
                propertyDescription: {
                  example: "any",
                },
                lengthTimeListed: {
                  example: "any",
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: OK,
          },
          204: {
            description: "Updated house listing",
          },
          401: {
            description: "Not Authorized",
          },
        },
      },
      delete: {
        tags: "/house",
        description: "Deletes specific house listing by id",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          401: {
            description: "Not Authorized",
          },
        },
      },
    },
    "/house/findByAvailability": {
      get: {
        tags: "/house",
        description:
          "Find and return all house listings by either available or unavailable",
        parameters: [
          {
            name: "availability",
            in: "path",
            required: true,
            type: "string", //boolean?
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          401: {
            description: "Not Authorized",
          },
          500: {
            description: "Server Error",
          },
        },
      },
    },
    "/house/{houseId}/uploadImage": {
      post: {
        tags: "/house",
        description: "Add image to existing listing",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            type: "string",
          },
          {
            name: "body",
            in: "body",
            schema: {
              type: "object",
              properties: {
                houseID: {
                  example: "any",
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          201: {
            description: "Created new house listing",
          },
          401: {
            description: "Not Authorized",
          },
          500: {
            description: "Server Error",
          },
        },
      },
    },
    
    securityDefinitions: {
      Authorization: {
        type: "apiKey",
        name: "Authorization",
        in: "header",
        description: "Authentication token (Bearer)",
        example: "Bearer <your token>",
      },
    }, // by default: empty object
    definitions: {}, // by default: empty object (Swagger 2.0)
    components: {}, // by default: empty object (OpenAPI 3.x)
  },
};
const outputFile = "./path/swagger-output.json";
const endpointsFiles = ["index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
