import * as functions from "firebase-functions";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request: functions.Request, response: functions.Response) => {
  // functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
