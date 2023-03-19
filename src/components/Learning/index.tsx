import Layout from '../ui/Layout';

export default function Learning() {
  const skills = [
    {
      language: 'Native',
      alt: 'React Native logo',
      iconPath: '/imgs/native-logo.svg',
    },
    {
      language: 'MongoDB',
      alt: 'MongoDB logo',
      iconPath: '/imgs/mongodb-logo.svg',
    },
    {
      language: 'Node',
      alt: 'Nodejs logo',
      iconPath: '/imgs/nodejs-logo.svg',
    },
  ];

  return (
    <Layout
      sectionClass="mt-1 h-fit bg-slate-900"
      articleClass="w-full flex-wrap items-center justify-center py-28"
    >
      <h1 className="absolute top-5 left-3 bg-gradient-to-r from-fuchsia-500 to-rose-500 bg-clip-text text-3xl font-bold text-transparent sm:left-14 sm:text-4xl">
        LEARNING
      </h1>

      {skills.map((item) => {
        return (
          <div
            key={item.language}
            className="m-2 rounded-lg bg-slate-800 p-5 font-bold text-slate-400"
          >
            <div className="flex h-16 w-16 flex-col items-center justify-evenly xl:h-24 xl:w-24">
              <img
                src={item.iconPath}
                alt={item.alt}
                className="h-12 w-12 pb-1"
              />
              <span className="text-slate-400 xl:text-lg">{item.language}</span>
            </div>
          </div>
        );
      })}
    </Layout>
  );
}
