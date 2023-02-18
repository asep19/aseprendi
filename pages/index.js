import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import Image from 'next/image'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5
const MAX_PROJECTS_DISPLAY = 3

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      {/* Hero section */}
      <section className="max-w-[700px] mx-auto flex flex-col justify-center items-center">
        <div className="">
          <Image
            src="static/images/profile_me.jpg"
            alt="picture of me"
            height={112}
            width={112}
            className="rounded-full"
          />
          {/* <img className="w-28 h-28 rounded-full" src="static/images/profile_me.jpg" alt="my photo profile" /> */}
        </div>
        <div className="text-center">
          <h1 className="text-3xl pt-4">Hi, I'm {siteMetadata.author}</h1>
          <p className="font-semibold pb-6">Frontend Developer</p>
          <p className="text-slate-500">
            a full-stack JavaScript developer. I have over 6 years of experience developing
            websites. I enjoy working on both front-end and backend. My go to library on front-end
            is React, and NodeJS on backend.
          </p>
        </div>
      </section>

      {/* Projects showcase */}
      <section className="max-w-[700px] mx-auto pt-16">
        <h2 className="text-xl font-semibold">Featured Works</h2>
        <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap items-center sm:items-stretch space-y-10 sm:space-y-0">
          {projectsData.slice(0, MAX_PROJECTS_DISPLAY).map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              imgSrc={item.imgSrc}
              href={item.href}
            />
          ))}
        </div>
      </section>

      {/* Articles section */}
      <section className="max-w-[700px] mx-auto pt-16">
        <h2 className="text-xl font-semibold">Latest Writings</h2>
        {/* <h2 className="text-xl font-semibold">Highlights</h2> */}

        <ul className="mt-4 divide-y divide-slate-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, tags } = frontMatter
            return (
              <li key={slug}>
                <article className="py-4 rounded-md">
                  <Link href={`/blog/${slug}`}>
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg text-black/80 dark:text-white font-semibold">
                        {title}
                      </h3>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {formatDate(date)}
                      </div>
                    </div>
                    <div>
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </Link>
                </article>
              </li>
            )
          })}
        </ul>

        {/* <article */}
        {/*   class="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:shadow-sm dark:shadow-gray-700/25" */}
        {/* > */}
        {/*   <div class="rounded-[10px] bg-white p-4 !pt-20 dark:bg-gray-900 sm:p-6"> */}
        {/*     <time */}
        {/*       datetime="2022-10-10" */}
        {/*       class="block text-xs text-gray-500 dark:text-gray-400" */}
        {/*     > */}
        {/*       10th Oct 2022 */}
        {/*     </time> */}

        {/*     <a href="#"> */}
        {/*       <h3 class="mt-0.5 text-lg font-medium text-gray-900 dark:text-white"> */}
        {/*         How to center an element using JavaScript and jQuery */}
        {/*       </h3> */}
        {/*     </a> */}

        {/*     <div class="mt-4 flex flex-wrap gap-1"> */}
        {/*       <span */}
        {/*         class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100" */}
        {/*       > */}
        {/*         Snippet */}
        {/*       </span> */}

        {/*       <span */}
        {/*         class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100" */}
        {/*       > */}
        {/*         JavaScript */}
        {/*       </span> */}
        {/*     </div> */}
        {/*   </div> */}
        {/* </article> */}

        {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end text-base font-medium leading-6 mt-6">
            <Link
              href="/blog"
              className="text-primary-400 hover:text-primary-800 dark:text-primary-300 dark:hover:text-primary-400"
              aria-label="all posts"
            >
              All Posts &rarr;
            </Link>
          </div>
        )}
      </section>

      {/* {siteMetadata.newsletter.provider !== '' && ( */}
      {/*   <div className="flex items-center justify-center pt-4"> */}
      {/*     <NewsletterForm /> */}
      {/*   </div> */}
      {/* )} */}
    </>
  )
}
