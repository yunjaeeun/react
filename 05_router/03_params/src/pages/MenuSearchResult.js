import { useEffect } from 'react';
import {useSearchParams} from 'react-router-dom'
import { serachMenu } from '../api/MenuAPI';
import { useState } from 'react';
import MenuItem from '../components/MenuItem';
import boxStyle from './Menu.module.css'

function MenuSearchResult() {

    const[searchParam] = useSearchParams()
    const searchMenuName = searchParam.get('menuName')
    const[menuList, setMenuList] = useState([])

    useEffect(
        () => {
            setMenuList(serachMenu(searchMenuName))
        }, []
    )

    return (
        <>
        <h1>검색</h1>
        <div className={boxStyle.MenuBox}>
            {menuList.map(menu => <MenuItem key={menu.menuCode} menu = {menu} />)}
        </div>
        </>
    )
}

export default MenuSearchResult