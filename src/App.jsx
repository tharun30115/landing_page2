import { useState } from "react"


const App = () => {

  let heroData = [
    {text1:"Drive into", text2:"what you Love"},
    {text1:"Indulge", text2:"your Passions"},
    {text1:"Give in to", text2:"your Passions"}
  ]

  const [heroCount,setHeroCount] = useState(2)

  return (
    <div>
      hello
    </div>
  )
}

export default App