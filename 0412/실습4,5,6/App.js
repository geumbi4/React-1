import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Wrapper from './Wrapper';
function App() {
return (
<div>
<Header />
<Wrapper>
<Main color="blue"/>
</Wrapper>
<Footer />
</div>
);
}
export default App;