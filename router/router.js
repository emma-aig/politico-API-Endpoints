import express from "express";

const router = express.Router();
const offices = require("../controllers/offices");

router.get("/offices/:id", offices.getOffice);

export default router;
