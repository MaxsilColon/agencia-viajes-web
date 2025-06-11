import './styles.css'

export default function Menu({handleMenu}){
    return(
        <div onClick={handleMenu} className='fatherMenu'>
            <div className='menu'></div>
        </div>
    )
}