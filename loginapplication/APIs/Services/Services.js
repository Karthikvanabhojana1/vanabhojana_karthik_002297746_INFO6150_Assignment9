const User = require('../Models/model');
const bcrypt = require('bcrypt');

const createUser = async (name, email, password) => {
  
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  await newUser.save();
  return 'User created successfully';
};
const updateUser = async (email, name, password) => {

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.findOneAndUpdate({ email }, { name, password: hashedPassword });
  return 'User updated successfully';
};

const deleteUser = async (email) => {
  await User.findOneAndDelete({ email });
  return 'User deleted successfully';
};

const getAllUsers = async () => {

  console.log("inside getAllUsers");
  const users = await User.find({}, { name: 1, email: 1, password: 1 });
  return users;
};
const loginUser = async (email, password) => {
  try {
    const user = await User.findOne({ email });
  
        if (!user) {
          throw new Error('Invalid email or password');
        }
      console.log("present")
        const isPasswordMatch = await bcrypt.compare(password, user.password);
      
        if (!isPasswordMatch) {
          console.log("not matching")

          throw new Error('Invalid email or password');
        }
        console.log("matching")

        return user;
   
  } catch (error) {
    throw new Error('Invalid email or password');
  }
};

module.exports = { createUser, updateUser, deleteUser, getAllUsers, loginUser };
