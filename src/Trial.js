const NodeRSA = require("node-rsa");
const key = new NodeRSA({ b: 512 });

const text = "Hello RSA!";
const encrypted = key.encrypt(text, "base64");
console.log("encrypted: ", encrypted);
const decrypted = key.decrypt(encrypted, "utf8");
console.log("decrypted: ", decrypted);

// var rsa = require("node-rsa");
// var key = new rsa({ });
//
// key.importKey(
//   {
//     n: Buffer.from(
//       "0086fa9ba066685845fc03833a9699c8baefb53cfbf19052a7f10f1eaa30488cec1ceb752bdff2df9fad6c64b3498956e7dbab4035b4823c99a44cc57088a23783",
//       "hex"
//     ),
//     e: 65537
//   },
//   "components-public"
// );
//
// const text1 = "Hello RSA!";
// const encrypted = key.encrypt(text1, "base64");
// console.log("encrypted: ", encrypted);
// const decrypted = key.decrypt(encrypted, "utf8");
// console.log("decrypted: ", decrypted);

// console.log(k2);
