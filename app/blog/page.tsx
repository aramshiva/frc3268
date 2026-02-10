import Link from 'next/link'
import { getBlogPosts } from './utils'
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Mail} from "lucide-react";

export default function BlogPage() {
  const posts = getBlogPosts()
    .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())

  return (
      <>
          <div className="p-6">
              <div className="p-6 md:px-20 md:pb-20 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-full sm:w-1/2 items-center">
                  <p className="text-5xl font-medium">
                      Blog
                  </p>
                  <p className="text-2xl mb-5 mt-2">
                      Check out our blog! We post updates about our team, competitions, and other fun stuff.
                  </p>
              </div>
              <Image
                  src="/photos/1.jpg"
                  alt="Competition photo"
                  width={600}
                  height={400}
                  className="rounded-xl object-cover w-full sm:w-1/2"/>
          </div>
          <div className="p-20">
          <div className="space-y-6">
              {posts.map((post) => (
                  <article key={post.slug} className="border-b pb-6">
                      <Link href={`/blog/${post.slug}`}>
                          <h2 className="text-2xl medium hover:text-zinc-900 transition">
                              {post.metadata.title}
                          </h2>
                      </Link>
                      <time className="text-zinc-600">
                          {new Date(post.metadata.publishedAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                          })}
                      </time>
                  </article>
              ))}
          </div>
          </div>
          </div>
      </>
  )
}
