import Link from 'next/link';

export default function Ribons({ section }: { section: number }) {
  return (
    <>
      <span
        className="sm:text-md absolute top-0 left-7 flex h-20 w-6 items-center justify-center
          rounded-b-sm bg-slate-800 text-sm font-bold italic tracking-wide text-slate-300
          after:absolute after:-rotate-90 after:content-['Chalet\'s'] sm:right-10 sm:h-28 sm:w-7"
      />

      <span
        className="fixed right-2 top-[40%] z-10 hidden flex-col items-center justify-center
          rounded-md bg-gray-600/20 sm:flex md:flex"
      >
        <Link
          scroll={false}
          href={'/#hero'}
          className={`m-2 h-3 w-3 rounded-full border-2 border-slate-400 xl:h-3.5 xl:w-3.5 ${
            section >= 1 ? 'bg-slate-400' : 'bg-transparent'
          }`}
        />
        <Link
          scroll={false}
          href={'/#about'}
          className={`m-2 h-3 w-3 rounded-full border-2 border-slate-400 xl:h-3.5 xl:w-3.5 ${
            section >= 2 ? 'bg-slate-400' : 'bg-transparent'
          }`}
        />
        <Link
          scroll={false}
          href={'/#skills'}
          className={`m-2 h-3 w-3 rounded-full border-2 border-slate-400 xl:h-3.5 xl:w-3.5 ${
            section >= 3 ? 'bg-slate-400' : 'bg-transparent'
          }`}
        />
        <Link
          scroll={false}
          href={'/#learning'}
          className={`m-2 h-3 w-3 rounded-full border-2 border-slate-400 xl:h-3.5 xl:w-3.5 ${
            section >= 4 ? 'bg-slate-400' : 'bg-transparent'
          }`}
        />
        <Link
          scroll={false}
          href={'/#experiences'}
          className={`m-2 h-3 w-3 rounded-full border-2 border-slate-400 xl:h-3.5 xl:w-3.5 ${
            section >= 5 ? 'bg-slate-400' : 'bg-transparent'
          }`}
        />
        <Link
          scroll={false}
          href={'/#projects'}
          className={`m-2 h-3 w-3 rounded-full border-2 border-slate-400 xl:h-3.5 xl:w-3.5 ${
            section >= 6 ? 'bg-slate-400' : 'bg-transparent'
          }`}
        />
        <Link
          scroll={false}
          href={'/#contact'}
          className={`m-2 h-3 w-3 rounded-full border-2 border-slate-400 xl:h-3.5 xl:w-3.5 ${
            section >= 7 ? 'bg-slate-400' : 'bg-transparent'
          }`}
        />
      </span>
    </>
  );
}
