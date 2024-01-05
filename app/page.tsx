import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>hello world</h1>
      <br />
      <Link href="/posts">Posting page</Link>
      <br />
      <Link href="/albums">album page</Link>
    </div>

  )
}
