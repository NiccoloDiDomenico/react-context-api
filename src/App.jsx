import { useState, useEffect } from 'react'
import GlobalContext from "./context/GlobalContext";
import AppLayout from "./layout/AppLayout";

const apiURL = import.meta.env.VITE_API_URL

function App() {
  const [post, setPost] = useState([])

  function getPosts() {
    axios.get(`${apiURL}/posts`).then((resp) => {
      console.log(resp);
      setPost(resp.data)
    })
  }

  const globalProviderValue = { post, getPosts }

  return (
    <>
      <GlobalContext.Provider value={globalProviderValue}>
        <AppLayout />
      </GlobalContext.Provider>
    </>
  )
}

export default App
