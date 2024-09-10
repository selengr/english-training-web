'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Editor from '@/components/editor'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
import { toast } from '@/components/ui/use-toast'
import { updateBlogAction } from '../../../../actions/blog-action'
import { Textarea } from '@/components/ui/textarea'
import UploadForm from '@/components/uploader/page'
import { htmlToNovelJson } from '@/utils/htmlToNovelJson'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

export const defaultValue = {
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [{
        text: "Press ′/′ for commands",
        type: "text"
      }]
    }
  ]
}

const formSchema = z.object({
  id: z.string().min(1, "Id is required"),
  title: z.string().min(1, "Title is required"),
  body: z.string().min(1, "Description is required"),
  slug: z.string(),
  content: z.any(),
  banner: z.string().min(1, "Banner image is required"),
  tag: z.array(z.string()).min(1, "At least one tag is required").max(6, "Maximum 6 tags allowed")
})


type FormValues = z.infer<typeof formSchema>

export default function ContentFormEdit({ params }: { params: { slug: string } }) {
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: '',
      title: '',
      body: '',
      slug: '',
      content: defaultValue,
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

  useEffect(() => {
    const getBlogData = async () => {
      const response = await fetch(`/api/blog/post?params=${params.slug}`);
      const { blog } = await response.json();

      form.reset({
        id: blog.id,
        title: blog.title,
        body: blog.body,
        slug: blog.slug,
        content: htmlToNovelJson(blog.content),
        banner: blog.banner,
        tag: blog.tag || ['']
      })

      setLoading(false)
    };

    getBlogData()
  }, [params.slug, form])

  async function onSubmit(data: FormValues) {
    try {
      const result = await updateBlogAction(data)
      if (result?.error) {
        toast({
          description: result.error,
        })
      } else {
        toast({
          description: "Blog post updated successfully",
        })
      }
    } catch (error) {
      toast({
        description: "An error occurred while updating the blog post",
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

  if (loading) return null

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
                  initialValue={field.value}
                  onChange={(value) => field.onChange(value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? 'Updating...' : 'Update'}
        </Button>
      </form>
    </Form>
  )
}