import { NavbarItemUi } from "../NavbarItemUi"
import styles from "./styles/index.module.css"

export const NavbarUi = ({navbarItemsList}) => {
    return(<nav className={styles.navbar}>
            <div className={styles.logo}>
                <NavbarItemUi item={navbarItemsList[0]}/>
            </div>

            <ul className={styles.list}>
                {navbarItemsList.map((item)=>{
                    return(<li className={styles.item}><NavbarItemUi key={item.id} item={item} /></li>)
                })}
            </ul>

            <div className={styles.logout}>
                <NavbarItemUi item={navbarItemsList[navbarItemsList.length-1]}/>
            </div>
    </nav>)
}