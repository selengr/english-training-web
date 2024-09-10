'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Editor from '@/components/editor'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
import { toast } from '@/components/ui/use-toast'
import { createBlogAction } from '../../../../actions/blog-action'
import { Textarea } from '@/components/ui/textarea'
import UploadForm from '@/components/uploader/page'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

export const defaultValue = {
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: []
    }
  ]
}

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  body: z.string().min(1, "Description is required"),
  slug: z.string(),
  content: z.string().min(1, "Content is required"),
  banner: z.string().min(1, "Banner image is required"),
  tag: z.array(z.string()).min(1, "At least one tag is required").max(6, "Maximum 6 tags allowed")
})

type FormValues = z.infer<typeof formSchema>

export default function ContentForm() {
  const [uploading, setUploading] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      body: '',
      slug: '',
      content: '',
      banner: '',
      tag: ['']
    }
  })

  const { watch, setValue } = form

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'title') {
        const slug = value.title
          ?.toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)+/g, '')
        setValue('slug', slug || '')
      }
    })
    return () => subscription.unsubscribe()
  }, [watch, setValue])

  async function onSubmit(data: FormValues) {
    try {
      const result = await createBlogAction(data)
      if (result?.error) {
        toast({
          description: result.error,
        })
      } else {
        toast({
          description: "Blog post created successfully",
        })
        form.reset()
      }
    } catch (error) {
      toast({
        description: "An error occurred while creating the blog post",
      })
    }
  }

  const onDrop = async (file: File[]) => {
    if (!file.length) return

    setUploading(true)
    const formData = new FormData()
    formData.append('image', file[0])

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        const data = await response.json()
        setValue('banner', data.id)
      } else {
        throw new Error('Failed to upload image')
      }
    } catch (error: any) {
      toast({
        description: error.message
      })
    } finally {
      setUploading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='mt-6 flex max-w-5xl flex-col gap-4 justify-center'>
        <FormField
          control={form.control}
          name="banner"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Banner Image</FormLabel> */}
              <FormControl>
                <UploadForm
                  id="banner"
                  onDrop={onDrop}
                  label="Banner Image"
                  defaultImage={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='flex gap-4 w-full'>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormLabel>URL Name</FormLabel>
                <FormControl>
                  <Input placeholder="URL name" {...field} disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Type your post description here." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tag"
          render={() => (
            <FormItem>
              <FormLabel>Area of Coverage</FormLabel>
              <FormControl>
                <div>
                  {form.watch('tag').map((_, index) => (
                    <div key={index} className="form-inline flex flex-row gap-2 my-2">
                      <Input
                        type='text'
                        placeholder="Tag name"
                        {...form.register(`tag.${index}` as const)}
                        onChange={(e) => {
                          const newTags = [...form.watch('tag')]
                          newTags[index] = e.target.value
                          form.setValue('tag', newTags)
                        }}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        className="bg-red-500 text-white"
                        onClick={() => {
                          const newTags = form.watch('tag').filter((_, i) => i !== index)
                          form.setValue('tag', newTags.length ? newTags : [''])
                        }}
                      >
                        x
                      </Button>
                      {index === form.watch('tag').length - 1 && (
                        <Button
                          type="button"
                          onClick={() => {
                            if (form.watch('tag').length < 6) {
                              form.setValue('tag', [...form.watch('tag'), ''])
                            } else {
                              toast({
                                description: "Maximum 6 tags allowed",
                              })
                            }
                          }}
                        >
                          Add More
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content <span className='text-xs'>(Press '/' for commands)</span></FormLabel>
              <FormControl>
                <Editor
                  initialValue={defaultValue}
                  onChange={(value) => field.onChange(value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? 'Submitting...' : 'Create'}
        </Button>
      </form>
    </Form>
  )
}


// 'use client'

// import { z } from 'zod'
// import Editor from '@/components/editor'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { useEffect, useState } from 'react'
// import { toast } from '@/components/ui/use-toast';
// import { createBlogAction } from '../../../../actions/blog-action'
// import { Textarea } from '@/components/ui/textarea'
// import UploadForm from '@/components/uploader/page'
// import { PutBlobResult } from '@vercel/blob'


// export const defaultValue = {
//   type: 'doc',
//   content: [
//     {
//       type: 'paragraph',
//       content: []
//     }
//   ]
// }

// export default function ContentForm() {
//   const [title, setTitle] = useState('')
//   const [body, setBody] = useState('')
//   const [slug, setSlug] = useState('')
//   const [content, setContent] = useState<string>('')
//   const [banner, setBanner] = useState<string>('')
//   const [pending, setPending] = useState(false)
//   const [tag, setTag] = useState([""]);

//   const [uploading, setUploading] = useState(false)

//   useEffect(() => {
//     const name = title
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, '-')
//       .replace(/(^-|-$)+/g, '')

//     setSlug(name)
//   }, [title])

//   async function handleSubmit() {
//     // TODO: validate the data
//     setPending(true)
//     if (tag[0].length > 0) {
//       const result = await createBlogAction({ title, body, content, slug, banner, tag })
//       if (result?.error) {
//         toast({
//           description: result.error,
//         })
//       }
//     } else {
//       toast({
//         description: "area of coverage is required"
//       })
//     }

//     setPending(false)
//   }




//   const onDrop = async (file: any) => {
//     if (!file) return

//     const formData = new FormData()
//     formData.append('image', file[0])

//     try {
//       const response = await fetch('/api/upload', {
//         method: 'POST',
//         body: formData,
//       })

//       if (response.ok) {
//         const data = await response.json()
//         setBanner(data.id)
//       } else {
//         console.error('Failed to upload image')
//       }
//     } catch (error: any) {
//       toast({
//         description: error.message
//       })
//     }
//     finally {
//       setUploading(false)

//     }



//   }


//   // const onDrop = async (pictureFiles: any, field: "cover" | "banner") => {

//   //   const response = await fetch(
//   //     `/api/avatar/upload?filename=${pictureFiles[0].name}`,
//   //     {
//   //       method: 'POST',
//   //       body: pictureFiles[0],
//   //     },
//   //   );

//   //   const newBlob = (await response.json()) as PutBlobResult;

//   //   setBanner(newBlob.url)
//   // };



//   //------------------------------------------------------------------------

//   const handleChange = (i: any, e: any) => {
//     const newFormValues: any = [...tag];
//     if (e.target.value.length > 21) {
//       toast({
//         description: "max character is 20",
//       })
//     } else {
//       newFormValues[i] = e.target.value;
//       setTag(newFormValues);
//     }
//   };

//   const addFormFields = () => {
//     if (tag.length < 6) {
//       setTag([...tag, ""]);
//     } else {
//       toast({
//         description: "max size is six",
//       })
//     }
//   };

//   const removeFormFields = (i: any) => {
//     const newFormValues = [...tag];
//     if (i !== 0) {
//       newFormValues.splice(i, 1);
//       setTag(newFormValues);
//     } else if (i === 0 && newFormValues.length === 1) {
//       setTag([""]);
//     } else if (i === 0 && newFormValues.length > 1) {
//       newFormValues.shift();
//       setTag(newFormValues);
//     }
//   };
//   //------------------------------------------------------------------------


//   return (
//     <div className='mt-6 flex max-w-5xl flex-col gap-4 justify-center'>

//       <div className="w-full">


//         <UploadForm
//           id={"banner"}
//           onDrop={(e: File[]) => onDrop(e)}
//           label={"Banner Image "}
//           defaultImage={banner}
//         />

//       </div>


//       <div className='flex gap-4 w-full'>
//         <div className='flex flex-col w-full'>
//           <p>
//             title
//           </p>
//           <Input
//             type='text'
//             placeholder='Title'
//             value={title}
//             onChange={e => setTitle(e.target.value)}
//           />
//         </div>
//         <div className='flex flex-col'>
//           <p>
//             url name
//           </p>
//           <Input
//             type='text'
//             placeholder='url name'
//             value={slug}
//             disabled
//           />
//         </div>
//       </div>
//       <div className='flex flex-col'>
//         <p>
//           description
//         </p>
//         <Textarea placeholder="Type your post description here."
//           onChange={e => setBody(e.target.value)}
//           value={body}
//         />
//       </div>

//       <div className='flex flex-col'>
//         <p>
//           area of coverage
//         </p>
//         {tag.map((element, index) => (
//           <div className="form-inline flex flex-row gap-2 my-2" key={index}>
//             <Input
//               type='text'
//               name="name"
//               placeholder="name"
//               value={element || ""}
//               onChange={(e) => handleChange(index, e)}
//             />

//             <Button
//               type="button"
//               variant={"outline"}
//               className="bg-red-500 text-white"
//               onClick={() => removeFormFields(index)}
//             >
//               x
//             </Button>
//             <Button
//               type="button"
//               onClick={addFormFields}
//             >
//               Add More
//             </Button>
//           </div>
//         ))}

//       </div>

//       <div className='flex flex-col'>
//         <p >
//           content <span className='text-xs'> (Press &prime;/&prime; for commands)</span>
//         </p>
//         <Editor initialValue={defaultValue} onChange={setContent}
//         />
//       </div>
//       <Button onClick={handleSubmit} disabled={pending}>
//         {pending ? 'Submitting...' : 'Create'}
//       </Button>
//     </div>
//   )
// }