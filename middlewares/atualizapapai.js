const seguranca = {
  nome: "victor",
  senha: "brendinho",
};

function atualizapapai(req, res, next) {
  const { nome, senha } = req.body;
  const token = req.headers.auth;

  if (token === "salve") {
    return next({ code: 401, message: "retornei o next" });
  }

  if (!token || token === undefined)
    return res.status(401).json({ message: "cadê o token porra" });

  if (token !== seguranca.senha) {
    return res.status(401).json({ message: "token errado" });
  }

  if (!nome || !senha) {
    return res.status(401).json({ message: "Tá faltando coisa boy" });
  }

  if (nome !== seguranca.nome || senha !== seguranca.senha) {
    return res.status(401).json({ message: "nome ou senha inválidos!" });
  }

  next();
}

module.exports = atualizapapai;
