import React from 'react'
import { Link } from "react-router-dom";

function TestPage() {

    return (
        <div>
            <ul>
                <li>
                    <Link to="/test1">Test1</Link>
                </li>
                <li>
                    <Link to="../test2">Test2</Link>
                </li>
                <li>
                    <Link to="../test3">Test3</Link>
                </li>
            </ul>
        </div>
    )
}

export default TestPage