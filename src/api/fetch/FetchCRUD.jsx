import { useEffect, useState } from "react";

function FetchCRUD() {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");

    const API_URL = "https://jsonplaceholder.typicode.com/posts";

    useEffect(() => {
        fetch(API_URL + "?_limit=5")
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((error) => console.log("Lỗi GET:", error));
    }, []);

    const addPost = () => {
        if (title === "") {
            alert("Vui lòng nhập tiêu đề!");
            return;
        }

        const newPost = {
            title: title,
            body: "Nội dung demo",
            userId: 1,
        };

        fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        })
            .then((res) => res.json())
            .then((data) => {
                setPosts([data, ...posts]);
                setTitle("");
            });
    };

    const deletePost = (id) => {
        fetch(API_URL + "/" + id, {
            method: "DELETE",
        }).then(() => {
            setPosts(posts.filter((post) => post.id !== id));
        });
    };

    return (
        <div style={{ border: "1px solid #ccc", padding: 16, marginTop: 20 }}>
            <h2>Fetch CRUD (Fake API online)</h2>

            <input
                type="text"
                placeholder="Nhập tiêu đề"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <button onClick={addPost} style={{ marginLeft: 8 }}>
                Thêm
            </button>

            <ul>
                {posts.map((post) => (
                    <li key={post.id} style={{ marginTop: 8 }}>
                        {post.title}
                        <button
                            onClick={() => deletePost(post.id)}
                            style={{ marginLeft: 8 }}
                        >
                            Xóa
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FetchCRUD;
