import { SectionVisibleType } from '@/core/SectionVisible.type';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import Layout from '../ui/Layout';

const sendMessageSchema = z.object({
  name: z.string().nonempty('nome obrigatório!'),
  email: z.string().nonempty('email obrigatório!').email('formato inválido!'),
  message: z.string().nonempty('mensagem obrigatória!'),
});

type sendMessageType = z.infer<typeof sendMessageSchema>;

export default function Contact({ isVisible, setSection }: SectionVisibleType) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<sendMessageType>({
    resolver: zodResolver(sendMessageSchema),
  });

  function sendMessage(data: any) {
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
        onSubmit={handleSubmit(sendMessage)}
        className="flex w-[60%] min-w-[12rem] flex-col text-slate-300 md:w-[33rem]"
      >
        <div className="my-5">
          {errors.name && (
            <span className="font-bold uppercase text-red-600">
              {errors.name.message}
            </span>
          )}
          <input
            type="text"
            {...register('name')}
            placeholder="Nome"
            className="mt-1 w-full rounded-sm bg-slate-700 py-3 px-2"
          />
        </div>

        <div>
          {errors.email && (
            <span className="font-bold uppercase text-red-600">
              {errors.email.message}
            </span>
          )}
          <input
            type="email"
            {...register('email')}
            placeholder="E-mail"
            className="mt-1 w-full rounded-sm bg-slate-700 py-3 px-2"
          />
        </div>

        <div className="my-5">
          {errors.message && (
            <span className="font-bold uppercase text-red-600">
              {errors.message.message}
            </span>
          )}
          <textarea
            rows={5}
            {...register('message')}
            placeholder="Mensagem"
            className="mt-1 w-full resize-none rounded-sm bg-slate-700 py-3 px-2"
          />
        </div>

        <button
          className="w-full rounded-md bg-slate-800 py-3 text-xl font-bold text-slate-400 transition-all duration-500 hover:bg-slate-700"
          type="submit"
        >
          ENVIAR
        </button>
      </form>
    </Layout>
  );
}
