import React, { useContext } from 'react'
import { Context } from '../../context/Context'

function Homepage(props) {

    
    const context = useContext(Context)
    const { userConnected, userConnectedSocket } = context.State
    const { Dispatch } = context

const redirect = () => {


props.history.push('/Community')

}
    return (
        <div className='homepage-container'>
           
           <div>
                <h1> Dev Community  </h1>
                
                <h4> Chatea con otros desarrolladores! </h4>
                
                <button onClick={redirect}> Empezar </button>
              
            </div> 

        </div>
    )
}

export default Homepage