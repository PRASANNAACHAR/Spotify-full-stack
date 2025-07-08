// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import songRouter from './src/routes/songRoute.js';
// import connectDB from './src/config/mongodb.js';
// import connectCloudinary from './src/config/cloudinary.js';
// import albumRouter from './src/routes/albumRoute.js';


// // app config
// const app = express();
// const port = process.env.PORT || 4000;
// connectDB();
// connectCloudinary();


// // middlewares
// app.use(express.json());
// app.use(cors());



// // initialazing routes
// app.use("/api/song",songRouter);
// app.use('/api/album',albumRouter)

// app.get('/',(req,res)=> res.send("API WORKING"))

// app.listen(port,()=>console.log(`server started on ${port}`));



import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRoute.js';

// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// ✅ Correct CORS setup — allow only your frontend domain
app.use(cors({
  origin: 'https://spotify-full-stack-ten.vercel.app', // Your frontend URL (no trailing slash!)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// middlewares
app.use(express.json());

// initializing routes
app.use("/api/song", songRouter);
app.use('/api/album', albumRouter);

app.get('/', (req, res) => res.send("API WORKING"));

app.listen(port, () => console.log(`✅ Server started on ${port}`));
