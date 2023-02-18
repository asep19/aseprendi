import Tag from './Tag'
import { getAllTags } from '@/lib/tags'
import Link from '@/components/Link'
import kebabCase from '@/lib/utils/kebabCase'

const Tags = () => {
  const tags = getAllTags('blog')
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <h2>List of Tags</h2>
      {sortedTags.map((t) => {
        return (
          <div key={t} className="mt-2 mb-2 mr-5">
            <Tag text={t} />
            <Link
              href={`/tags/${kebabCase(t)}`}
              className="-ml-2 text-sm font-semibold text-gray-600 uppercase dark:text-gray-300"
            >
              {` (${tags[t]})`}
            </Link>
          </div>
        )
      })}
      {/* <div className="text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 xl:row-start-2"> */}
      {/*      {tags && ( */}
      {/*        <div className="py-4 xl:py-8"> */}
      {/*          <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400"> */}
      {/*            Tags */}
      {/*          </h2> */}
      {/*          <div className="flex flex-wrap"> */}
      {/*            {tags.map((tag) => ( */}
      {/*              <Tag key={tag} text={tag} /> */}
      {/*            ))} */}
      {/*          </div> */}
      {/*        </div> */}
      {/*      )}  */}
      {/*    </div> */}
    </>
  )
}

export default Tags
