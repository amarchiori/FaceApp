import React from "react";

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn){
        return (
        <nav style={{display:'flex', justifycontent:'flex-end'}}>
            <p onClick={()=>onRouteChange('signout')} className="f3 link dim black underline pa3 pointern">Sign Out</p>
        </nav>
        );
    } else {
        return (
            <nav style={{display:'flex', justifycontent:'flex-end'}}>
                <p onClick={()=>onRouteChange('signin')} className="f3 link dim black underline pa3 pointern">Sign Out</p>
                <p onClick={()=>onRouteChange('register')} className="f3 link dim black underline pa3 pointern">Register</p>
            </nav>
        )
    }
}

export default Navigation;