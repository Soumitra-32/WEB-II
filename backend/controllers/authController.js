const jwt = require("jsonwebtoken");
const User = require("../models/User");

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

const signToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
  );
};

// POST /api/auth/register
exports.register = async (req, res) => {
  try {
    const { name, studentId, universityEmail, department, password, role } = req.body;

    const missing = [];
    if (!name) missing.push("name");
    if (!studentId) missing.push("studentId");
    if (!universityEmail) missing.push("universityEmail");
    if (!password) missing.push("password");

    if (missing.length) {
      return res.status(400).json({
        success: false,
        message: `Missing required field(s): ${missing.join(", ")}`
      });
    }

    if (!EMAIL_REGEX.test(universityEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address"
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long"
      });
    }

    if (role && !["student", "admin"].includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Role must be either 'student' or 'admin'"
      });
    }

    const existingUser = await User.findOne({
      $or: [{ universityEmail }, { studentId }]
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "A user with this email or student ID already exists"
      });
    }

    const user = await User.create({
      name,
      studentId,
      universityEmail,
      department,
      password,
      role
    });

    const token = signToken(user);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        id: user._id,
        name: user.name,
        studentId: user.studentId,
        universityEmail: user.universityEmail,
        department: user.department,
        role: user.role
      },
      token
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/auth/login
exports.login = async (req, res) => {
  try {
    const { universityEmail, password } = req.body;

    if (!universityEmail || !password) {
      return res.status(400).json({
        success: false,
        message: "universityEmail and password are required"
      });
    }

    const user = await User.findOne({ universityEmail }).select("+password");

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    const token = signToken(user);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        id: user._id,
        name: user.name,
        universityEmail: user.universityEmail,
        role: user.role
      },
      token
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/auth/me
exports.getMe = async (req, res) => {
  res.status(200).json({ success: true, data: req.user });
};