import React, { useState } from 'react';
import style from './Search.module.css';
import searchIcon from '../Imagens/icon.png';



function Search() {
    return(
        <div className={style.search}>
            <img src={searchIcon} alt="icon"></img>
            <h1>Busca com Autocompletar</h1>
            <p>Digite no campo abaixo para exibir as sugestões</p>
            <input type="text" placeholder='Digite para buscas...'></input>
            <button>BUSCAR</button>
        </div>
    )
}

export default Search;
