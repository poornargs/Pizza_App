import React from 'react';
import Login from "./Login";


const HOC = (Component) => {
    return (
        
        class extends React.Component {
            state = {
                auth: localStorage.getItem('token')
            }

            render() {
                return (
                    <div>
                        {this.state.auth ? <Component /> : <Login />}
                    </div>
                )
            }
        }
    );
}

export default HOC;