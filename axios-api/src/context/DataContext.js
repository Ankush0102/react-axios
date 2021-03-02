import React, { createContext } from "react";
import axios from 'axios'
import secureAxios from '../config/SecureAxios'

export const DataContext = createContext();

export default class DataContextprovider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: []
        };
    }

    componentDidMount() {
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then((res) => res.json())
        //     .then((data) => {
        //         this.setState({ userDetails: data });
        //     });
        secureAxios("https://jsonplaceholder.typicode.com/users").then(res => res.data)
            .then(data => { this.setState({ userDetails: data }) })
    }

    handleChange = (val) => {
        this.setState({ userDetails: val });
    };

    render() {
        return (
            <DataContext.Provider
                value={{
                    userDetails: this.state.userDetails,
                    handleChange: this.handleChange
                }}
            >
                {this.props.children}
            </DataContext.Provider>
        );
    }
}
