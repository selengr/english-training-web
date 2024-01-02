
  interface Information {
    author: string;
    publicationDate: string;
    source: string;
    content: string;
   }
   interface Category {
    id: string;
    name: string;
   }
   
   type Metadata = { [key: string]: any } | string;
   interface Comment {
    id: string;
    content: string;
   }
  //  ==================================================
   export interface IPInputs {
    title: string;
    introduction: string;
    information: Information;
    point: string;
    tips: string;
    mainIdea: string;
    extraInformation: string;
    cultureNotes: string;
    outline: string;
    tags: string;
    conclusion: string;
    callToAction: string;
    slug: string; 
    likes: string;
    views: string;
    status: string;
    excerpt: string;
    featuredImage: string;
    categories: Category[]; lastUpdateDate: string;
    creation: string;
    comments: Comment[];
    metadata: Metadata;
    languageLevel: string;
    learningObjective: string;
    vocabularyFocus: string;
    cover: string;
    banner: string;
   }