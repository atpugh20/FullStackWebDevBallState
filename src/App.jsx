import { PostList } from "./components/PostList.jsx";

const posts = [
    {
        title: "Full-Stack React Projects",
        contents: "Let's become full-stack developers!",
        author: "Alex Pugh",
    },
    {
        title: "Hello React!",
        contents: "Perhaps?",
        author: "Alex Pugh",
    },
];

export function App() {
    return <PostList posts={posts} />;
}

export default App;
