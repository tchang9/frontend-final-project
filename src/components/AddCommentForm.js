import React from 'react'

class AddCommentForm extends React.Component {

    state = {
        comment: ''
    }

    handleChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    render() {
        return (
            <form>
            Comment:
            <input 
                onChange={this.handleChange}type="text" 
                name="comment" 
                value={this.state.comment}/>
            <button>Submit</button>
        </form> 
        )
    }
}

export default AddCommentForm