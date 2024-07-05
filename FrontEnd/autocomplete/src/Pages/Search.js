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
    const [getSuggestions, { loading, data}] = useLazyQuery(GET_SUGGESTIONS);


    const handleInputChange = (e) => {
        
        const value = e.target.value;
        setTerm(value);

        getSuggestions({ variables: { searchTerm: value } });
    };

    function renderSuggestions() {
        if (loading) {
            return <p>Carregando...</p>;
        }

        initialPartBold();
    
        if (data) {
            return (
                <ul className={style.list}>
                    {data.suggestions.map((suggestion) => (
                        <li key={suggestion.id}>{initialPartBold(suggestion.suggestion)}</li>
                    ))}
                </ul>
            );
        }

        return null;
    }

    function initialPartBold(suggestedText){
        const size = term.length;
        
        if(suggestedText){
            
            const matchedText = suggestedText.slice(0,size)
            const afterMatch = suggestedText.slice(size,)

            return (
                <>
                    <strong>{matchedText}</strong>
                    {afterMatch}
                </>
            )

        }

        return null
        

    }

    function searchInput(){
        return (
            <input 
                type="text" 
                placeholder='Digite para buscar...' 
                value={term} 
                onChange={handleInputChange}>
            </input>
            
        )
    }
    
    return(
        <div>
            <div className={style.search}>

                <img src={searchIcon} alt="icon"></img>

                <h1>Busca com Autocompletar</h1>
                <p>Digite no campo abaixo para exibir as sugestões</p>
                
                {searchInput()}

                <button>BUSCAR</button>

            </div>

            <div className={style.suggestions}>
                {renderSuggestions()}
            </div>

        </div>

    )
}

export default Search;
