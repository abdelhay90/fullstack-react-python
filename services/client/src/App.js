import React, {Component} from 'react';
import axios from 'axios';
import UsersList from './components/UsersList';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers() {
        axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`)  // new
            .then((res) => { this.setState({ users: res.data.data.users }); })
            .catch((err) => { console.log(err); });
    }

    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-one-third">
                            <br/>
                            <h1 className="title is-1">All Users</h1>
                            <hr/><br/>
                            <UsersList users={this.state.users}/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default App;
