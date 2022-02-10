import express, { Request, Response } from "express";
import NewStudent from "../schemas/newStudentSchema";
const router = express.Router();

// create method
router.post("/newStudent", async (req: Request, res: Response) => {
  try {
    const students = new NewStudent(req.body);
    const data = await students.save();
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
router.get("/students", async (req: Request, res: Response) => {
  try {
    const data = await NewStudent.find({});
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
router.put("/studentEdit/:id", async (req: Request, res: Response) => {
  try {
    const data = await NewStudent.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          fullName: req.body.fullName,
          roll: req.body.roll,
          age: req.body.age,
          class: req.body.class,
          hallName: req.body.hallName,
          status: req.body.status,
          shift: req.body.shift,
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

// update many
router.patch("/students/updateAll", async (req: Request, res: Response) => {
  try {
    const data = await NewStudent.updateMany(
      { _id: { $in: req.body.checkIds } },
      {
        $set: {
          status: req.body.statusValue,
        },
      },
      { multi: true }
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
router.delete("/studentDetete/:id", async (req: Request, res: Response) => {
  try {
    const data = await NewStudent.deleteOne({ _id: req.params.id });
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
