'use client'

import Editor from '@/components/theme/editor'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
// import { createBlogAction } from '@/lib/actions'
import { toast } from 'sonner'
import { createBlogAction } from '../../../../actions/blog-action'

export const defaultValue = {
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: []
    }
  ]
}

export default function ContentForm() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [content, setContent] = useState<string>('')
  const [pending, setPending] = useState(false)

  useEffect(() => {
    const name = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')

    setBody(name)
  }, [title])

  async function handleSubmit() {
    // TODO: validate the data

    setPending(true)

    const result = await createBlogAction({ title, body, content })

    if (result?.error) {
      toast.error(result.error)
    }

    setPending(false)
  }

  return (
    <div className='mt-6 flex max-w-5xl flex-col gap-4 justify-center'>
      <div className='flex gap-4'>
        <Input
          type='text'
          placeholder='Title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Input
          type='text'
          placeholder='Body'
          value={body}
          onChange={e => setBody(e.target.value)}
        />
      </div>

      <Editor initialValue={defaultValue} onChange={setContent} />
      <Button onClick={handleSubmit} disabled={pending}>
        {pending ? 'Submitting...' : 'Create'}
      </Button>
    </div>
  )
}