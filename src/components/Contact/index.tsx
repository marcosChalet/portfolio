import Layout from '../ui/Layout';

export default function Contact() {
  return (
    <Layout
      sectionClass="bg-slate-900 justify-center"
      articleClass="flex-wrap items-center justify-center py-28 w-full"
    >
      <div className="flex w-full items-center justify-center">
        <h1 className="absolute top-3 bg-gradient-to-r from-fuchsia-500 to-rose-500 bg-clip-text text-4xl font-bold text-transparent">
          CONTACT
        </h1>
      </div>

      <form
        autoComplete="off"
        action="https://api.staticforms.xyz/submit"
        method="post"
        className="flex w-[60%] min-w-[12rem] flex-col text-slate-300 md:w-[33rem]"
      >
        <input
          type="hidden"
          name="accessKey"
          value="5668099e-a183-46a8-bc2c-d5c187855146"
        />
        <input
          type="hidden"
          name="redirectTo"
          value="https://portfolio.mchalet.xyz/"
        />

        <input
          type="text"
          name="name"
          placeholder="Nome"
          className="my-5 w-full rounded-sm bg-slate-700 py-3 px-2"
        />

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className="w-full rounded-sm bg-slate-700 py-3 px-2"
        />

        <textarea
          rows={5}
          name="message"
          placeholder="Mensagem"
          className="my-5 w-full resize-none rounded-sm bg-slate-700 py-3 px-2"
        />

        <button
          className="w-full rounded-md bg-slate-800 py-3 text-xl font-bold text-slate-400"
          type="submit"
        >
          ENVIAR
        </button>
      </form>
    </Layout>
  );
}
