
import React from 'react';

class Form extends React.Component {

    state = {
        blog: {
            name: "name"
        }
    };

    handleChange = event => {
        const blog = { ...this.state.blog, name: event.target.value}
        this.setState({blog});
    }

    handleSubmit = event => {
        event.preventDefault();
        alert(this.state.blog.name);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Blogs</h2>
                <h3>Add Blog</h3>
                <input type="text"
                    onChange={this.handleChange}
                    value={this.state.blog.name}
                    ></input>
                <input type="submit"></input>                
            </form>
        )
    }
}

export default Form;