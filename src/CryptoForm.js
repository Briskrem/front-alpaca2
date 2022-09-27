import { useState } from "react"

export const CryptoForm = ({getCryptoName}) => {

    // console.log('REFEESHES IN CRYPTO FORM COMPONENT')
    const initial = {
        name: ''
    }
    const [state, setState] = useState(initial)

    const handleChange = (e) =>{
        
        const {name, value} = e.target
        setState(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('anything')
        // console.log(state)
        getCryptoName(state.name)
        setState(initial)
    }

    return (
        
        <form className="CryptoForm" onSubmit={handleSubmit}>
            <input name="name" value={state.name} onChange={handleChange} type="text" placeholder='Enter Crypto Symbol'/>
            <button >GO</button>
        </form>
            
        
    )
}