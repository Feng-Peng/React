import React, { Component } from 'react'

export default class Page2 extends Component {
    state = {
        val: ''
    }

    componentDidMount() {
        this.handleBlock()
    }

    componentDidUpdate() {
        this.handleBlock()
    }

    componentWillUnmount() {
        if (this.unBlock) {
            this.unBlock();
        }
    }

    handleBlock(value) {
        if (value) {
            this.unBlock = this.props.history.block('该操作会导致文本框中的内容消失，要继续跳转页面吗？')
        } else {
            if (this.unBlock) {
                this.unBlock();
            }
        }
    }

    render() {
        return (
            <div>
                <textarea value={this.state.val}
                    onChange={e => {
                        this.setState({
                            val: e.target.value
                        })
                        this.handleBlock(e.target.value)
                    }}
                ></textarea>
            </div>
        )
    }
}
