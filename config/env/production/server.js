module.exports = ({ env }) => ({
  url: env('HOSTING_EXTERNAL_URL', '127.0.0.1'),
})
