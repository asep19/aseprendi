import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />

      <section className="max-w-[700px] mx-auto pt-16">
        <h2 className="text-xl font-semibold">Works</h2>
        <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap justify-center items-center sm:items-stretch space-y-10 sm:space-y-0">
          {projectsData.map((item) => (
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

      {/*  */}
      {/*       <div className=""> */}
      {/*         <div className="pt-6 pb-8 space-y-2 md:space-y-5"> */}
      {/*           <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl "> */}
      {/*             Projects */}
      {/*           </h1>  */}
      {/*         </div> */}
      {/*         <div className="container py-12"> */}
      {/*           <div className="flex flex-wrap"> */}
      {/*             {projectsData.map((d) => ( */}
      {/*               <Card */}
      {/*                 key={d.title} */}
      {/*                 title={d.title} */}
      {/*                 description={d.description} */}
      {/*                 imgSrc={d.imgSrc} */}
      {/*                 href={d.href} */}
      {/*               /> */}
      {/*             ))} */}
      {/*           </div> */}
      {/*         </div> */}
      {/*       </div> */}
    </>
  )
}
