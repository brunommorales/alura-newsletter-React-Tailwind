import React, { useState } from 'react'

import Header from './componentes/Header/Header'
import ArticleList from './componentes/ArticleList/ArticleList'
import Form from './componentes/Form/Form'

export default function App() {
  const [user, setUser] = useState()
  const hasUser = Boolean(user)
  return (
    <div className='h-screen'>
    <Header user={user} />
     { hasUser && <ArticleList /> } 
     {/* shortCircuit, ArticleList só vai ser renderizado se o hasUser for verdadeiro
     e o hasUser só vai ser verdadeiro se o estado de user for preenchido */}
     { hasUser || <Form onSubmit={setUser} /> }
     {/* se tiver usuario mostre o ArticleList, se não tiver usuario mostre o Form */}
    </div>
  )
}
