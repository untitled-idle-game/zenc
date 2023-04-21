"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var functions = require("firebase-functions");
// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.helloWorld = functions.https.onRequest(function (request, response) {
    // functions.logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase!");
});
