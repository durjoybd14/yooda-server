import express, { Request, Response } from "express";
import NewFood from "../schemas/newFoodSchema";
const router = express.Router();

// create method
router.post("/newFood", async (req: Request, res: Response) => {
  try {
    const newFoodItem = new NewFood(req.body);
    const data = await newFoodItem.save();
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
router.get("/foods", async (req: Request, res: Response) => {
  try {
    const data = await NewFood.find({});
    res.status(200).json({
      data,
    });
  } catch (error) {
    res.status(500).json({
      error: "There was a server side error!",
    });
  }
});

// update method
router.put("/foodEdit/:id", async (req: Request, res: Response) => {
  try {
    const data = await NewFood.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          price: req.body.price,
        },
      },
      {
        new: true,
        // useFindAndModify: false,
      }
    );
    res.status(200).json({
      data,
    });
  } catch (error) {
    res.status(500).json({
      error: "There was a server side error!",
    });
  }
});

// Delete method
router.delete("/foodDetete/:id", async (req: Request, res: Response) => {
  try {
    const data = await NewFood.deleteOne({ _id: req.params.id });
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
