import {useState} from "react";

function App() {

    const [post, setPost] = useState({
        title: '',
        content: '',
    })

    const handePost = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(e.target.name);

        setPost({...post, [name]: value });

        console.log(post);
    }

    return (
        <div className="bg-gray-50 min-h-screen p-4">
            <div className="mb-4 w-1/2 mx-auto bg-white p-4 border border-gray-200">
                <div className="mb-4">
                    <input
                        onChange={(e) => handePost(e)}
                        name="title"
                        placeholder="title"
                        type="text"
                        className="border border-gray-200 p-4 w-full"/>
                </div>
                <div className="mb-4">
                    <textarea
                        onChange={(e) => handePost(e)}
                        placeholder="content"
                        name="content"
                        className="border border-gray-200 p-4 w-full"/>
                </div>
                <div>
                    <a
                        className="inline-block text-xs px-3 py-2 text-white bg-sky-600 border-sky-700"
                        href="#">STORE</a>
                </div>
            </div>
        </div>
    )
}

export default App
