import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkFrontmatter from "remark-frontmatter" 
import remarkRehype from "remark-rehype"
import rehypeSlug from 'rehype-slug'
import rehypeStringify from "rehype-stringify"
import rehypeHighlight from "rehype-highlight"
import matter from "gray-matter"
import fs from "fs"
import OnThisPage from '@/components/OnThisPage'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const processor = unified()
  .use(remarkParse)
  .use(remarkRehype) 
  .use(rehypeStringify)
  .use(rehypeSlug)
  .use(rehypePrettyCode, {
    theme: "material-theme-darker",
    transformers: [
      transformerCopyButton({
        visibility: 'always',
        feedbackDuration: 3_000,
      }),
    ],
  })
  .use(rehypeAutolinkHeadings)


  const filePath = `content/${params.slug}.md`
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const {data, content} = matter(fileContent)
  const htmlContent = (await processor.process(content)).toString()
  return (
    <MaxWidthWrapper>
    <article className='prose dark:prose-invert'> 
      <div className="flex">
        <div className='px-16'>
        <h1 >{data.title}</h1>
        <div dangerouslySetInnerHTML={{__html: htmlContent}}></div>
        </div>
          <OnThisPage className="text-sm w-[20%]" htmlContent={htmlContent} />
      </div>
    </article>
    </MaxWidthWrapper>
  )
}

