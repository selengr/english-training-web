import { IUser } from "./user"



export interface IPost {
    id: string
    slug: string
    title: string
    body: string
    banner: string
    content: string
    tag: string[]
    status : "DRAFT" | "PUBLISHED"
    published :boolean
    viewCount :number
    authorId :number
    author : IUser
    
    createdAt: string
    updatedAt: string
    isActive: boolean
  
  }
