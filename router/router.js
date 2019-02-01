import express from "express";

const router = express.Router();
const offices = require("../controllers/offices");

router.get("/offices/:id", offices.getOffice);
router.get("/offices/", offices.getOffices);
router.post("/offices/", offices.createOffice);

export default router;
