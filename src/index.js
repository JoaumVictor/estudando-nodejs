const express = require("express");
const { atualizapapai } = require("../middlewares/index");
const atualizoupapai = require("../routes/atualizoupapai");

const app = express();

const database = {
  name: "nhg",
  members: 39,
};

app.use(express.json());

app.get("/medepapai", (_req, res) => {
  return res.status(200).json({ message: "Toma ai teu database", database });
});

app.use("/atualizepapai", atualizapapai, atualizoupapai);
app.use(deumerdapapai);

app.listen(3000);
