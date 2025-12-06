import { initDatabase } from "./db/init.js";
import { Post } from "./db/models/post.js";
import dotenv from "dotenv";

dotenv.config();

await initDatabase();

const post = new Post({
    title: "Hello from the outside!",
    author: "Some Person",
    contents: "This post is stored in a MongoDB database using Mongoose.",
    imageURL:
        "https://static.wikia.nocookie.net/characterprofile/images/a/a1/LinkZelda.png/revision/latest?cb=20160105030137",
    tags: ["other"],
});

await post.save();
const posts = await Post.find();
console.log(posts);
