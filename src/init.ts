import Server from "./bootstrap/server.bootstrap";
import Database from "./bootstrap/database.bootstrap";
import app from "./app";

const start = async () => {
  const database = new Database();
  try {
    const server = new Server(app);
    await server.initialize();
    await database.initialize();
  } catch (error) {
    database.disconnect();
    console.log(error);
  }
};

start();
