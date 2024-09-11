"use client"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Trash, Pencil } from 'lucide-react';
import { fToNow } from "@/utils/formatTime";
import styles from "../home/banner.module.css";
import { Button } from "@/components/ui/button";
import { deletePost } from "../../../actions/blog-action";
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";
import { IUser } from "@/@types/user";


export default async function MyBlogPost({ user }: { user: any }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false)
  const [isToggling, setIsToggling] = useState(false)

  const handleDeletePost = async (postId: string) => {
    setIsDeleting(true);
    const result = await deletePost(postId);
    setIsDeleting(false);
    if (result.success) {
      router.refresh();
    } else {
      toast({
        description: result.message
      })
    }
  };

  // const handleToggleActivation = async (postId: string, currentStatus: boolean) => {
  //   setIsToggling(true)
  //   const result = await togglePostActivation(postId, !currentStatus)
  //   setIsToggling(false)
  //   if (result.success) {
  //     router.refresh()
  //     toast({ description: result.message })
  //   } else {
  //     toast({ description: result.message, variant: "destructive" })
  //   }
  // }


  return (
    <div className={styles["post-header"]}>
      <h2>My Posts</h2>

      <aside className={styles["post-blog-card"]}>
        {user?.posts?.length > 0 &&
          user?.posts?.map((it: any) => {
            return (
              <>
                <div
                  // href={`/blog/edit/${it.id}`}
                  className={styles["post-blog-each-card"]}
                  style={{ cursor: "auto" }}
                  key={it.id}
                >

                  <Image
                    src={`/api/images/${it.banner}`}
                    alt="Picture of the author"
                    width={200}
                    height={200}
                  />

                  <section className={styles["post-blog-property"]} style={{ position: "relative" }}>
                    <span className={styles["post-blog-property-title"]}>

                      <p className="truncate">
                        {it.title}
                      </p>
                    </span>
                    <div className={styles["post-blog-property-details"]}>
                      <span
                        className={styles["post-blog-property-description"]}
                      >

                        {it.body}

                      </span>
                      <span className={styles["post-blog-property-date"]}>
                        {fToNow(it?.createdAt?.toString())}
                      </span>
                    </div>
                    <div className={styles["post-blog-property-map-opt"]}>
                      {it?.tag?.map((tag: any) => (
                        <>
                          <span>{tag}</span>
                        </>
                      ))}
                    </div>

                  </section>

                  <div className="gap-2 h-14 rounded-xl flex justify-end p-1">


                    <Link href={`/blog/edit/${it.id}`} className=" dark:bg-[hsla(44,6%,50%,.15)] bg-[hsla(44,6%,50%,.15)] w-14 h-full flex justify-center items-center cursor-pointer rounded-xl">
                      <Pencil className="" />
                    </Link>

                    <div className="bg-[#E10C33] w-14 p-1 h-full flex justify-center items-center cursor-pointer rounded-xl">

                      <Dialog>
                        <DialogTrigger>
                          <Trash className="text-white" />

                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                              Are you sure want to delete <strong> {it.title} </strong> {" "} post
                            </DialogDescription>
                          </DialogHeader>

                          <DialogFooter>
                            <DialogClose asChild>
                              <Button type="button" variant="secondary">
                                Close
                              </Button>
                            </DialogClose>
                            <Button
                              onClick={() => handleDeletePost(it.id)}
                              disabled={isDeleting}
                            >
                              {isDeleting ? 'Deleting...' : 'Delete'}
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>


                    </div>
                  </div>
                </div>
              </>
            );
          })}

        {user?.posts.length === 0 &&
          <h1>
            0 post
          </h1>
        }
      </aside>




    </div>
  );
}




const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

function PostSkeleton() {
  return (
    <div className={`${styles["post-blog-each-card"]} h-96 space-y-4 mt-8 border-[1px] border-neutral-300 rounded-2xl p-6`}>
      <div className={`relative h-[157px] mb-20 rounded-xl bg-slate-200 ${shimmer}`} />

      <div className="h-4 w-full rounded-lg mt-6 bg-slate-200" />
      <div className="w-full py-3 rounded-lg bg-slate-200" />
      <div className="w-[100%] py-3 rounded-lg bg-slate-200" />
    </div>
  );
}

export function BlogPostRequestSkeleton() {
  return (
    <div className={styles["post-blog-card"]}>
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
    </div>
  );
}
