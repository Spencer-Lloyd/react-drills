import React from 'react';

import Todo from './Todo';

export default function List(props) {
    var list = props.task.map((e, i) => {
        return (
            <Todo key = {i} task = {e}/>
        )
    })

    return (
        <div>
            {list}
        </div>
    )
}