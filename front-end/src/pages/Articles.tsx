import React, { useContext } from 'react'
import MyContext from '../context/MyContext'
import { ArticlesModel } from '../interface/articles'
import { formatedData } from '../utils/formated-data'

const Articles = (): JSX.Element => {
  const { articlesData, loading, handleNewArticlesApi, hiddenButton } = useContext(MyContext)
  return (
    <main>
      <section>
        <h1>Space Flight News</h1>
        {loading ? (
          <div>loading...</div>
        ) : (
          articlesData.map((article: ArticlesModel, index: React.Key) => {
            return (
              <div key={index}>
                <img src={article.imageUrl} alt={article.title} height='150px' />
                <h4>{article.title}</h4>
                <data>{formatedData(article.publishedAt)}</data>
                <span>{article.newsSite}</span>
                <p>{article.summary}</p>
                <button type='button'>
                  <a href={article.url} target='_blank' rel='noopener noreferrer'>
                    Ver mais
                  </a>
                </button>
              </div>
            )
          })
        )}
        {hiddenButton && (
          <button type='button' onClick={handleNewArticlesApi}>
            Carregar mais
          </button>
        )}
      </section>
    </main>
  )
}

export default Articles
