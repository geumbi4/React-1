import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
function App() {
return (
<div>
<Header />
<Main name="홍길동" color="blue" maleYn/> 
<Footer />
</div>
);
}
export default App;