import express from 'express';
import IP from 'ip';
import fs from 'fs';
import path from 'path';

const app = express();
const port = process.env.PORT || 1118;
const ip = IP.address();
const download_path = "/download";

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));

async function main() {
  app.use(express.json());

  app.get(download_path, (req, res) => {
    const dirPath = path.join(process.cwd(), "share");

    fs.readdir(dirPath, (err, files) => {
      if (err) {
        return res.status(500).send(err);
      }

      res.render('download', { files, download_path });
    });
  });

  app.get(`${download_path}/:filename`, (req, res) => {
    const fileName = req.params.filename;
    const filePath = path.join(process.cwd(), "share", fileName);

    res.download(filePath, (err) => {
      if (err) {
        return res.status(404).send("File not found");
      }
    });
  });

  app.listen(port, () => {
    console.log(`Server started on: ${ip}:${port}`);
  });
}

main();
