const roleMiddleware = (...allowedRoles) => {
  return (req, res, next) => {
    const user = req.user;

    if (!user || !user.tipoUsuario) {
      return res.status(403).json({ error: 'Usuário não autorizado.' });
    }

    if (!allowedRoles.includes(user.tipoUsuario)) {
      return res.status(403).json({ error: 'Acesso negado para seu perfil.' });
    }

    next();
  };
};

export default roleMiddleware;
