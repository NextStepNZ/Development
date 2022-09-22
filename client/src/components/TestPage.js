import React from 'react'
import { Link } from "react-router-dom";

function TestPage() {

    return (
        <div class='quizStuff'>
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
                <li>
                    <Link to="../test4">Test4</Link>
                </li>
                <li>
                    <Link to="../test5">Test5</Link>
                </li>
                <li>
                    <Link to="../test6">Test6</Link>
                </li>
                <li>
                    <Link to="../test7">Test7</Link>
                </li>
                <li>
                    <Link to="../test8">Test8</Link>
                </li>
                <li>
                    <Link to="../test9">Test9</Link>
                </li>
            </ul>
        </div>
    )
}

export default TestPage