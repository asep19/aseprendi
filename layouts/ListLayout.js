import Link from '@/components/Link'
import Tag from '@/components/Tag'
// import Tags from '@/components/Tags'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'

// experiment from tags.js
import kebabCase from '@/lib/utils/kebabCase'
// end here

const MAX_DISPLAY = 5

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination, tags }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])

  return (
    <>
      <section className="max-w-[700px] mx-auto pt-16">
        <h2 className="text-xl font-semibold">Latest Writings</h2>
        {/* <h2 className="text-xl font-semibold">Highlights</h2> */}

        <ul className="mt-4 space-y-0.5">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title } = frontMatter
            return (
              <li key={slug}>
                <article className="p-2 bg-gray-100 hover:bg-gray-300 rounded-md">
                  <Link href={`/blog/${slug}`}>
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg text-black/80 dark:text-white font-semibold">
                        {title}
                      </h3>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {formatDate(date)}
                      </div>
                    </div>
                  </Link>
                </article>
              </li>
            )
          })}
        </ul>
      </section>

      {/* <Tags /> */}
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:justify-center md:items-center md:divide-y-0 md:flex-row md:space-x-6 md:mt-24">
        <div className="pt-6 pb-8 space-x-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 md:border-r-2 md:px-6">
            Tags
          </h1>
        </div>
        <div className="flex flex-wrap max-w-lg">
          {Object.keys(tags).length === 0 && 'No tags found.'}
          {sortedTags.map((t) => {
            return (
              <div key={t} className="mt-2 mb-2 mr-5">
                <Tag text={t} />
                <Link
                  href={`/tags/${kebabCase(t)}`}
                  className="-ml-2 text-sm font-semibold text-gray-600 uppercase dark:text-gray-300"
                >
                  {/* {` (${tags[t]})`} */}
                </Link>
              </div>
            )
          })}
        </div>
      </div>

      <div className="max-w-3xl">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          {/* <div className="relative max-w-lg"> */}
          {/*   <input */}
          {/*     aria-label="Search articles" */}
          {/*     type="text" */}
          {/*     onChange={(e) => setSearchValue(e.target.value)} */}
          {/*     placeholder="Search articles" */}
          {/*     className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100" */}
          {/*   /> */}
          {/*   <svg */}
          {/*     className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300" */}
          {/*     xmlns="http://www.w3.org/2000/svg" */}
          {/*     fill="none" */}
          {/*     viewBox="0 0 24 24" */}
          {/*     stroke="currentColor" */}
          {/*   > */}
          {/*     <path */}
          {/*       strokeLinecap="round" */}
          {/*       strokeLinejoin="round" */}
          {/*       strokeWidth={2} */}
          {/*       d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" */}
          {/*     /> */}
          {/*   </svg> */}
          {/* </div> */}
        </div>
        <ul>
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              // <li key={slug} className="py-4">
              //   <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
              //     <dl>
              //       <dt className="sr-only">Published on</dt>
              //       <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              //         <time dateTime={date}>{formatDate(date)}</time>
              //       </dd>
              //     </dl>
              //     <div className="space-y-3 xl:col-span-3">
              //       <div>
              //         <h3 className="text-2xl font-bold leading-8 tracking-tight mb-1">
              //           <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
              //             {title}
              //           </Link>
              //         </h3>
              //         <div className="flex flex-wrap">
              //           {tags.map((tag) => (
              //             <Tag key={tag} text={tag} />
              //           ))}
              //         </div>
              //       </div>
              //       <div className="prose text-gray-500 max-w-none dark:text-gray-400">
              //         {summary}
              //       </div>
              //     </div>
              //   </article>
              // </li>
              <li key={slug}>
                <div className="flex items-center justify-between">
                  <p>
                    <Link href={`/blog/${slug}`}>{title}</Link>
                  </p>
                  <span className="font-mono">{formatDate(date)}</span>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
