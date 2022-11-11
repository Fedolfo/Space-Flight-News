import MyContext from '../context/MyContext'
import React, { useState, useEffect } from 'react'
import { api } from '../services/axios'
import { ArticlesModel } from '../interface/articles'

interface Props {
  children: React.ReactNode
}

const Provider: React.FC<Props> = ({ children }) => {
  const [articlesData, setArticlesData] = useState<ArticlesModel[]>([])
  const [articlesDataFilter, setArticlesDataFilter] = useState<ArticlesModel[]>(articlesData)
  const [loading, setLoading] = useState<boolean>(true)
  const [searchValue, setSearchValue] = useState<string>('')
  const [date, setDate] = useState<string>('')

  const articleFilteredDate = (articles: ArticlesModel[]) => {
    if (date.includes('mais_nova')) {
      const articlesMostNew = articles.sort(
        (a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt),
      )
      setArticlesDataFilter(articlesMostNew)
    }
    if (date.includes('mais_antiga')) {
      const articlesOlder = articles.sort(
        (a, b) => Date.parse(a.publishedAt) - Date.parse(b.publishedAt),
      )
      setArticlesDataFilter(articlesOlder)
    }
  }

  const articleFiltered = () => {
    const articles = articlesData.filter((article) => {
      return article.title.toLowerCase().includes(searchValue.toLowerCase())
    })
    setArticlesDataFilter(articles)
    articleFilteredDate(articles)
    setSearchValue('')
    if (searchValue === '') {
      (document.querySelector('#search-input') as HTMLInputElement).value = ''
    }
  }

  useEffect(() => {
    articleFiltered()
  }, [articlesData, date])

  const fetchApiArticles = async (): Promise<void> => {
    try {
      setLoading(true)
      const { data } = await api.get('/articles')
      setArticlesData(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleNewArticlesApi = async (): Promise<void> => {
    try {
      const { data } = await api.get('/articles?p=10')
      setArticlesData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchApiArticles()
  }, [])

  const contextValue = {
    articlesData,
    loading,
    handleNewArticlesApi,
    setSearchValue,
    searchValue,
    articlesDataFilter,
    articleFiltered,
    setDate,
    date,
  }

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
}

export default Provider
