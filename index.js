const server = require('./api/server');
const PORT = process.env.PORT || 5000;

//sanity check
server.get('/', (req, res) => {
  res.send('api alive...')
});

server.listen(PORT, () => console.log(`\n=== API Listening on port ${PORT}===\n`));