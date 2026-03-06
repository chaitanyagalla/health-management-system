import app from "./app.js";
import cloudinary from "cloudinary"

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

console.log(process.env.PORT)

console.log("COOKIE_EXPIRE:", process.env.COOKIE_EXPIRE);

console.log("JWT_SECRET:", process.env.JWT_SECRET);

app.listen(process.env.PORT, ()=>{
    console.log(`Server listening on port ${process.env.PORT}`);
});