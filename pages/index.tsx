import { createClient } from '@supabase/supabase-js'
import BlurImage from '../components/BlurImage'

type Image = {
  id: number
  href: string
  imageSrc: string
  name: string
  username: string
}

export default function Gallery({ images }: { images: Image[] }) {
  return (
    <div className="mx-auto max-w-sm px-5 sm:max-w-2xl sm:px-6 lg:max-w-6xl lg:px-8">
      <div className="py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {images.map((image) => (
            <BlurImage key={image.id} image={image} />
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const suabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  )

  const { data } = await suabaseAdmin.from('images').select('*').order('id')

  return {
    props: { images: data },
  }
}
