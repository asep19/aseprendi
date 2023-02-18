import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-2 mt-2 text-sm font-medium bg-primary-100/40 hover:bg-primary-300 dark:bg-primary-100/20 dark:hover:bg-primary-300 dark:text-white px-3 py-0.5 rounded text-primary-300 hover:text-white ">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
