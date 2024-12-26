import { useEffect, useState } from "react"
import {getMenuList} from '../api/MenuAPI'
import MenuItem from '../components/MenuItem'
import boxStyle from './Menu.module.css'
import {useNavigate} from 'react-router-dom'    // 쿼리스트링으로 작성한 url 요청을 도와줄 hooks

function Menu() {
    const [menuList, setMenuList] = useState([])

    const [searchValue, setSearchValue] = useState('')

    const navigate = useNavigate()

    /* 메뉴 컴포넌트가 마운트 되기 전 useEffect가 데이터를 가져와 state에 담는다.. */
    useEffect(
        () => {
            /* json으로 파싱된 데이터들은 console.table로 찍어 표 형태로 확인 가능하다. */
            // console.table(getMenuList())
            setMenuList(getMenuList())
        },
        []
    )

    const onClickHandler = () => {
        console.log(searchValue);

        /* useNavigate 훅을 이용하여 링크를 이동시킬 수 있다. */
        navigate(`/menu/search?menuName=${searchValue}`)
    }

    return(
        <>
            <h1>판매 메뉴 목록</h1>

            <div>
                <input type="search" name="menuName" onChange={(event) => {setSearchValue(event.target.value)}} />
                <button onClick={onClickHandler}>검색</button>
            </div>
            <div className={boxStyle.MenuBox}>
                {menuList.map(menu => <MenuItem key = {menu.menuCode} menu={menu}/>)}
            </div>
        </>
    )
}

export default Menu