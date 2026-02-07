"use client"
import Head from 'next/head';
import { useEffect } from 'react';

export default function BlogTemplate({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.hljs) {
      window.hljs.highlightAll();
    }
  }, [children]);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/default.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/languages/go.min.js"></script>
      </Head>
                <div className="prose p-20 prose-h1:font-semibold prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
          {children}
        </div>
    </>
  );
}