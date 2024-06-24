'use client'

import { useEffect } from "react"
import { usePathname } from 'next/navigation'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect'

interface NavbarProps {
  pages: any,
}

const Navbar: React.FC<NavbarProps> = ({ pages }) => {

  const pathname = usePathname()

  useEffect(() => {
    //console.log('pathname', pathname)
    //console.log(isMobile)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar navbar-norwep navbar-expand-lg bg-body-tertiary pt-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img src="/img/01-Hovedlogo-RGB.svg" width="177" height="40" className="d-inline-block align-top" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link underline-animation" href="/awards">Awards</a>
            </li>
            <li className="nav-item">
              <a className="nav-link underline-animation" onClick={() => scrollToSection('candidates')} href="/#candidates">Nominees</a>
            </li>
            <li className="nav-item">
              <a className="nav-link underline-animation" onClick={() => scrollToSection('about')} href="/#about">About</a>
            </li>
            {pages?.map((item: any) => (
              <li key={item._id} className="nav-item">
                <a className="nav-link underline-animation" href={item.slug?.current}>{item?.title}</a>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </nav >
  )
}

export default Navbar