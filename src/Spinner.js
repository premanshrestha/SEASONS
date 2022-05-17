import React from 'react' ; 
const Spinner = (props) => {
    return(
    <div className = "ui active dimmer"> 
        <div className = "ui big text loader">{props.message}</div>
    </div>
    );
}
//If there is not message in spiner
Spinner.defaultProps = {
    message : 'Loading....'
}
export default Spinner; 