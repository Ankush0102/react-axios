import React from "react";
import { DataContext } from "../../context/DataContext";
import secureAxios from '../../config/SecureAxios'

export default class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: []
        };
        this.handleInput = this.handleInput.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleInput(event) {
        this.setState({ userDetails: event.target.value });
    }

    handleClick() {
        secureAxios({
            method: 'post',
            url: '/users',
            data: { name: this.state.userDetails },
        }).then((res) => {
            console.log(res.data);
            alert('data has been posted succesfully')
        })
    }

    render() {
        // console.log(this.context, "context details")
        return (
            <div>
                <h1>Digikull Students</h1>
                <div>
                    <h2>Hello Users</h2>
                    <input
                        type="text"
                        style={{ margin: "1%" }}
                        value={this.state.userDetails}
                        onChange={this.handleInput}
                    />
                    <button onClick={this.handleClick}>Add</button>
                </div>
                {this.context.userDetails.map((item) => {
                    return (
                        <div>
                            <h2>{item.name}</h2>
                        </div>
                    );
                })}
            </div>
        );
    }
}

UserDetails.contextType = DataContext;
