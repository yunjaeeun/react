import {Navigate} from 'react-router-dom'

function MyPage() {
    
    const isLogin = false
    
    if(!isLogin) {
        /*
            컴포넌트 내에서 권한이나 다른 특정 상황에 의해 다른 페이지로 연동하고 싶을 떄 Navigate 컴포넌트를 사용할 ㅅ ㅜ있다.
            useNavigate와 같지만 함수식으로 작성할 것인지 컴포넌트 형태로 작성할 것인지에 따라
            useNavigate와 Navigate 중에 선택할 수 있다.
        */
        return <Navigate to="/login"/>
    }

    return (
        <h1>마이 페이지</h1>
    )
}

export default MyPage