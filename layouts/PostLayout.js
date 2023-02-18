import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
// import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Tag from '@/components/Tag'

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { date, lastmod, title, tags } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
      <ScrollTopAndComment />
      <article className="max-w-[650px] mx-auto">
        <div>
          {/* Header v2 */}
          {/* <div className="pb-4 border-b border-b-gray-100 dark:border-b-gray-700"> */}
          {/*   <p className="pt-1 text-base leading-6 text-gray-500 dark:text-gray-400"> */}
          {/*     Written by  */}
          {/*     {authorDetails.map((author) => ( */}
          {/*       <Link href="/about" className="text-white font-bold"> */}
          {/*         {` ${author.name} `} */}
          {/*       </Link> */}
          {/*       ))} */}
          {/*     on {` ${formatDate(date)}`}  */}
          {/*     {lastmod && ` • Updated on ${formatDate(lastmod)}`} */}
          {/*   </p> */}
          {/*   <PageTitle>{title}</PageTitle>  */}
          {/*   <p> */}
          {/*     {tags && ( */}
          {/*         <div className="py-1 xl:py-2">  */}
          {/*           <div className="flex flex-wrap"> */}
          {/*             {tags.map((tag) => ( */}
          {/*               <Tag key={tag} text={tag} /> */}
          {/*             ))} */}
          {/*           </div> */}
          {/*         </div> */}
          {/*       )} */}
          {/*   </p> */}
          {/* </div> */}

          {/* Header v1 */}
          <div className="pb-4 border-b border-b-gray-100 dark:border-b-gray-700">
            <PageTitle>{title}</PageTitle>
            <p className="pt-1 text-base leading-6 text-gray-500 dark:text-gray-400">
              Published on {` ${formatDate(date)}`}
              {lastmod && ` • Updated on ${formatDate(lastmod)}`}
            </p>
            <p>
              {tags && (
                <div className="py-1 xl:py-2">
                  <div className="flex flex-wrap">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                </div>
              )}
            </p>
          </div>

          <div
            className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 "
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
              <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">{children}</div>
            </div>
            {/* <Comments frontMatter={frontMatter} /> */}
            <footer>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/blog/${prev.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                {next && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/blog/${next.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {next.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
