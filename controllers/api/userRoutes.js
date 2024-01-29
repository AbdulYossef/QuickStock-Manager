const User = require("../../models/user.model");

const createUser = async (req, res) => {
  try {
    const existingUser = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

<<<<<<< HEAD
// Route to add a new user
router.post('/users', async (req, res) => {
    try {
        // Check if the username already exists
        const existingUser = await User.findOne({
            where: {
                username: req.body.username,
            },
        });

        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // If username is unique, create a new user
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password,
        });
        req.session.save(()=>{
            req.session.user_id=newUser.id 
            req.session.username=newUser.username
            req.session.logged_in=true
            res.status(201).json(newUser);
        })

        // Respond with the newly created user
       
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
=======
    if (existingUser) {
      return res.status(400).json({
        message: "Username already exists",
      });
>>>>>>> 54b5351c0357601abd772c50c2c8b78901b59c94
    }

    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    res.status(201).json({ newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Route to handle user login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if the user exists with the provided username
        const user = await User.findOne({
            where: {
                username: username,
            },
        });

        // If the user does not exist, return an error
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Check if the provided password matches the stored password
        const validPassword = await user.checkPassword(password);

        // If the password is invalid, return an error
        if (!validPassword) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // If both username and password are valid, consider the user logged in
        // You can create and send a token here for authentication purposes
        res.status(200).json({ message: 'Login successful' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Test route to get all users
const getAllUsers = (req, res) => {};

module.exports = {
  createUser,
  getAllUsers,
};
