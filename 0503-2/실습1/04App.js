import {useState} from 'react'
let a = new Array(10000).fill(0)
function App(){
let [name, setName] = useState('')
return (
<div>
<input onChange={ (e)=>{ setName(e.target.value) }}/>
{
a.map(()=>{
return <div>{name}</div>
})
}
</div>
)
}

export default App;
