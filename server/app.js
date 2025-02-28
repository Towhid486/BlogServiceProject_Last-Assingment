import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import rateLimit from 'express-rate-limit';
import helmet from "helmet";
import cookieParser from "cookie-parser";
import hpp from "hpp";
import {DATABASE,PORT,MAX_JSON_SIZE,URL_ENCODED,WEB_CACHE,REQUEST_LIMIT_NUMBER,REQUEST_LIMIT_TIME} from "./src/config/config.js"
import router from "./src/routes/api.js"
import bodyParser from 'body-parser';
import path from "path";
const app = express();

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Global Application Middleware
app.use(cors());
app.use(cors({
    origin: "https://portfolio-towhid.onrender.com/", // React frontend
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials:true,
}));
app.use(express.json({limit: MAX_JSON_SIZE}));
app.use(express.urlencoded({ extended: URL_ENCODED }));
app.use(hpp())

app.use(
    helmet.contentSecurityPolicy({
        useDefaults:true,
        directives: {
            "img-src": ["'self'", "https: data:"],
        },
    })
)
app.use(cookieParser())
app.use(bodyParser.json());

// Rate Limiter
const limiter=rateLimit({windowMs:REQUEST_LIMIT_TIME,max:REQUEST_LIMIT_NUMBER})
app.use(limiter)


// Web Caching
app.set('etag',WEB_CACHE)

// MongoDB connection
mongoose.connect(DATABASE,{autoIndex:true}).then(()=>{
    console.log("MongoDB Connected");
}).catch(err=>{
    console.log(err);
})

// Set API Routes
app.use("/api",router)

// app.use("/uploaded-file", express.static("uploads"))
// Run Your Express Back End Project
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})

//----Connect With React Frontend
//Add React Frontend initial Directory
app.use(express.static(path.join(__dirname,'../client/dist')))

// Add React Front End Routing
app.get('*',function (req,res) {
    res.sendFile(path.resolve(__dirname,'..', 'client','dist','index.html'))
})


export default app;