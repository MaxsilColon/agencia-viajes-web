import './styles.css'

export default function Button({text, onClick}){
    return(
        <button onClick={onClick} className='buttonComp'>{text}</button>
    )
}