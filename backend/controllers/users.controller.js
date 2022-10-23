const User = require("../models/users.model");
const Education = require("../models/educations.model");

const getUser = async (req, res) => {
  const { id } = req.params;
  User.find({ id })
    .populate("Post")
    .then((user) => res.send(user));
};

const getAllUsers = async (req, res) => {
  const user = req.user;
  res.json({ user: user });
};

const updateUser = async (req, res) => {
  const { id, ...data } = req.body;
  User.findByIdAndUpdate(id, {
    name: data.name,
    email: data.email,
    password: data.password,
  })
    .then((user) => res.send(user))
    .catch((err) => res.status(400).send(err));
};

const deleteUser = async (req, res) => {
  const { id } = req.body;
  User.findByIdAndRemove(id).then((user) => res.send(user));
};

const addOrUpdateEducation = async (req, res) => {
  const { id, ...data } = req.body;
  Education.findByIdAndUpdate(id, {
    school: data.school,
    degree: data.degree,
    field: data.field,
    grade: data.grade,
    startDate: data.startDate,
    endDate: data.endDate,
  })
    .then((user) => res.send(user))
    .catch((err) => res.status(400).send(err));
};

module.exports = {
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
  addOrUpdateEducation,
};
