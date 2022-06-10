const { Router } = require("express");

const atualizoupapai = Router();

const database = [
  {
    name: "nhg",
    members: 39,
  },
];

atualizoupapai.post("/", (req, res) => {
  const { nome } = req.body;
  return res.status(201).json({
    message: "deu bom",
    data: [...database, { name: nome, members: 40 }],
  });
});

module.exports = atualizoupapai;
