import Image from 'next/image';
import { useEffect, useState } from 'react';
import $ from 'jquery';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setClass] = useState('closed');
  const router = useRouter();
  const { locale, asPath } = useRouter();
  const openModal = (event) => {
    if (open) {
      document.body.classList.remove('navigation-is-open');
    } else {
      document.body.classList.add('navigation-is-open');
    }

    setOpen((open) => !open);
  };
  return (
    <div className='b'>
      <div id='navigacija' className=' '>
        <Link href='/'>
          <div id='logo'> </div>
        </Link>
        <Link href={asPath} locale={'hr'}>
          <div className='lng text-black'>
            <small>HR</small>
          </div>
        </Link>
        <div className='start' onClick={() => router.push('/contact')}>
          <small>
            START A PROJECT <i className='bi bi-arrow-right'></i>
          </small>
        </div>

        <a onClick={openModal} className='cd-nav-trigger p-3'>
          <div className='p-1' id='nav-icon1'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
      </div>
      <div
        id='cd-nav'
        className='cd-nav '
        style={{
          height: '100vh',
          width: '100%',
        }}>
        <div className='cd-navigation-wrapper '>
          <div className=''>
            <nav className='cd-primary-nav'>
              <ul className=' m-auto'>
                <h1 className='m-auto text-4xl'>
                  {' '}
                  <img
                    style={{ width: '100px', marginRight: 'auto' }}
                    src='/logoim.png'
                  />
                </h1>
                <li className='m-auto'>
                  <Link onClick={openModal} href='/'>
                    Home
                  </Link>
                </li>
                <li className='m-auto'>
                  <Link onClick={openModal} href='/case-hoo'>
                    Latest project
                  </Link>
                </li>
                <li className='m-auto'>
                  <Link onClick={openModal} href='/services'>
                    Services
                  </Link>
                </li>
                <li className='m-auto'>
                  <Link onClick={openModal} href='/#portofolio'>
                    Portofolio
                  </Link>
                </li>
                <li className='m-auto'>
                  <Link onClick={openModal} href='/about'>
                    About
                  </Link>
                </li>
                <li className='m-auto'>
                  <Link onClick={openModal} href='/contact'>
                    Contact
                  </Link>
                </li>
                <li className='m-auto text-sm'>
                  <small>Always learning, always growing</small>
                </li>
                <li className='m-auto text-xs'>
                  <small>+ 385 955755081</small>
                  <br />
                  <small>info@immense.agency</small>

                  <br />
                  <small>Velimira Škorpika 7a Šibenik, Croatia</small>
                </li>
              </ul>
              <div style={{ visibility: 'hidden' }}>
                <h1>
                  Immense je softverska tvrtka sa sjedištem u Šibeniku, trokut.
                  Bavimo se razvojem mobilnih, web aplikacija te prilagođenih
                  rješenja.
                </h1>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
