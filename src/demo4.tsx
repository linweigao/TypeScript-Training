import * as React from "react";

export interface User {
    name: string;
    age: number;
    address: string;
    dob?: Date;
}

export class UserComponent extends React.Component<User, {}> {
    constructor(props: User) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>User Component</h1>
                Hello, {this.props.name}
                <br />
                You are {this.props.age} years old,
                <br />
                You live at: {this.props.address}
                <br />
                you were born: {this.props.dob.toDateString()}
            </div>
        );
    }
}

class TestComponent extends React.Component<{}> {
    render() {
        return (
            <UserComponent name='linwei' age={24} address='eBay' />
        )
    }
}