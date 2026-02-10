import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'
import path from 'node:path'
import fs from 'node:fs/promises'
import { useMDXComponents } from '@/mdx-components'

const contentDir = path.join(process.cwd(), 'content')
const contentExtensions = ['.mdx', '.md'] as const

async function loadContentSource(slug: string) {
  for (const extension of contentExtensions) {
    try {
      const source = await fs.readFile(
        path.join(contentDir, `${slug}${extension}`),
        'utf8'
      )

      // Strip frontmatter
      const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
      const content = source.replace(frontmatterRegex, '').trim()

      return content
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

  return (
      <>
        <div className="flex flex-col sm:flex-row items-center gap-6 px-9 md:px-20 pt-4 md:pt-0">
          <div className="prose prose-slate pb-9 prose-h1:font-medium prose-headings:font-medium prose-headings:text-black prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-h5:text-lg prose-h6:text-md">
            {content}
          </div>
        </div>
      </>
  )
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