exports.handler = async (event, context) => {
  // your server-side functionality

  console.log(`event: ${JSON.stringify(event, null, 2)}`);
  console.log(`JSON.parse(event.body): '${JSON.parse(event.body)}'`);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
};

// event:
// {
//   "path": "Path parameter (original URL encoding)",
//   "httpMethod": "Incoming request’s method name",
//   "headers": {Incoming request headers},
//   "queryStringParameters": {Query string parameters},
//   "body": "A JSON string of the request payload",
//   "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encoded"
// }

// example return value:
// return {
//   statusCode: 200,
//   body: JSON.stringify({ message: "Hello World" }),
// };
