import { app } from "./app";
import sequelize from "../db";

const start = async () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("database connected");
    })
    .catch((e) => {
      console.log(e);
    });

  app.listen(3000, () => {
    console.log("listening on port 3000");
  });
};

start();
