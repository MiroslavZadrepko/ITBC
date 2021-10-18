const Search = ({setInputSearch,inputSearch}) => {
    return ( 
        <input type="search" value={inputSearch} placeholder="search..." onChange={(e)=>{
            setInputSearch(e.target.value)
          }} />
     );
}
 
export default Search;