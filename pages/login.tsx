import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type UserForm = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email('No es un correo válido')
    .required('Debe ingresar un correo'),
  password: yup
    .string()
    .min(8, 'La contraseña es muy corta')
    .required('Debe ingresar una contraseña'),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: UserForm) => {
    console.log('Bienvenido', data);
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <input type="email" {...register('email')} placeholder="Correo" />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type="password"
          {...register('password')}
          placeholder="Contraseña"
        />
        {errors.password && <p>{errors.password.message}</p>}
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}
