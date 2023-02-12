import './styles/Header.css'
import iconEdit from '../images/iconEdit.png'

export function Header(){
    return(
        <header>
        <h2 className='subTitle'> [Making you Life Easier] </h2>
        <h1>
            Discovering the World
        </h1>
        <img src={iconEdit} className="iconEdit" alt="edit" />
        <nav>
            <ul >
                <li> All </li>
                <li> Travel </li>
                <li> LifeStyle </li>
                <li> Business </li>
                <li> Food </li>
                <li> Work </li>
            </ul>
        </nav>
        </header>
    )
}

