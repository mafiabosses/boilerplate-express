import openapi from 'openapi-validator-middleware'
import config from '#config'

const { validate } = openapi

openapi.init(config.openApiPath, {
  ajvConfigParams: {
    removeAdditional: true,
  },
  formats: [
    // minimum eight characters, at least one letter and one number
    { name: 'password', pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ },
  ],
})

export default validate
