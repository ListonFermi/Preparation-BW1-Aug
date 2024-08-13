import { useState } from "react"

function App() {

  const c = ['India', 'Bangladesh', 'SriLanka', 'China']

  const [countries, setCountries] = useState(c)
  const [keyword, setKeyword] = useState('')

  function handleChange(e) {
    console.log(e.target.value)
    setKeyword(e.target.value)
  }

  function handleSearch(e) {
    e.preventDefault()
    const searchedCountry = countries.filter(country => country === keyword)
    setCountries(searchedCountry)
  }

  return <>
    <input type="text" value={keyword} onChange={handleChange} />
    <button onClick={handleSearch} >Search</button>
    {countries.map((country, i) => <h1 key={i}>{country}</h1>)}
  </>
}

export default App


  // const [] = useCountry('Asia')
