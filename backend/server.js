import express from 'express';
import "dotenv/config.js";

const app = express();

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env, MONGO_URI);
    console.log("Connected to the database successfully.");
  }catch(error) {
    console.error("Database connection failed:", error);
  }
}

app.listen(3000, () => {
  console.log('Server is running on port 3000. CTRL + C to stop.');
  process.exit(1);
});