import MyContext from '../context/MyContext'
import React, { useState, useEffect } from 'react'
import { api } from '../services/axios'
import { ArticlesModel } from '../interface/articles'
// import { formatedData } from '../utils/formated-data'

interface Props {
  children: React.ReactNode
}

const Provider: React.FC<Props> = ({ children }) => {
  const [articlesData, setArticlesData] = useState<ArticlesModel[]>([])
  const [articlesDataFilter, setArticlesDataFilter] = useState<ArticlesModel[]>(articlesData)
  const [loading, setLoading] = useState<boolean>(true)
  const [searchValue, setSearchValue] = useState<string>('')
  const [date, setDate] = useState<string>('')

  // const [dateValue, setDateValue] = useState([])
  // console.log(dateValue, 'ta pegando da api')

  // const test = () => {
  //   const articlesDateMap = articlesData.filter((article) => {
  //     setDateValue(article.publishedAt)
  //   })
  //   // return articlesDateMap
  //   // const sorted_meetings = articlesData.sort((a,b) => {
  //   //   return new Date(a.publishedAt).getTime() -
  //   //   new Date(b.publishedAt).getTime()
  //   // }).reverse();
  //   return articlesDateMap
  // }

  const articleFiltered = () => {
    const articles = articlesData.filter((article) => {
      return article.title.toLowerCase().includes(searchValue.toLowerCase())
    })
    setArticlesDataFilter(articles)

    // if (date === 'mais_antiga') {
    //   console.log(date)
    //   // setArticlesDataFilter(articlesDate)
    //   return;
    // }
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
