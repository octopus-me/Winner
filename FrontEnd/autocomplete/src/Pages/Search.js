import React, { useState } from 'react';
import style from './Search.module.css';
import searchIcon from '../Imagens/icon.png';

import { gql, useLazyQuery } from '@apollo/client';

const GET_SUGGESTIONS = gql`
    query GetSuggestions(
        $searchTerm: String!
    ){
        suggestions(term: $searchTerm){
            id
            suggestion
        }
    }
`;

function Search() {
    const [term, setTerm] = useState('');
    const [getSuggestions, { loading, data }] = useLazyQuery(GET_SUGGESTIONS);


    const handleInputChange = (e) => {
        
        const value = e.target.value;
        setTerm(value);


        if (value.length >= 4) {
          getSuggestions({ variables: { searchTerm: value } });
        }
    };

    function renderSuggestions() {
        if (loading) {
            return <p>Carregando...</p>;
        }
    
        if (data) {
            return (
                <ul className={style.list}>
                    {data.suggestions.map((suggestion) => (
                        <li key={suggestion.id}>{suggestion.suggestion}</li>
                    ))}
                </ul>
            );
        }

        return null;
    }
    
    return(
        <div className={style.search}>
            <img src={searchIcon} alt="icon"></img>
            <h1>Busca com Autocompletar</h1>
            <p>Digite no campo abaixo para exibir as sugestões</p>
            
            <input 
                type="text" 
                placeholder='Digite para buscas...' 
                value={term} 
                onChange={handleInputChange}>
            </input>

            <button>BUSCAR</button>

            {renderSuggestions()}
            
        </div>
    )
}

export default Search;
