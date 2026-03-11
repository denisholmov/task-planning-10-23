export const NavbarItemUi = ({item}) => {
    return(<li>
        <item.icon/>
        <p>{item.title}</p>
    </li>);
}