# File Transfer

File Transfer is a simple Node.js application that allows you to host a server for downloading files from a specific directory. It uses Express.js for the server and EJS as the template engine to render the file list for download.

## Features

- Serve a list of files from a directory for download.
- Use EJS to render HTML templates.
- Handle file download requests.
- Supports serving on local IP for access from other devices on the same network.

## Requirements

- Node.js (v14 or higher recommended)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/file-transfer.git
   cd file-transfer
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. To start the server in development mode (with **nodemon** for hot-reloading):

   ```bash
   npm run dev
   ```

   For production mode:

   ```bash
   npm start
   ```

2. By default, the server will start on port `1118`. You can access it at:

   ```
   http://localhost:1118/download
   ```

   If you want to access the server from another device on the same network, use your local IP:

   ```
   http://<your-local-ip>:1118/download
   ```

3. The application serves files from the `files` directory. You can add any files to this directory, and they will be listed for download on the `/download` route.

## Project Structure

```
.
├── files              # Directory where you store the files for download
├── views              # EJS templates for rendering the file list
│   └── download.ejs   # Template for the file list page
├── server.js          # Main server file
├── package.json       # Node.js project metadata and dependencies
└── README.md          # Project documentation
```
