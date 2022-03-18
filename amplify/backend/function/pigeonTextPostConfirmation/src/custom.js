
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
// exports.handler = async (event, context) => {
//   //save new user to dynamoD
//   return event
// };

exports.handler = async (event) => {
  //save new user to dynamoD
  callback(null, event);
};

