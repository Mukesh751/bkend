import mongoose from "mongoose";

const achiveSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      },
      year: {
        type: String,
        required: true
      },
      category: {
        type: String,
        required: true
      },
      imageUrl: {
        type: String,
        required: true
      },
     
});

const AchiveMent = mongoose.model("AchiveMent", achiveSchema);

export default AchiveMent;




// {
//     imageUrl: 'medal_image1.jpg',
//     name: 'John Doe',
//     description: 'Gold Medalist',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     year: '2021',
//     category: 'Student Achievements',
//   },

