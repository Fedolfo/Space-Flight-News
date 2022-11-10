import React, { useContext } from 'react'
import MyContext from '../context/MyContext'
import { ArticlesModel } from '../interface/articles'
import { formatedData } from '../utils/formated-data'

const Articles = (): JSX.Element => {
  const { loading, handleNewArticlesApi, setSearchValue, articlesDataFilter, articleFiltered, setDate, date } = useContext(MyContext)
  return (
    <main>
      <header>
        <label htmlFor="search-input">
          <input type="text" id="search-input" onChange={({ target }) => setSearchValue(target.value) }/>
        </label>
        <button type="button" onClick={articleFiltered}>buscar</button>
        <select name="sort" id="dataId" onChange={({ target }) => setDate(target.value)} value={date}>
          <option value="" disabled defaultValue='Sort'>Sort</option>
          <option value="mais_nova">Mais Nova</option>
          <option value="mais_antiga">Mais Antiga</option>
        </select>
      </header>
      <section>
        <h1>Space Flight News</h1>
        {(articlesDataFilter.length === 0) && <span>Não existe esse titulo </span>}
        {loading ? (
          <div>loading...</div>
        ) : (
         articlesDataFilter?.map((article: ArticlesModel, index: React.Key) => {
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
        {articlesDataFilter.length > 0 && (
          <button type='button' onClick={handleNewArticlesApi}>
            Carregar mais
          </button>
        )}
      </section>
    </main>
  )
}

export default Articles
