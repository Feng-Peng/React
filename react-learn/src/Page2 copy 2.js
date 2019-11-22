import React, { Component } from 'react'
import Prompt from './Prompt'

export default class Page2 extends Component {
    state = {
        val: ''
    }

    render() {
        return (
            <div>
                <Prompt when={this.state.val !== ''}
                    meaasge="会导致数据丢失，真的要跳转？"
                />
                <textarea value={this.state.val}
                    onChange={e => {
                        this.setState({
                            val: e.target.value
                        })
                    }}
                ></textarea>
            </div>
        )
    }
}
