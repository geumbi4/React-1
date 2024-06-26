import React from 'react';
import PropTypes from 'prop-types' // 프로퍼티 타입을 지정해주기 위해 사용 한다.
function Main({name, color}) {
return (
<div>
<main>
<h1 style={{color}}>안녕하세요. {name} 입니다.</h1>
</main>
</div>
);
}
// 프로퍼티 타입 지정
Main.propTypes = {
name: PropTypes.string
}
// 프로퍼티 기본값 지정
Main.defaultProps = {
name: '디폴트'
}
export default Main;
