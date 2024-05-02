import Layout from '../ui/Layout';

export default function Footer() {
  const socialMedia = [
    {
      title: 'Instagram',
      img: '/imgs/instagram-logo.svg',
      alt: 'Instagram logo',
      url: 'https://www.instagram.com/marcoschalet/',
    },
    {
      title: 'Linkedin',
      img: '/imgs/linkedin-logo.svg',
      alt: 'Linkedin logo',
      url: 'https://www.linkedin.com/in/marcoschalet/',
    },
    {
      title: 'Github',
      img: '/imgs/octocat-logo.svg',
      alt: 'Octocat logo',
      url: 'https://github.com/marcosChalet',
    },
    {
      title: '...',
      img: '',
      alt: '...',
      url: '',
    },
  ];

  return (
    <Layout id={'footer'} articleClass="flex-col w-full">
      <footer className="relative flex flex-col items-center justify-center text-slate-400">
        <div className="grid w-full grid-cols-3 items-center justify-center sm:grid-cols-4">
          {socialMedia.map((media) => {
            return (
              <a
                key={media.title}
                href={media.url}
                target="_blank"
                className="flex h-44 items-center justify-center gap-1 border-[1px] border-r-0 border-l-0
                border-white/10 text-sm font-medium duration-500 hover:bg-slate-600/10 sm:gap-4 sm:text-xl"
              >
                {media.img != '' && (
                  <img
                    src={media.img}
                    alt={media.alt}
                    className="h-4 w-4 object-cover sm:h-[24px] sm:w-[24px]"
                  />
                )}
                {media.title}
              </a>
            );
          })}
        </div>
        <span className="text-md mt-20 py-5 font-bold sm:text-xl">
          Develop By Marcos Chalet
        </span>
      </footer>
    </Layout>
  );
}
