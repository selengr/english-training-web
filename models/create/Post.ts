
// ok now i want to send my front code and i just made a little input and i want you improve it and put all of these code there " by making beautifull one "
import mongoose from "mongoose"

const PostModel = new mongoose.Schema({
  title: { type: String, required: true },
  introduction: { type: String, required: false },
  information: {
    author: { type: String, required: false },
    publicationDate: { type: String, required: false },
    source: { type: String, required: false },
    content: { type: String, required: false },
  },
  point: { type: String, required: false },
  tips: { type: String, required: false },
  mainIdea: { type: String, required: false },
  extraInformation: { type: String, required: false },
  cultureNotes: { type: String, required: false },
  outline: { type: String, required: false },
  tags: { type: String, required: false },
  conclusion: { type: String, required: false },
  callToAction: { type: String, required: false },
  slug: { type: String, required: false, unique: false },
  likes: { type: String, required: false },
  views: { type: String, required: false },
  status: { type: String, required: false },
  excerpt: { type: String, required: false },
  featuredImage: { type: String, required: false },
  categories: [{ type: String, required: false }],
  lastUpdateDate: { type: Date, required: false },
  creation: { type: Date, required: false },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  metadata: { type: mongoose.Schema.Types.Mixed, required: false },
  languageLevel: { type: String, required: false },
  learningObjective: { type: String, required: false },
  vocabularyFocus: { type: String, required: false },
  cover: { data: Buffer, contentType: String },
  banner: { data: Buffer, contentType: String },
  // cover: { type: mongoose.Types.ObjectId, ref: 'File', required: true},
  // banner: { type: mongoose.Types.ObjectId, ref: 'File', required: true}
}, { timestamps: true });

export default mongoose.models.Post || mongoose.model("Post", PostModel);





  
    // Target Audience - Identify the target audience for the blog post, such as students, professionals, or hobbyists. This will help in deciding the tone and level of language used in the post.
    // Tone - Determine the tone of the blog post based on the target audience and purpose of the post. For example, a blog post aimed at professionals may have a more formal tone than one aimed at students.
    // Topic - Choose a topic for the blog post that is both interesting and relevant to the target audience. It should be something that they can relate to or use in their daily lives.
    // Research - Conduct research on the chosen topic to gather information and ideas for the blog post. Use reliable sources such as academic journals, newspapers, and books.
    // Outline - Create an outline for the blog post that includes the main points and sub-topics to be covered. This will help organize the content and ensure that all important information is included.
    // Examples - Use examples or case studies to illustrate the main points discussed in the blog post. This can help readers understand complex concepts and make the content more engaging.
    // Call-to-Action - Include a call-to-action at the end of the blog post that encourages readers to engage with the content further, such as by leaving a comment or sharing the post on social media.

    // Title - The title of the blog post.
// Slug - A unique identifier for the blog post that is used in the URL.
// Author - The author of the blog post.
// Content - The main body of the blog post.
// Creation Date - The date the blog post was created.
// Last Update Date - The date the blog post was last updated.
// Tags - A list of keywords or topics associated with the blog post.
// Categories - A broad classification of the blog post based on its topic.
// Featured Image - An image that is displayed prominently with the blog post.
// Excerpt - A short summary or teaser of the blog post.
// Status - Indicates whether the blog post is published, unpublished, or in draft mode.
// Views - The number of views the blog post has received.
// Likes - The number of likes the blog post has received.
// Comments - The comments made on the blog post.
// Metadata - Any additional information or metadata related to the blog post that you might want to store.
// Language Level - The level of English proficiency required to understand the blog post content (e.g. beginner, intermediate, advanced).
// Learning Objective - The specific learning objectives that the blog post aims to achieve.
// Grammar Focus - The specific grammar concepts covered in the blog post.
// Vocabulary Focus - The specific vocabulary covered in the blog post.
// Culture Notes - Information about cultural references or nuances that are relevant to the blog post content.


