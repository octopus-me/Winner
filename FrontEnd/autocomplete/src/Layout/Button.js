import style from './Button.module.css'

function Button({sugg, handleSug}){
    return (
        <button 
        className={style.suggestionButton}
        onClick={handleSug}
        >{sugg}</button>
    )
}

export default Button;