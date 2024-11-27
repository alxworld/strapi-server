module.exports = ({ env }) => ({
  url: env('HOSTING_EXTERNAL_URL', ''),
})
