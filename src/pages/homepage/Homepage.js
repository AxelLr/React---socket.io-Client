import React from 'react'

function Homepage(props) {

    console.log(props)

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