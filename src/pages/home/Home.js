import React from 'react'
import styles from "./Home.module.css"
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'

const Home = () => {
  const { data, isPending, error } = useFetch('http://localhost:3000/recipes')
  return (
    <div className={styles.home}>
      {error && <p className={styles.error}>{error}</p>}
      {isPending && <p className={styles.loading}>Loading...</p>}
      {data && <RecipeList recipes = {data}/>}
    </div>
  )
}

export default Home