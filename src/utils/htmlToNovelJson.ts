import { Node } from '@tiptap/core'
import { generateJSON } from '@tiptap/html'
import StarterKit from '@tiptap/starter-kit'

export function htmlToNovelJson(html: string) {
  return generateJSON(html, [
    StarterKit,
    // Add any other extensions you're using in your Novel editor
  ])
}