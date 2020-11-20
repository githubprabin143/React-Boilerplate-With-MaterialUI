import React, { Component } from 'react';
import { Redirect,Route} from 'react-router-dom';

const PrivateRoute = ({component:Component, ...rest}) => {
    return ( 
        <Route
            {...rest}
            render = {props => localStorage.getItem('isAgeAbove21') ?
                                <Component 
                                    {...props}/> :
                                <Redirect  
                                    to={{pathname:'/',state:{from:props.location,message:"Sorry, but Ramón requires you to be 21"}}}/>
            }
        />
     );
}
 
export default PrivateRoute;
