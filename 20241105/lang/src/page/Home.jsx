import React from 'react'
import Header from '../Components/Header'
import Content from '../Components/Content'
import { TranslateProvider } from '../Context/TranslateContext'

export default function Home() {
  return (
    <article>
        <TranslateProvider>
            <Header/>
            <Content/>
        </TranslateProvider>
    </article>
  )
}
