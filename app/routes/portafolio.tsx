/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
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

const products1 = [
  {
    id: 1,
    name: 'Bruno',
    href: '#',
    price: '$13',
    description: 'Perrito demasiado bonito',
    imageSrc: bruno,
    imageAlt: 'Perrito demasiado bonito',
  },
  {
    id: 2,
    name: 'Copito',
    href: '#',
    price: '$64',
    description: 'Perrito bonito café',
    imageSrc: copito,
    imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
  },
  {
    id: 3,
    name: 'Tomi',
    href: '#',
    price: '$32',
    description: 'Gato hermoso',
    imageSrc: tomi,
    imageAlt:
      'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
  {
    id: 4,
    name: 'Lunita',
    href: '#',
    price: '$32',
    description: 'Heather Gray',
    imageSrc: lunita,
    imageAlt:
      'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
  {
    id: 5,
    name: 'Pajarraco',
    href: '#',
    price: '$32',
    description: 'Heather Gray',
    imageSrc: pajarraco,
    imageAlt:
      'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
  {
    id: 6,
    name: 'Pia',
    href: '#',
    price: '$32',
    description: 'Heather Gray',
    imageSrc: pia,
    imageAlt:
      'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
  {
    id: 7,
    name: 'Lana',
    href: '#',
    price: '$149',
    description: 'Black',
    imageSrc: lana,
    imageAlt:
      'Close up of long kettle spout pouring boiling water into pour-over coffee mug with frothy coffee.',
  },
  {
    id: 8,
    name: 'Locky',
    href: '#',
    price: '$165',
    description: 'Black',
    imageSrc: locky,
    imageAlt:
      'Extra large black leather workspace pad on desk with computer, wooden shelf, desk organizer, and computer peripherals.',
  },
  {
    id: 9,
    name: 'Luna',
    href: '#',
    price: '$118',
    description: 'Natural',
    imageSrc: luna,
    imageAlt:
      'Leather long wallet held open with hand-stitched card dividers, full-length bill pocket, and simple tab closure.',
  },
  {
    id: 10,
    name: 'Ruffo',
    href: '#',
    price: '$118',
    description: 'Natural',
    imageSrc: ruffo,
    imageAlt:
      'Leather long wallet held open with hand-stitched card dividers, full-length bill pocket, and simple tab closure.',
  },
  {
    id: 11,
    name: 'Thor',
    href: '#',
    price: '$118',
    description: 'Natural',
    imageSrc: thor,
    imageAlt:
      'Leather long wallet held open with hand-stitched card dividers, full-length bill pocket, and simple tab closure.',
  },
  {
    id: 12,
    name: 'Domi',
    href: '#',
    price: '$118',
    description: 'Natural',
    imageSrc: domi,
    imageAlt:
      'Leather long wallet held open with hand-stitched card dividers, full-length bill pocket, and simple tab closure.',
  },
];

export default function Portafolio() {
  return (
    <div className='bg-gray-50'>
      <div>
        <main>
          <div className='max-w-3xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8'>
            <div className='py-24 text-center'>
              <h1 className='text-4xl font-extrabold tracking-tight text-gray-900'>
                Dale un vistazo
              </h1>
              <p className='max-w-3xl mx-auto mt-4 text-base text-gray-500'>
                Cuidadosamente pintados para reflejar la escencia de tu mascota.
              </p>
            </div>

            {/* Product grid */}
            <section aria-labelledby='products-heading' className='mt-8'>
              <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8'>
                {products1.map((product) => (
                  <a key={product.id} href={product.href} className='group'>
                    <div className='w-full overflow-hidden rounded-lg aspect-w-1 aspect-h-1 sm:aspect-w-2 sm:aspect-h-3'>
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className='object-cover object-center w-full h-full group-hover:opacity-75'
                      />
                    </div>
                    <div className='flex items-center justify-between mt-4 text-base font-medium text-gray-900'>
                      <h3>{product.name}</h3>
                    </div>
                    <p className='mt-1 text-sm italic text-gray-500'>
                      {product.description}
                    </p>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
