import mongoose from "mongoose";
import Job from "./models/Job.js";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = "mongodb://localhost:27017/skillmatch";

const sampleJobs = [
  { title: "React Native Developer", company: "Skill-Match", location: "Remote", salary: "₹80k", category: "Developer", type: "Full-time" },
  { title: "UI/UX Designer", company: "Creative Studio", location: "New York", salary: "₹70k", category: "Designer", type: "Contract" }
];

mongoose.connect(MONGO_URI)
  .then(async () => {
    await Job.insertMany(sampleJobs);
    console.log("✅ Data Seeded!");
    process.exit();
  })
  .catch(err => console.log(err));