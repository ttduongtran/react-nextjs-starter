import React from 'react'
import Button from '../src/components/button'
import { getLayout } from '../src/layouts/SiteLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import Avatar from '../public/assets/images/duong_chibi.png';
import Image from 'next/image'

const IndexPage = () => (
  <div className="container mx-auto min-h-fit-space flex items-center justify-center">
    <div className="grid grid-cols-3">
      <div className="left col-span-2">
        <h1 className="text-4xl mb-4 font-bold text-green-400">Hey there! This is Duong</h1>
        <div className="text-2xl">
          <p>I'm a Software Engineer.</p>
          <p>I'm very passionate and aim for a perfect product.</p>
          <p>Willing to learn anything that can help me grow up by the day.</p>
        </div>
        <div className='py-10'>
          <h2 className='text-1xl font-bold text-gray-400 my-2'>Explore me</h2>
          <div className="links flex">
            <Button linear={true} className="md:mr-4 mr-2">Portfolio</Button>
            <Button linear={true}>Skills</Button>
          </div>
        </div>
        <div className="socials">
          <h2 className='text-1xl font-bold text-gray-400 my-2'>Get in touch</h2>

          <a className="text-gray-400 hover:text-white md:pr-4 p-2" href="mailto:ttduongtran@gmail.com">
            <span className="sr-only">Gmail</span>
            <FontAwesomeIcon
              icon={faAt}
              style={{ fontSize: 40 }}
            />
          </a>
          <a className="text-gray-400 hover:text-white md:pr-4 p-2" href="https://t.me/ttduongtran">
            <span className="sr-only">Telegram</span>
            <FontAwesomeIcon
              icon={faTelegram}
              style={{ fontSize: 40 }}
            />
          </a>
          <a className="text-gray-400 hover:text-white md:pr-4 p-2" href="https://www.linkedin.com/in/ttduongtran/">
            <span className="sr-only">Linked in</span>
            <FontAwesomeIcon
              icon={faLinkedinIn}
              style={{ fontSize: 40 }}
            />
          </a>
          <a className="text-gray-400 hover:text-white md:pr-4 p-2" href="https://github.com/ttduongtran" target={"_blank"} rel="noreferrer">
            <span className="sr-only">GitHub repository</span>
            <FontAwesomeIcon
              icon={faGithubAlt}
              style={{ fontSize: 40 }}
            />
          </a>
        </div>
      </div>
      <div className="right col-span-1">
        <div className='col-lg-2 row-lg-5 col-xxl-5 d-none d-xl-block mt-lg-5 ml-xl-10 image floating'>
          <Image src={Avatar} width={200} height={200} className="rounded-full" alt="" />
        </div>
      </div>
    </div >
  </div >
)

IndexPage.getLayout = getLayout
export default IndexPage
