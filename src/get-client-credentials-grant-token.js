const got = require("got")

exports.getToken = ({tokenEndpoint, clientId, clientSecret, scope}) => {
  const clientCredsBase64 = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64"
  )
  return got.post(tokenEndpoint, {
    headers: {
      Authorization: `Basic ${clientCredsBase64}`,
    },
    form: {
      grant_type: "client_credentials",
      scope,
    },
    responseType: 'json'
  })
}
