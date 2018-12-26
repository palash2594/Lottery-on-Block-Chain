// var generateRSAKeypair = require("generate-rsa-keypair");
//
// var pair = generateRSAKeypair("hello");
//
// console.log(pair.private); // String with the private key in PEM format
// console.log(pair.public); // String with the public key in PEM format

var pubkey =
  "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAz17w5UWNxH5CB//mDwrlZEMxtT+JVoxYEGufM180VKi5EDBqHFeV4XiR5riE35UZv+HzkF4VNv5bcp3AeN42UrvnuT3pXaxhbwJ90PWbp/vnW0sRx9ItaxU5qM9+J30yONtZjTOwflkxCuERHfYz3he9wPF+kOeVUENbpTIGea6oM3mliTBfh3eFvEjk1DZRRfN+A+sWtMc+0oTPfjtJPnNzTMhAL3ZiZn1wkEWBruQUjbkqxGLnU5Z9SrjRJ+sWcS+C0grc5HeBxE2t8yO/bIFiHWtbt0VPWM2cRPCaHAlm3zhLTV7IyICfTLsn9DBL29AtWZPPj15ABdzqclXcOQIDAQAB";

var prikey =
  "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDPXvDlRY3EfkIH/+YPCuVkQzG1P4lWjFgQa58zXzRUqLkQMGocV5XheJHmuITflRm/4fOQXhU2/ltyncB43jZSu+e5PeldrGFvAn3Q9Zun++dbSxHH0i1rFTmoz34nfTI421mNM7B+WTEK4REd9jPeF73A8X6Q55VQQ1ulMgZ5rqgzeaWJMF+Hd4W8SOTUNlFF834D6xa0xz7ShM9+O0k+c3NMyEAvdmJmfXCQRYGu5BSNuSrEYudTln1KuNEn6xZxL4LSCtzkd4HETa3zI79sgWIda1u3RU9YzZxE8JocCWbfOEtNXsjIgJ9Muyf0MEvb0C1Zk8+PXkAF3OpyVdw5AgMBAAECggEAeTdxL0QSE6sOJCj0rRRcdNhGZUFnoXzWOXr/i4L6TwZ1bz4tuLWF+k+FUc3Idf1tGNoWiuxEEGpswDnweXbDYGdQk9rZ4BTUu5REQXJgc7hvS9E86oY0YGT+2Gu5vZGUWuH1nfF6GNFANrDLVa1GMmvEUtWXe1Kz2EAXgSAV4uglMi9bd2TbKIXr2LqKh0QbshPHOPJ90leoi7/6ukO7eGqshDK0hkchk+mVQJ6pQJjFzn37SnKUgevM6Z3WRNlUccugjtTqPXBpO0hKmqTC9mA0cjs3Q0d2SnxEZB9XGNeSktMGGHEXQfiD/Np6P0+qvMoJ7fCiQdh8y3ZAG1VFAQKBgQDmovkC12cWjyaBGNF//p4NokJkdpcwniU4oeSvUGUrtoicIvkZISOsSmqsUSNWF4LyhLN+dQaIhmcP/dfhpXiU78+11M+QRNzo9MroNEYXgL0AiTcirn7PYByfzM9PTbpeg7jvK2pPv5R3hiqY7ZBlMNLzXzpPeHhuGRUQFh2c2QKBgQDmLPns3zY2e9BxvUqqinPU2wvmT/2uw9w3VkcjZ7J1lB5epS4Zc1MiIcyUQ8/SmUU5YB3bx5Yq5t7pHGYV0NXyPQS3QuTA9O9i/5nvTD0JtjgXAzxs9DqBG5qMFJADXK6AtpwD1x3K72kC89y9EdoO/LKXa2TMlLKTBdpmWRweYQKBgQC21s5XzVIBVVzuDTHQqZa9Mjw2DrnPJiBV5Co6PZ7m558nQKZ/oID6TkiA8RX1Y1BBWKg/gSC7zOkZiWDClv6f+/mLqfke4yjKWX4eVYqXiUzMhvs5uGH5nrUyjhhvQyyTTxOmL6HpNPTLSIauk+7b+bfSjlTYuaWniqTjCtVRCQKBgQCzoeIidEjQ2GvieAHvekHPmmt9AGxQmdYg8ZpvDRx/GmthHbQOdKwqdQo9o3ZrOuaFUne679ZIAQlyD5Gz8NknRWuKwg/Ybs7sCeJOmMcB701y2DmuJiQKYkqIi/ugRBKDrP+xF47Os2zWuw5IF8h/7cJK3as65ck/aE/7lAuXwQKBgFMB+h619py3ujz7B2VweBpaW84H/s/oM3h+sTVI9bFCb2WtmIATe1R2JHGBrl0JP6xCEp9ZiORK5HSbu7LBbQiDUvZYT4eDgJX7f8c7TZLLGq89aV+2mARpyu81vLB5iGfobdk/MlBQ5q9I3auawBHu9bzavsVgPsiPt9rOUQZx";

var encrypt = new JSEncrypt();
encrypt.setPublicKey(pubkey);
var encrypted = encrypt.encrypt("Hello");

// Decrypt with the private key...
var decrypt = new JSEncrypt();
decrypt.setPrivateKey(prikey);
var uncrypted = decrypt.decrypt(encrypted);

// Now a simple check to see if the round-trip worked.
if (uncrypted == "Hello") {
  alert("It works!!!");
} else {
  alert("Something went wrong....");
}
