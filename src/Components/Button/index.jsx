import './styles.css'

export default function Button({text, onChange}){
    return(
        <button className='buttonComp'>{text}</button>
    )
}