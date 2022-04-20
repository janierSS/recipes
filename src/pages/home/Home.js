import React, { useEffect, useState } from 'react'
import styles from "./Home.module.css"
import { projectFirestore } from '../../firebase/config'
import RecipeList from '../../components/RecipeList'

const Home = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true)
    const unsub = projectFirestore.collection("recipes").onSnapshot((snapshot) => {
      if (snapshot.empty){
        setError("No recipes were found")
        setIsPending(false)
      }else{
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({id: doc.id, ...doc.data()})
        })
        setData(results)
        setIsPending(false)
      }
    }, (err) => {
      setError(err.message)
      setIsPending(false)
    })

    return () => unsub()

  }, [])
 
  return (
    <div className={styles.home}>
      {error && <p className={styles.error}>{error}</p>}
      {isPending && <p className={styles.loading}>Loading...</p>}
      {data && <RecipeList recipes = {data}/>}
    </div>
  )
}

export default Home