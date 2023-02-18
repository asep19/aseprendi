import Image from './Image'
import Link from './Link'

const Card = ({ title, imgSrc, href, description }) => (
  <Link href={href} aria-label={`Link to ${title}`}>
    <div className="w-60 mr-6 mt-6">
      <div>
        {/* <img className="w-60 h-36 rounded-2xl" src="static/images/projects/blogr.png" alt="blogr landing page" /> */}
        <Image width={240} height={144} src={imgSrc} alt={title} className="rounded-2xl" />
      </div>
      <div className="pt-2 text-center">
        <h3 className="text-gray-800 dark:text-white font-semibold">{title}</h3>
        <p className="text-gray-600 dark:text-white/70">{description}</p>
      </div>
    </div>
  </Link>
)

export default Card
