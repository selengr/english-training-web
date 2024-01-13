   interface Category {
    id: string;
    name: string;
   }
   
   type Metadata = { [key: string]: any } | string;
   export type SaveExample = {input:string,input_rank:number|null};
   export type tableData = {column1:string,column2:string,column3:string};
   interface Comment {
    id: string;
    content: string;
   }
  //  ==================================================
   export interface IPInputs {
    [x: string]: any;
    updatedAt: any;
    cover: any;
    banner: any;
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
    saveExample?: SaveExample[];
    tableData?: tableData[];
    descriptionLink: string;
    link: string
  }

   
  interface Information {
    author?: string;
    email?: string;
   }
   export type LanguageLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";