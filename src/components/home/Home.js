import './Home.css';
import { useState, useEffect } from "react";
import ItemListFilter from '../ItemListFilter';
import Pagination from '../Pagination';

const Home = () => {

    const [data, setData] = useState(null)
    const [items, setItems] = useState([])
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);


    useEffect(() => {
    
        const fetchData = async () => {
          setIsPending(true)
          
          try {
            const res = await fetch("https://reqres.in/api/products")
            if(!res.ok) {
              throw new Error(res.statusText)
            }
            const data = await res.json()
    
            setIsPending(false)
            setData(data)
            setError(null)
          } catch (err) {
            if (err.name === "AbortError") {
              console.log("the fetch was aborted")
            } else {
              setIsPending(false)
              setError('Could not fetch the data')
            }
          }
        }

        fetchData();
      }, [])

      useEffect(() => {
        if (data) {
          setItems(data.data);
        }
      }, [data])
      

      const lastItem = currentPage * itemsPerPage;
      const firstItem = lastItem - itemsPerPage
      const currentItems = items.slice(firstItem, lastItem);

      const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
      };
    
    return (
        <div className='home'>
            {data && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && items && <ItemListFilter items={currentItems} />}
            <div className='arrows'>
            <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate} />
            </div>
        </div>
    )
};

export default Home;