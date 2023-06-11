import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  let name = 'zend'
  let age = 20
  let link = 'http://googlec.com'
  return (
    <div>
      <h4 className='title'>애플후레시 {name}</h4>
      <p className='title-sub'>by zend {age}</p>\
    </div>
  )
}
