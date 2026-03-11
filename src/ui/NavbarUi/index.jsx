import { NavbarItemUi } from "../NavbarItemUi"
import styles from "./styles/index.module.css"

export const NavbarUi = ({navbarItemsList}) => {
    return(<nav className={styles.navbar}>
        <div>
            logo    
        </div>

        <ul>
            {navbarItemsList.map((item)=>{
                return(<NavbarItemUi key={item.id} item={item} />)
            })}
        </ul>
    </nav>)
}