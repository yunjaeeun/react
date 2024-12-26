import menus from '../data/menu-detail.json'

export function getMenuList() {
    return menus
}

export function getMenuDetail(menuCode) {
    return menus.filter(menu => menu.menuCode === parseInt(menuCode))[0] // pathVariable에서 꺼내온 값은 String이다.   
}

export function serachMenu(searchMenuName) {
    /* match 함수는 포함 여부에 따라 인수값이 포함되어 있으면 객체를 반환 */
    return menus.filter(menu => menu.menuName.match(searchMenuName))
}