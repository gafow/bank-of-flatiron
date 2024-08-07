import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/table';
import Form from './components/form';
import Search from './components/search';

function App() {
  const [data, setData] = useState([])
  const [data2, setData2] = useState([])


  useEffect(() => {

    const fetchData = () => {
      fetch("https://bank-of-flatiron-saver.vercel.app/transactions").
        then(response => response.json())
        .then(data => {
          setData2(data)
          setData(data)
        })
    }


    fetchData()

  }, [])


  function addTransaction(transObj) {
    fetch("https://bank-of-flatiron-saver.vercel.app/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(transObj)
    }).
      then(response => response.json())

  }

  function searchTransaction(input) {
    const results = data2.filter((trans) => trans.description.toLowerCase().includes(input.toLowerCase()) || trans.category.toLowerCase().includes(input.toLowerCase()))
    setData(results)
  }

  function reset() {
    setData(data2)
  }

  return (
    <div className="App">
      <Search searchTransaction={searchTransaction} reset={reset} />
      <Form addTransaction={addTransaction} />
      <Table data={data} />
    </div>
  );
}

export default App;
