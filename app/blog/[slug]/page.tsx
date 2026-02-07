import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'
import path from 'node:path'
import fs from 'node:fs/promises'
import { useMDXComponents } from '@/mdx-components'
import BlogTemplate from '@/components/BlogTemplate'

const contentDir = path.join(process.cwd(), 'content')
const contentExtensions = ['.mdx', '.md'] as const

async function loadContentSource(slug: string) {
  for (const extension of contentExtensions) {
    try {
      const source = await fs.readFile(
        path.join(contentDir, `${slug}${extension}`),
        'utf8'
      )

      return source
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
        throw error
      }
    }
  }

  return null
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const source = await loadContentSource(slug)

  if (!source) {
    notFound()
  }

  const { content } = await compileMDX({
    source,
    components: useMDXComponents(),
  })

  return <BlogTemplate>{content}</BlogTemplate>
}
 
export async function generateStaticParams() {
  const entries = await fs.readdir(contentDir, { withFileTypes: true })

  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => contentExtensions.some((ext) => name.endsWith(ext)))
    .map((name) => ({ slug: name.replace(/\.(md|mdx)$/i, '') }))
}
 
export const dynamicParams = false