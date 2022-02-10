import express, { Request, Response } from "express";
import Serve from "../schemas/serveSchema";
const router = express.Router();

// create method
router.post("/serveFoods", async (req: Request, res: Response) => {
  try {
    const newServe = new Serve(req.body);
    const data = await newServe.save();
    res.status(200).json({
      data,
    });
  } catch (error) {
    res.status(500).json({
      error: "There was a server side error!",
    });
  }
});

// read method
router.get("/serve/students", async (req: Request, res: Response) => {
    try {
      const data = await Serve.find({});
      res.status(200).json({
        data,
      });
    } catch (error) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    }
  });

export default router;
