import { ReactNode, createContext, useEffect, useState } from 'react'
import axios from 'axios'

interface MarvelSeriesProps {
  title: string
  id: number
  thumbnail: {
    path: string
    extension: string
  }
  urls: { type: string; url: string }[]
}

interface MarvelContextType {
  series: MarvelSeriesProps[]
}

interface MarvelProviderProps {
  children: ReactNode
}

export const MarvelContext = createContext({} as MarvelContextType) // createContext que vem de dentro from 'use-context-selector'

export function MarvelContextProvider({ children }: MarvelProviderProps) {
  const timeStamp = '1565045589'
  const apiKey = '46502e31af29d6f9268225533bfadb8d'
  const md5 = 'dac4146118190d813f8cd5ca4b795be2'
  const [series, setSeries] = useState<MarvelSeriesProps[]>([])

  useEffect(() => {
    const fetchMarvelSeries = async () => {
      try {
        const response = await axios.get(
          `http://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`,
        )
        setSeries(response.data.data.results)
      } catch (error) {
        console.log(error)
      }
    }

    fetchMarvelSeries()
  }, [])

  return (
    <MarvelContext.Provider value={{ series }}>
      {children}
    </MarvelContext.Provider>
  )
}
