function authValidation(req, res, next) {
  const { username, password } = req.headers;
  const token = req.headers.authorization;

  if (!token || token === undefined)
    return next({ code: 401, message: "Faltando token de autenticação!" });

  if (!username || !password) {
    res.status(401).json({ message: "Username ou senha indefinidos!" });
  }

  if (username !== "victor" || password !== "salve") {
    res.status(401).json({ message: "Username ou senha inválidos!" });
  }

  next();
}

module.exports = { authValidation };
