
// ok now i want to send my front code and i just made a little input and i want you improve it and put all of these code there " by making beautifull one "

import mongoose from "mongoose"


const ExamSchema = new mongoose.Schema({
  input: { type: String, required: false },
  input_rank: { type: Number, required: false },
});

const TableDataSchema = new mongoose.Schema({
  column1: { type: String, required: false },
  column2: { type: String, required: false },
  column3: { type: String, required: false }
});


const PostModel = new mongoose.Schema({
  cover: { type: String, required: true },
  banner:  { type: String, required: true },
  title: { type: String, required: true },
  introduction: { type: String, required: true },
  mainIdea: { type: String, required: true },
  body: { type: String, required: true },
  point: { type: String, required: false },
  tips: { type: String, required: false },
  extraInformation: { type: String, required: false },
  conclusion: { type: String, required: true },
  information: {
    author: { type: String, required: false },
    email: { type: String, required: false }
  },
  languageLevel: { type: String, required: false },
  // saveExample: { type: Array<any>, required: false },
  // tableData: { type: Array<any>, required: false },
  // saveExample: ExamSchema,
  // tableData: TableDataSchema,
  descriptionLink: String,
  link: String,
  tags: { type: Array<String>, required: false }

  // cultureNotes: { type: String, required: false },
  // outline: { type: String, required: false },
  // callToAction: { type: String, required: false },
  // slug: { type: String, required: false, unique: false },
  // likes: { type: String, required: false },
  // views: { type: String, required: false },
  // status: { type: String, required: false },
  // excerpt: { type: String, required: false },
  // featuredImage: { type: String, required: false },
  // categories: [{ type: String, required: false }],
  // lastUpdateDate: { type: Date, required: false },
  // creation: { type: Date, required: false },
  // comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  // metadata: { type: mongoose.Schema.Types.Mixed, required: false },
  // learningObjective: { type: String, required: false },
  // vocabularyFocus: { type: String, required: false },
  // cover: { type: mongoose.Types.ObjectId, ref: 'File', required: true},
  // banner: { type: mongoose.Types.ObjectId, ref: 'File', required: true}
}, { timestamps: true });

export default mongoose.models.Post || mongoose.model("Post", PostModel);