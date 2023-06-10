import AchiveMent from "../models/acivements.js";


//create by Mukesh


export const achivementpost =async (req, res) => {
        const post = req.body;
  // console.log(req.body);
  const newPost = new AchiveMent(post);

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
    }

    export const achivementGet =async (req, res) => {
       


  try {
   const Achive =   await AchiveMent.find();

    res.status(201).json(Achive);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
    }


