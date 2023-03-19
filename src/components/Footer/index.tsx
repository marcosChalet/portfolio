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
  ];

  return (
    <footer className="relative mt-1 flex h-20 items-center justify-center bg-slate-900 text-slate-400">
      <div className="absolute -top-5">
        <div className="justify-cente flex w-full items-center justify-center bg-slate-900 px-3">
          {socialMedia.map((media) => {
            return (
              <div
                key={media.title}
                className="m-2 h-[24px] w-[24px] overflow-hidden rounded-sm font-bold text-slate-400 hover:cursor-pointer"
              >
                <a href={media.url} target="_blank">
                  <img
                    src={media.img}
                    alt={media.alt}
                    className="h-full w-full object-cover"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <span>Develop By Marcos Chalet</span>
    </footer>
  );
}
