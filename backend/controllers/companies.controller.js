const Company = require("../models/companies.model");
const Job = require("../models/jobs.model");

const getCompany = async (req, res) => {
  const { id } = req.params;
  Company.find({ id })
    .populate("Post")
    .then((user) => res.send(user));
};

const getAllCompanies = async (req, res) => {
  const user = req.user;
  res.json({ user: user });
};

//Jobs

const searchJob = async (req, res) => {
  const { title } = req.params;
  Job.find({ title })
    .populate("Post")
    .then((user) => res.send(user));
};

const createJob = async (req, res) => {
  Job.create(req.body)
    .then((user) => res.send(user))
    .catch((err) => res.status(400).send("Error"));
};

const deleteJob = async (req, res) => {
  const { id } = req.body;
  Job.findByIdAndRemove(id).then((user) => res.send(user));
};

const updateJob = async (req, res) => {
  const { id, ...data } = req.body;
  Job.findByIdAndUpdate(id, {
    title: data.title,
    description: data.description,
  })
    .then((user) => res.send(user))
    .catch((err) => res.status(400).send(err));
};

module.exports = {
  getCompany,
  getAllCompanies,
  searchJob,
  createJob,
  deleteJob,
  updateJob,
};
