import React, {useState} from 'react';
import {PostItem} from './components/PostItem';
import './styles/App.css'
import {v1} from "uuid";
import Title from "antd/lib/typography/Title";

export type PostType = {
    id: string,
    title: string,
    description: string
}

function App() {
    const [posts, setPosts] = useState<PostType[]>([
        {id: v1(), title: 'JavaScript', description: 'learn JS'},
        {id: v1(), title: 'Java', description: 'learn Java'},
        {id: v1(), title: 'MSSQL', description: 'learn MSSQL'},
    ])

    return (
        <div className="App">
            <Title style={{textAlign:'center'}}>Posts list</Title>
            {
                posts.map(post => {
                    return (
                        <PostItem key={post.id} post={post}/>
                    )
                })
            }
        </div>
    );
}

export default App;
