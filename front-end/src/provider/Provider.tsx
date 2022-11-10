import MyContext from '../context/MyContext'
import React, { useState, useEffect } from 'react'
import { api } from '../services/axios'
import { ArticlesModel } from '../interface/articles'

interface Props {
  children: React.ReactNode
}

const Provider: React.FC<Props> = ({ children }) => {
  const [articlesData, setArticlesData] = useState<ArticlesModel[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [hiddenButton, setHiddenButton] = useState<boolean>(true)

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
      setHiddenButton(true)
      const { data } = await api.get('/articles?p=10')
      setArticlesData(data)
      setHiddenButton(false)
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
    hiddenButton,
  }

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
}

export default Provider
