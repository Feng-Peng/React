import { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Prompt extends Component {
    static defaultValue = {
        when: false,
        message: ''
    }

    componentDidMount() {
        this.handleBlock()
    }

    componentWillUpdate() {
        this.handleBlock()
    }

    handleBlock() {
        if (this.props.when) {
            this.unblock = this.props.history.block(this.props.message)
        } else {
            if (this.unblock) {
                this.unblock()
            }
        }
    }

    componentWillUnmount() {
        if (this.unblock) {
            this.unblock()
        }
    }

    render() {
        return null
    }
}

export default withRouter(Prompt)