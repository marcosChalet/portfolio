import { SectionVisibleType } from '@/core/SectionVisible.type';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInButton, SignOutButton, useUser } from '@clerk/nextjs';
import { z } from 'zod';

import Layout from '../ui/Layout';

const sendMessageSchema = z.object({
  email: z.string().nonempty('email obrigatório!').email('formato inválido!'),
  name: z.string().nonempty('nome obrigatório!'),
  message: z.string().nonempty('mensagem obrigatória!'),
});

type sendMessageType = z.infer<typeof sendMessageSchema>;

export default function Contact({ isVisible, setSection }: SectionVisibleType) {
  const user = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<sendMessageType>({
    resolver: zodResolver(sendMessageSchema),
  });

  function sendMessage(data: any) {
    user.isSignedIn &&
      fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      });
    window.location.reload();
  }

  useEffect(() => {
    if (isVisible) setSection(7);
  }, [isVisible]);

  return (
    <Layout
      id={'contact'}
      articleClass="flex-col w-full my-28"
      sectionClass="mx-2"
    >
      <h1
        className={`title-text-clamp mx-4 bg-gradient-to-r from-fuchsia-500 to-rose-500
          bg-clip-text font-bold text-transparent sm:ml-3
        `}
      >
        CONTATO
      </h1>

      <form
        autoComplete="off"
        method="post"
        onSubmit={handleSubmit(sendMessage)}
        className="z-10 m-auto mt-4 flex w-[60%] min-w-[17rem] flex-col rounded-sm border-[1px]
        border-[#333]/10 px-2 py-4 text-slate-300 backdrop-blur-md sm:mt-14 sm:w-[35rem] sm:py-14 sm:px-16 lg:w-[47rem]"
      >
        <div>
          <div className="flex justify-between bg-gray-700/20">
            <input
              readOnly
              defaultValue={
                user.isSignedIn ? user.user?.emailAddresses[0].emailAddress : ''
              }
              type="email"
              {...register('email')}
              placeholder="E-mail"
              className="h-12 w-full cursor-not-allowed rounded-sm border-r-2 border-slate-700 bg-inherit px-2 outline-none"
            />

            {!user.isSignedIn ? (
              <SignInButton
                children={
                  <img
                    src="/imgs/google.svg"
                    className="w-12 animate-pulse bg-slate-100 p-3 hover:cursor-pointer"
                  />
                }
                mode="modal"
              />
            ) : (
              <SignOutButton
                children={
                  <img
                    src="/imgs/exit.svg"
                    className="w-12 bg-violet-900 p-3 hover:cursor-pointer"
                  />
                }
              />
            )}
          </div>
        </div>

        <div className="my-5">
          {errors.name && (
            <span className="font-bold uppercase text-red-600">
              {errors.name.message}
            </span>
          )}
          <input
            disabled={!user.isSignedIn}
            type="text"
            {...register('name')}
            placeholder="Nome"
            className={`mt-1 w-full rounded-sm bg-gray-700/20 py-3 px-2 outline-none ${
              !user.isSignedIn && 'cursor-not-allowed'
            }`}
          />
        </div>

        <div className="mb-5">
          {errors.message && (
            <span className="font-bold uppercase text-red-600">
              {errors.message.message}
            </span>
          )}
          <textarea
            disabled={!user.isSignedIn}
            rows={5}
            {...register('message')}
            placeholder="Mensagem"
            className={`mt-1 w-full resize-none rounded-sm bg-gray-700/20 py-3 px-2 outline-none
              ${!user.isSignedIn && 'cursor-not-allowed'}
            `}
          />
        </div>

        <button
          disabled={!user.isSignedIn}
          className={`w-full rounded-md bg-gray-700/20 py-3 text-xl font-bold
           text-slate-400 transition-all duration-500 ${
             !user.isSignedIn
               ? 'cursor-not-allowed hover:bg-gray-700/20'
               : 'hover:bg-gray-700/30'
           }`}
          type="submit"
        >
          ENVIAR
        </button>
      </form>
    </Layout>
  );
}
