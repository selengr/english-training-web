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
    cover: File[];
    banner: File[];
    title: string;
    introduction: string;
    mainIdea: string;
    body: string;
    point?: string;
    tips?: string;
    extraInformation?: string;
    conclusion: string;
    information : Information
    languageLevel?: LanguageLevel;
    tags?: any;
   }

   
  interface Information {
    author?: string;
    email?: string;
   }
   export type LanguageLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";