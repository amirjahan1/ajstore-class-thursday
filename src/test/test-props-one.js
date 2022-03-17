import React from 'react'





const TestPropsOne = (...props) => {

console.log(props)
    return(
        <>
        <h1> TEST PROPS ONE </h1>
            <h1> my name is {props.name} </h1>
        </>
    )
}


export default TestPropsOne