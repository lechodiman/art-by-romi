import { Dialog, Popover, Tab, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { MenuIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline';
import bruno from '~/images/bruno.jpg';
import copito from '~/images/copito.jpg';
import domi from '~/images/domi.jpg';
import lana from '~/images/lana.jpg';
import locky from '~/images/locky.jpg';
import luna from '~/images/luna.jpg';
import lunita from '~/images/lunita.jpg';
import pajarraco from '~/images/pajarraco.jpg';
import pia from '~/images/pia.jpg';
import ruffo from '~/images/ruffo.jpg';
import thor from '~/images/thor.jpg';
import tomi from '~/images/tomi.jpg';

const navigation = {
  pages: [
    { name: 'Inicio', href: '#' },
    { name: 'Testimonios', href: '#' },
    { name: 'Portfolio', href: '#' },
    { name: 'Contáctame', href: '#' },
  ],
};

const favorites = [
  {
    id: 1,
    name: 'Black Basic Tee',
    price: '$32',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
    imageAlt: "Model wearing women's black cotton crewneck tee.",
  },
  {
    id: 2,
    name: 'Off-White Basic Tee',
    price: '$32',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg',
    imageAlt: "Model wearing women's off-white cotton crewneck tee.",
  },
  {
    id: 3,
    name: 'Mountains Artwork Tee',
    price: '$36',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-03.jpg',
    imageAlt:
      "Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
  },
];

const footerNavigation = {
  shop: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  account: [
    { name: 'Manage Account', href: '#' },
    { name: 'Returns & Exchanges', href: '#' },
    { name: 'Redeem a Gift Card', href: '#' },
  ],
  connect: [
    { name: 'Contact Us', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Pinterest', href: '#' },
  ],
};

export default function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className='bg-white'>
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='fixed inset-0 flex z-40 lg:hidden' onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto'>
              <div className='px-4 pt-5 pb-2 flex'>
                <button
                  type='button'
                  className='-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400'
                  onClick={() => setOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <XIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>

              <div className='border-t border-gray-200 py-6 px-4 space-y-6'>
                {navigation.pages.map((page) => (
                  <div key={page.name} className='flow-root'>
                    <a
                      href={page.href}
                      className='-m-2 p-2 block font-medium text-gray-900'
                    >
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>

              <div className='border-t border-gray-200 py-6 px-4 space-y-6'>
                <div className='flow-root'>
                  <a href='#' className='-m-2 p-2 block font-medium text-gray-900'>
                    Sign in
                  </a>
                </div>
                <div className='flow-root'>
                  <a href='#' className='-m-2 p-2 block font-medium text-gray-900'>
                    Create account
                  </a>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className='relative overflow-hidden'>
        {/* Top navigation */}
        <nav
          aria-label='Top'
          className='relative z-20 bg-white bg-opacity-90 backdrop-filter backdrop-blur-xl'
        >
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='h-16 flex items-center'>
              <button
                type='button'
                className='bg-white p-2 rounded-md text-gray-400 lg:hidden'
                onClick={() => setOpen(true)}
              >
                <span className='sr-only'>Open menu</span>
                <MenuIcon className='h-6 w-6' aria-hidden='true' />
              </button>

              {/* Logo */}
              <div className='ml-4 flex lg:ml-0'>
                <a href='#'>
                  <span className='sr-only'>Workflow</span>
                  <img
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600'
                    alt=''
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className='hidden lg:ml-8 lg:block lg:self-stretch'>
                <div className='h-full flex space-x-8'>
                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-800'
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>
            </div>
          </div>
        </nav>

        {/* Hero section */}
        <div className='pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48'>
          <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static'>
            <div className='sm:max-w-lg'>
              <h1 className='text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl'>
                Retrato a tu mascota!
              </h1>
              <p className='mt-4 text-xl text-gray-500'>
                Hago retratos personalizados de perros, gatos, animales salvajes y de
                granja.
              </p>
            </div>
            <div>
              <div className='mt-10'>
                {/* Decorative image grid */}
                <div
                  aria-hidden='true'
                  className='pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full'
                >
                  <div className='absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8'>
                    <div className='flex items-center space-x-6 lg:space-x-8'>
                      <div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
                        <div className='w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100'>
                          <img
                            src={ruffo}
                            alt=''
                            className='w-full h-full object-center object-cover'
                          />
                        </div>
                        <div className='w-44 h-64 rounded-lg overflow-hidden'>
                          <img
                            src={domi}
                            alt=''
                            className='w-full h-full object-center object-cover'
                          />
                        </div>
                      </div>
                      <div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
                        <div className='w-44 h-64 rounded-lg overflow-hidden'>
                          <img
                            src={pia}
                            alt=''
                            className='w-full h-full object-center object-cover'
                          />
                        </div>
                        <div className='w-44 h-64 rounded-lg overflow-hidden'>
                          <img
                            src={tomi}
                            alt=''
                            className='w-full h-full object-center object-cover'
                          />
                        </div>
                        <div className='w-44 h-64 rounded-lg overflow-hidden'>
                          <img
                            src={thor}
                            alt=''
                            className='w-full h-full object-center object-cover'
                          />
                        </div>
                      </div>
                      <div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
                        <div className='w-44 h-64 rounded-lg overflow-hidden'>
                          <img
                            src={bruno}
                            alt=''
                            className='w-full h-full object-center object-cover'
                          />
                        </div>
                        <div className='w-44 h-64 rounded-lg overflow-hidden'>
                          <img
                            src={luna}
                            alt=''
                            className='w-full h-full object-center object-cover'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href='#'
                  className='inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700'
                >
                  Retrata a tu mascota
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Category section */}
        <section aria-labelledby='category-heading' className='bg-gray-50'>
          <div className='max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
            <div className='sm:flex sm:items-baseline sm:justify-between'>
              <h2
                id='category-heading'
                className='text-2xl font-extrabold tracking-tight text-gray-900'
              >
                Shop by Category
              </h2>
              <a
                href='#'
                className='hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block'
              >
                Browse all categories<span aria-hidden='true'> &rarr;</span>
              </a>
            </div>

            <div className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8'>
              <div className='group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2'>
                <img
                  src='https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg'
                  alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                  className='object-center object-cover group-hover:opacity-75'
                />
                <div
                  aria-hidden='true'
                  className='bg-gradient-to-b from-transparent to-black opacity-50'
                />
                <div className='p-6 flex items-end'>
                  <div>
                    <h3 className='font-semibold text-white'>
                      <a href='#'>
                        <span className='absolute inset-0' />
                        New Arrivals
                      </a>
                    </h3>
                    <p aria-hidden='true' className='mt-1 text-sm text-white'>
                      Shop now
                    </p>
                  </div>
                </div>
              </div>
              <div className='group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full'>
                <img
                  src='https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg'
                  alt='Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.'
                  className='object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full'
                />
                <div
                  aria-hidden='true'
                  className='bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0'
                />
                <div className='p-6 flex items-end sm:absolute sm:inset-0'>
                  <div>
                    <h3 className='font-semibold text-white'>
                      <a href='#'>
                        <span className='absolute inset-0' />
                        Accessories
                      </a>
                    </h3>
                    <p aria-hidden='true' className='mt-1 text-sm text-white'>
                      Shop now
                    </p>
                  </div>
                </div>
              </div>
              <div className='group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full'>
                <img
                  src='https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg'
                  alt='Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk.'
                  className='object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full'
                />
                <div
                  aria-hidden='true'
                  className='bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0'
                />
                <div className='p-6 flex items-end sm:absolute sm:inset-0'>
                  <div>
                    <h3 className='font-semibold text-white'>
                      <a href='#'>
                        <span className='absolute inset-0' />
                        Workspace
                      </a>
                    </h3>
                    <p aria-hidden='true' className='mt-1 text-sm text-white'>
                      Shop now
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-6 sm:hidden'>
              <a
                href='#'
                className='block text-sm font-semibold text-indigo-600 hover:text-indigo-500'
              >
                Browse all categories<span aria-hidden='true'> &rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* Featured section */}
        <section aria-labelledby='cause-heading'>
          <div className='relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16'>
            <div className='absolute inset-0 overflow-hidden'>
              <img
                src='https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg'
                alt=''
                className='w-full h-full object-center object-cover'
              />
            </div>
            <div
              aria-hidden='true'
              className='absolute inset-0 bg-gray-900 bg-opacity-50'
            />
            <div className='relative max-w-3xl mx-auto flex flex-col items-center text-center'>
              <h2
                id='cause-heading'
                className='text-3xl font-extrabold tracking-tight text-white sm:text-4xl'
              >
                Long-term thinking
              </h2>
              <p className='mt-3 text-xl text-white'>
                We're committed to responsible, sustainable, and ethical manufacturing.
                Our small-scale approach allows us to focus on quality and reduce our
                impact. We're doing our best to delay the inevitable heat-death of the
                universe.
              </p>
              <a
                href='#'
                className='mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto'
              >
                Read our story
              </a>
            </div>
          </div>
        </section>

        {/* Favorites section */}
        <section aria-labelledby='favorites-heading'>
          <div className='max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
            <div className='sm:flex sm:items-baseline sm:justify-between'>
              <h2
                id='favorites-heading'
                className='text-2xl font-extrabold tracking-tight text-gray-900'
              >
                Our Favorites
              </h2>
              <a
                href='#'
                className='hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block'
              >
                Browse all favorites<span aria-hidden='true'> &rarr;</span>
              </a>
            </div>

            <div className='mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8'>
              {favorites.map((favorite) => (
                <div key={favorite.id} className='group relative'>
                  <div className='w-full h-96 rounded-lg overflow-hidden group-hover:opacity-75 sm:h-auto sm:aspect-w-2 sm:aspect-h-3'>
                    <img
                      src={favorite.imageSrc}
                      alt={favorite.imageAlt}
                      className='w-full h-full object-center object-cover'
                    />
                  </div>
                  <h3 className='mt-4 text-base font-semibold text-gray-900'>
                    <a href={favorite.href}>
                      <span className='absolute inset-0' />
                      {favorite.name}
                    </a>
                  </h3>
                  <p className='mt-1 text-sm text-gray-500'>{favorite.price}</p>
                </div>
              ))}
            </div>

            <div className='mt-6 sm:hidden'>
              <a
                href='#'
                className='block text-sm font-semibold text-indigo-600 hover:text-indigo-500'
              >
                Browse all favorites<span aria-hidden='true'> &rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section aria-labelledby='sale-heading'>
          <div className='pt-32 overflow-hidden sm:pt-14'>
            <div className='bg-gray-800'>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='relative pt-48 pb-16 sm:pb-24'>
                  <div>
                    <h2
                      id='sale-heading'
                      className='text-4xl font-extrabold tracking-tight text-white md:text-5xl'
                    >
                      Final Stock.
                      <br />
                      Up to 50% off.
                    </h2>
                    <div className='mt-6 text-base'>
                      <a href='#' className='font-semibold text-white'>
                        Shop the sale<span aria-hidden='true'> &rarr;</span>
                      </a>
                    </div>
                  </div>

                  <div className='absolute -top-32 left-1/2 transform -translate-x-1/2 sm:top-6 sm:translate-x-0'>
                    <div className='ml-24 flex space-x-6 min-w-max sm:ml-3 lg:space-x-8'>
                      <div className='flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8'>
                        <div className='flex-shrink-0'>
                          <img
                            className='h-64 w-64 rounded-lg object-cover md:h-72 md:w-72'
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg'
                            alt=''
                          />
                        </div>

                        <div className='mt-6 flex-shrink-0 sm:mt-0'>
                          <img
                            className='h-64 w-64 rounded-lg object-cover md:h-72 md:w-72'
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg'
                            alt=''
                          />
                        </div>
                      </div>
                      <div className='flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8'>
                        <div className='flex-shrink-0'>
                          <img
                            className='h-64 w-64 rounded-lg object-cover md:h-72 md:w-72'
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg'
                            alt=''
                          />
                        </div>

                        <div className='mt-6 flex-shrink-0 sm:mt-0'>
                          <img
                            className='h-64 w-64 rounded-lg object-cover md:h-72 md:w-72'
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg'
                            alt=''
                          />
                        </div>
                      </div>
                      <div className='flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8'>
                        <div className='flex-shrink-0'>
                          <img
                            className='h-64 w-64 rounded-lg object-cover md:h-72 md:w-72'
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg'
                            alt=''
                          />
                        </div>

                        <div className='mt-6 flex-shrink-0 sm:mt-0'>
                          <img
                            className='h-64 w-64 rounded-lg object-cover md:h-72 md:w-72'
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer aria-labelledby='footer-heading' className='bg-white'>
        <h2 id='footer-heading' className='sr-only'>
          Footer
        </h2>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='py-20 xl:grid xl:grid-cols-3 xl:gap-8'>
            <div className='grid grid-cols-2 gap-8 xl:col-span-2'>
              <div className='space-y-16 md:space-y-0 md:grid md:grid-cols-2 md:gap-8'>
                <div>
                  <h3 className='text-sm font-medium text-gray-900'>Shop</h3>
                  <ul role='list' className='mt-6 space-y-6'>
                    {footerNavigation.shop.map((item) => (
                      <li key={item.name} className='text-sm'>
                        <a href={item.href} className='text-gray-500 hover:text-gray-600'>
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className='text-sm font-medium text-gray-900'>Company</h3>
                  <ul role='list' className='mt-6 space-y-6'>
                    {footerNavigation.company.map((item) => (
                      <li key={item.name} className='text-sm'>
                        <a href={item.href} className='text-gray-500 hover:text-gray-600'>
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='space-y-16 md:space-y-0 md:grid md:grid-cols-2 md:gap-8'>
                <div>
                  <h3 className='text-sm font-medium text-gray-900'>Account</h3>
                  <ul role='list' className='mt-6 space-y-6'>
                    {footerNavigation.account.map((item) => (
                      <li key={item.name} className='text-sm'>
                        <a href={item.href} className='text-gray-500 hover:text-gray-600'>
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className='text-sm font-medium text-gray-900'>Connect</h3>
                  <ul role='list' className='mt-6 space-y-6'>
                    {footerNavigation.connect.map((item) => (
                      <li key={item.name} className='text-sm'>
                        <a href={item.href} className='text-gray-500 hover:text-gray-600'>
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className='mt-16 md:mt-16 xl:mt-0'>
              <h3 className='text-sm font-medium text-gray-900'>
                Sign up for our newsletter
              </h3>
              <p className='mt-6 text-sm text-gray-500'>
                The latest deals and savings, sent to your inbox weekly.
              </p>
              <form className='mt-2 flex sm:max-w-md'>
                <label htmlFor='email-address' className='sr-only'>
                  Email address
                </label>
                <input
                  id='email-address'
                  type='text'
                  autoComplete='email'
                  required
                  className='appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-indigo-500 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                />
                <div className='ml-4 flex-shrink-0'>
                  <button
                    type='submit'
                    className='w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className='border-t border-gray-200 py-10'>
            <p className='text-sm text-gray-500'>
              Copyright &copy; 2021 Clothing Company Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
