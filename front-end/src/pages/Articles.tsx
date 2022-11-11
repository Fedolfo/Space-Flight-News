import React, { useContext } from 'react'
import MyContext from '../context/MyContext'
import { ArticlesModel } from '../interface/articles'
import { formatedData } from '../utils/formated-data'
import spaceFlight from '../assets/images/space-flight.png'
import './Articles.scss'

const Articles = (): JSX.Element => {
  const {
    loading,
    handleNewArticlesApi,
    setSearchValue,
    articlesDataFilter,
    articleFiltered,
    setDate,
    date,
  } = useContext(MyContext)
  return (
    <main>
      <header>
        <div className='search-input'>
          <label htmlFor='search-input'>
            <input
              type='text'
              id='search-input'
              onChange={({ target }) => setSearchValue(target.value)}
            />
            <button type='button' onClick={articleFiltered} className='material-symbols-outlined'>
              search
            </button>
          </label>
          <select
            name='sort'
            id='dataId'
            onChange={({ target }) => setDate(target.value)}
            value={date}
          >
            <option value='' disabled defaultValue={'Sort'}>
              Sort
            </option>
            <option value='mais_nova'>Mais Nova</option>
            <option value='mais_antiga'>Mais Antiga</option>
          </select>
        </div>
      </header>
      <section>
        <img src={spaceFlight} alt='imagem de um foguete' className='img-space-flight'/>
        <h1>Space Flight News</h1>
        <hr />
        {articlesDataFilter.length === 0 && (
          <button onClick={articleFiltered} className='card-not-found'>
            Ops! Parece que não existe esse nome que está buscando, mas não fique triste,{' '}
            <b>clica aqui</b>, e te levarei de volta para as notícias!
          </button>
        )}
        {loading ? (
          <div>loading...</div>
        ) : (
          articlesDataFilter?.map((article: ArticlesModel, index: React.Key) => {
            return (
              <div key={index} className='card-article'>
                <div className={`card-article-img img-${index}`}>
                  <img src={article.imageUrl} alt={article.title} />
                </div>
                <div className='card-article-details'>
                  <h4>{article.title}</h4>
                  <div className='card-article-date'>
                    <data>{formatedData(article.publishedAt)}</data>
                    <span>{article.newsSite}</span>
                  </div>
                  <p>{article.summary}</p>
                  <button type='button'>
                    <a href={article.url} target='_blank' rel='noopener noreferrer'>
                      Ver mais
                    </a>
                  </button>
                </div>
              </div>
            )
          })
        )}
        {articlesDataFilter.length >= 1 && articlesDataFilter.length < 2 && (
          <button onClick={articleFiltered} className='card-not-found'>
            Quer ver outras noticías? <b>Clique aqui!</b>
          </button>
        )}
        {articlesDataFilter.length > 1 && articlesDataFilter.length <= 9 && (
          <button type='button' onClick={handleNewArticlesApi} className='button-load'>
            Carregar mais
          </button>
        )}
      </section>
    </main>
  )
}

export default Articles
