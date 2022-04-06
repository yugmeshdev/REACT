import React from "react";

const Hello=()=>{
    // return(
    //     <div>
    //         <h1>Hello ooh</h1>
    //     </div>
    // )
    //without JSX
    return React.createElement('div',{id:"hello",className:'dummy'},React.createElement('h1',null,'Helllllpppp'))
}
export default Hello;