'use client'

import Editor from '@/components/theme/editor'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
import { toast } from '@/components/ui/use-toast';
import { createBlogAction } from '../../../../actions/blog-action'
import { Textarea } from '@/components/ui/textarea'
import UploadForm from '@/components/uploader/page'
import { PutBlobResult } from '@vercel/blob'

export const defaultValue = {
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: []
    }
  ]
}

export default function ContentFormEdit({ params }: { params: { slug: string } }) {

  const [body, setBody] = useState('')
  const [slug, setSlug] = useState('')
  const [title, setTitle] = useState('')
  const [pending, setPending] = useState(false)
  const [banner, setBanner] = useState<string>('')
  const [content, setContent] = useState<string>('')

  useEffect(() => {
    const name = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')

    setSlug(name)
  }, [title])



  useEffect(() => {
    const getBlogData = async () => {

      const response = await fetch(
        `/api/blog/edit?params=${params.slug}`
      );

      const post = (await response.json());


      console.log('post--------------------------- :>> ', post);
      // setBanner(newBlob.url)
    };

    getBlogData()
  }, [])

  async function handleSubmit() {
    // TODO: validate the data
    setPending(true)

    const result = await createBlogAction({ title, body, content, slug, banner })

    if (result?.error) {
      toast({
        description: result.error,
      })
    }

    setPending(false)
  }


  const onDrop = async (pictureFiles: any, field: "cover" | "banner") => {

    const response = await fetch(
      `/api/avatar/upload?filename=${pictureFiles[0].name}`,
      {
        method: 'POST',
        body: pictureFiles[0],
      },
    );

    const newBlob = (await response.json()) as PutBlobResult;

    setBanner(newBlob.url)
  };


  return (
    <div className='mt-6 flex max-w-5xl flex-col gap-4 justify-center'>

      <div className="w-full">


        <UploadForm
          id={"banner"}
          onDrop={(e: File[]) => onDrop(e, "banner")}
          label={"Banner Image "}
        />

      </div>


      <div className='flex gap-4 w-full'>
        <div className='flex flex-col w-full'>
          <p>
            title
          </p>
          <Input
            type='text'
            placeholder='Title'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <p>
            url name
          </p>
          <Input
            type='text'
            placeholder='url name'
            value={slug}
            disabled
          />
        </div>
      </div>
      <div className='flex flex-col'>
        <p>
          description
        </p>
        <Textarea placeholder="Type your post description here."
          onChange={e => setBody(e.target.value)}
          value={body}
        />
      </div>

      <div className='flex flex-col'>
        <p >
          content <span className='text-xs'> (Press "/" for commands)</span>
        </p>
        <Editor initialValue={defaultValue} onChange={setContent}
        />
      </div>
      <Button onClick={handleSubmit} disabled={pending}>
        {pending ? 'Submitting...' : 'Create'}
      </Button>
    </div>
  )
}