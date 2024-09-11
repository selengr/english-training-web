import { IPost } from "./post"



  export interface IUser {
    id: string
    name: string
    family: string
    hashedPassword: string
    instagramId: string
    expertise: string
    image: string
    job: string[]
    // accounts Account[]
    posts : IPost[]
    role : "ADMIN" | "USER"
    createdAt: string
    updatedAt: string

  }
  