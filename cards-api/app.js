const hapi = require('hapi');
const hapiCors = require('hapi-cors');
const http = require('https');
var request = require('request');
const app = new hapi.Server();
app.connection({ port: 3000 });
app.register(hapiCors).then(() => {
  app.route([
    {
      path: '/',
      method: 'GET',
      handler: (req, reply) => {
        const url = req.query.url;
        var options = {
          url,
          headers: {
            Authorization:
              'Bearer MzFlYWE0NjAtY2FiMi0xMWU3LWE3YzAtMDA1MDU2OWE3MzA1OmV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUowZVhCbElqb2lUMEYxZEdnaUxDSnBZWFFpT2pFMU1UQTRNalV6TnpRc0ltVjRjQ0k2TVRVeE1USTFOek0zTkN3aVlYVmtJam9pWWpZMk1HRTNaRFFpTENKcGMzTWlPaUphZFhBdWJXVWdSMkYwWlhkaGVTSXNJbk4xWWlJNklqTXhaV0ZoTkRZd0xXTmhZakl0TVRGbE55MWhOMk13TFRBd05UQTFOamxoTnpNd05TSXNJbXAwYVNJNklqZzBaamhpTWpVd0xXTmhZakl0TVRGbE55MWhOMk13TFdNeE56WXlaRFl3TlRRME5pSjkuMEVOemdmWlBLcEpTOEUxc05GeTdwWXd5MTRraUVEMi1yaUtQenNSUFVtZw==',
            'developer-key': '28f9b5c9063a29601340f1a9a00507569ad7fac4',
          },
        };

        function callback(error, response, body) {
          if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            return reply(info);
          }
          reply(error);
        }

        request(options, callback);
      },
    },
  ]);

  app.start(() => console.log('runnig'));
});
