import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm.js";
import Results from "./Results.js";
import API from "../utils/API";


function Search(){
    const [ users, setUsers  ]= useState([]);
    const [ search, setSearch]= useState("");
    
    useEffect( function(){
      getUsers();
    }, [])

        async function getUsers(){
            const res = await API.getRandomUser();
            setUsers( res.data.results );
        }

        function getSearchResults(){
          console.log('Searching for:', search)
            const searchedUser = users.filter(user => search.indexOf(user.name.first)> -1 || search.indexOf(user.name.last)> -1)
          console.log(searchedUser)
          setUsers(searchedUser)
        }

        function handleInputChange( event ){
          setSearch( event.target.value );
          console.log(event.target.value);
        };
        function handleFormSubmit( event ){
            event.preventDefault();
            getSearchResults();
        }

function sortFirstName (){
  const sorted = users.sort( function(item1, item2){
    if(item1.name.first < item2.name.first){
      return -1
    } if (item1.name.first > item2.name.first) {
      return 1
    }
    return 0
  })
  setUsers([...sorted])
}
function sortLastName (){
  const sorted = users.sort( function(item1, item2){
    if(item1.name.last < item2.name.last){
      return -1
    } if (item1.name.last > item2.name.last) {
      return 1
    }
    return 0
  })
  setUsers([...sorted])
}

const headerStyle = {
      fontWeight: "Bolder",
      textAlign: "center",
      display: "block",
      height: "10rem",
      backgroundColor: "PaleVioletRed",
      padding: "1rem",
      paddingTop: "3rem"
}
return (
    
        <div style={{backgroundColor: "lightpink"}}>
          <h1 style={headerStyle} className="title">Employee Directory!</h1>
        
        <div style={{marginLeft:"auto", marginRight:"auto", width:"80%"}}>
        
        <SearchForm
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
        />
        <Results list={users} sortFirstName={sortFirstName} sortLastName={sortLastName}/>
        </div>
        <footer style=
            {{position: "fixed", 
            textAlign:"center", 
            display:"block", 
            bottom: "0", 
            paddingTop: "1rem",
            height: "4rem", 
            width: "100%", 
            backgroundColor: "palevioletred"}}>
        </footer>
      </div>
    );
}

export default Search;
