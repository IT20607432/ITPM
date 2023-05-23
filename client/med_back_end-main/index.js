const dotenv = require("dotenv");
dotenv.config();

const mongodb = require("mongodb").MongoClient;
const express = require("express");

const mongoose = require("mongoose");

const supertokens = require("supertokens-node");
const { errorHandler } = require("supertokens-node/framework/express");

const middleware = require("./middleware/auth_middleware");

const cors = require("cors");
const BodyParser = require("body-parser");
const morgan = require("morgan");

const initializeSupertokens = require("./config/supertokens");

// Importing the schema
const Post = require("./models/data");
const UserRole = require("./models/user_roles");

// Initializing
initializeSupertokens();

const connectionstring = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ihznx.mongodb.net/?retryWrites=true&w=majority`;
const app = express();
const router = express.Router({ mergeParams: true });
const PORT = process.env.PORT || 6700;

// Connecting to the DB
mongoose
  .connect(connectionstring, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => app.listen(PORT))

  .catch((err) => console.error(err));

console.log("Deployment Successful");
console.log(`Server started at PORT ${PORT}`);

// Middleware and static files
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(BodyParser.urlencoded({ extended: false }));

// cors middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    credentials: true,
  })
);

// auth middleware
app.use(middleware());

// /api endpoint that returns all the vegetables in the DB
app.get("/api/posts", (req, res) => {
  Post.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.delete("/api/posts/:post_id", (req, res) => {
  console.log(req.params.post_id);
});

app.post("/api/posts", (req, res) => {
  console.log(req.body.title, req.body.content, req.body.user_id);
  if (true) {
    UserRole.findOne({ user_id: req.body.user_id })
      .then((user_result) => {
        console.log("user_result", user_result);
        Post.insertMany([
          {
            title: req.body.title ?? "",
            owner_email: user_result.user_email,
            content: req.body.content,
          },
        ])
          .then((result) => res.status(200).json(result))
          .catch((err) => res.status(500).json(err));
      })
      .catch((err) => res.status(500));
  } else
    res
      .send({
        message:
          "Please provide all the arguments to create a post: title, content and body",
      })
      .status(500);
});

app.delete("/api/posts/:post_id", (req, res) => {
  if (req.params.post_id) Post.deleteOne((post_id = req.params.post_id));
  else res.send({ message: "Please provide post_id to delete the post" });
});

app.get("/api/user_info", (req, res) => {
  console.log(req.params.user_id);
  if (req.params.user_id)
    UserRole.findOne({ user_id: req.params.user_id })
      .then((result) => res.send(result))
      .catch((err) => res.status(500));
  else res.status(400);
});

// error handler
app.use(errorHandler());
