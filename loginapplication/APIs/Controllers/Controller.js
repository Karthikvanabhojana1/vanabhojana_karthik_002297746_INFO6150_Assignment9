const userService = require('../Services/Services');

const createUser = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    const result = await userService.createUser(name, email, password);
    res.json({ success: true, message: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateUser = async (req, res) => {
  const { email, name, password } = req.body;

  try {
    const result = await userService.updateUser(email, name, password);
    res.json({ success: true, message: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { email } = req.body;
  try {
    const result = await userService.deleteUser(email);
    res.json({ success: true, message: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json({ success: true, users });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userService.loginUser(email, password);
    res.json({ success: true, user });
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};

module.exports = { createUser, updateUser, deleteUser, getAllUsers, loginUser };

