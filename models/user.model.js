const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    profilePicture: {
      type: String, //cloudinary url
      default: "https://i.ibb.co.com/TwNQ3cH/user-Default-Avatar.jpg",
    },
    bio: {
      type: String,
    },
    skills: [
      {
        type: String,
      },
    ],
    connections: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        unique: true,
      },
    ],
    jobPosts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "JobPost",
      },
    ],
    blogPosts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BlogPost",
      },
    ],
    companyDetails: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CompanyDetail",
      },
    ],
    role: {
      type: String,
      enum: [
        "admin",
        "candidate",
        "recruiter",
        "entrepreneur",
        "investor",
        "member",
      ],
      required: true,
      default: "member"
    },
  },
  { timestamps: true }
);
