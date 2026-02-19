import User from "../models/UserModel.js";

export const signupUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email });
    const registeredUser = await User.register(newUser, password);
    res.json("User registered successfully");
    console.log(registeredUser);
  } catch (error) {
    res.json(error.message);
  }
};

export const fetchData = async (req, res) => {
  try {
    const user = await User.find({});
    res.json(user);
  } catch (error) {
     res.status(500).json({ message: "Server Error" });
  }
};
