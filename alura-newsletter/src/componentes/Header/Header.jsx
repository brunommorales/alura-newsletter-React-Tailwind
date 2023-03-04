import React from 'react'
import ToggleTheme from '../ToggleTheme/ToggleTheme'

export default function Header({ user }) {
  return (
    <div className='flex h-20 bg-alura-200 dark:bg-dark-200 justify-between items-center px-5 sm:rounded-xl sm:m-5'>
        <span className='text-gray-100'>Olá, {user?.name || "Usuário"}</span>
        {/* o user?.name diz que tiver um user passe o nome dele, se não diga Usuario,
        ele retorna como undefined ao inves de um erro */}
        <h1>Alura Newsletter</h1>
        <ToggleTheme />
    </div>
  )
}
