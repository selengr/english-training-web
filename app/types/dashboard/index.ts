
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
    title?:any| string;
    introduction?:any| string;
    information?:any| Information | string;
    point?:any| string;
    tips?:any| string;
    mainIdea?:any| string;
    extraInformation?:any| string;
    cultureNotes?:any| string;
    outline?:any| string;
    tags?:any| string;
    conclusion?:any| string;
    callToAction?:any| string;
    slug?:any| string; 
    likes?:any| string;
    views?:any| string;
    status?:any| string;
    excerpt?:any| string;
    featuredImage?:any| string;
    categories?:any| Category[] | string;
    lastUpdateDate?:any| string;
    creation?:any| string;
    comments?:any| Comment[] | string;
    metadata?:any| Metadata | string;
    languageLevel?:any| string;
    learningObjective?:any| string;
    vocabularyFocus?:any| string;
    cover?:any| string;
    banner?:any| string;
   }