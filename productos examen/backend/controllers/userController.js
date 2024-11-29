const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Registro de usuario
const registerUser = async (req, res) => {
  const { username, password, role } = req.body;

  try {
    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el nuevo usuario
    const newUser = await User.create({
      username,
      password: hashedPassword,
      role: role || 'client', // Si no se pasa el rol, el rol será 'client'
    });

    // Generar un token JWT
    const token = jwt.sign(
      { id: newUser.id, username: newUser.username, role: newUser.role },
      process.env.JWT_SECRET || 'your_jwt_secret', // Asegúrate de tener un JWT_SECRET en tus variables de entorno
      { expiresIn: '1h' } // Expiración del token (puedes cambiarlo si lo deseas)
    );

    res.status(201).json({
      message: 'Usuario creado exitosamente',
      user: { id: newUser.id, username: newUser.username, role: newUser.role },
      token, // Enviar el token en la respuesta
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el usuario' });
  }
};

// Inicio de sesión de usuario
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar al usuario en la base de datos
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Comparar la contraseña con la almacenada en la base de datos
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Generar un token JWT
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Inicio de sesión exitoso',
      user: { id: user.id, username: user.username, role: user.role },
      token, // Enviar el token al cliente
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
};

module.exports = {
  registerUser,
  loginUser,
};

