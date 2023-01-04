import React from 'react'
import socials from '../data/socials'
import SocialLink from './SocialLink'
const SocialLinks = () => {
  return (
    <ul className='hidden md:flex fixed flex-col z-50 left-0 top-1/2 -translate-y-1/2'>
      {socials.map((social) => {
        return <SocialLink key={social.id} social={social} />
      })}
    </ul>
  )
}

export default SocialLinks;
