const { Router } = require("express");
const {
  getCompany,
  getAllCompanies,
} = require("../controllers/companies.controller");
const router = Router();

router.get("/", getAllCompanies);
router.get("/:id", getCompany);

module.exports = router;
