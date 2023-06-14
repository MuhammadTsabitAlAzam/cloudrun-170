const http = require('http')
const PORT = process.env.PORT || 9000
http
  .createServer((req, res) => {
    console.log('New connection')
    res.end('Tugas Cloud Run 123200170 Muhammad Tsabit Al Azam Kelas IF-E')
  })
  .listen(PORT, () => console.log('Listening on', PORT))
