import { useEffect, useState } from "react";
import axios from "axios";

function AxiosCRUD() {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);

    const API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=5";

    const fetchPosts = async () => {
        try {
            setLoading(true);
            const response = await axios.get(API_URL);
            setPosts(response.data);
        } catch (error) {
            console.error("Lỗi GET:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const addPost = async () => {
        if (!title) {
            alert("Vui lòng nhập tiêu đề!");
            return;
        }

        const newPost = {
            title: title,
            body: "Nội dung demo Axios",
            userId: 1,
        };

        try {
            const response = await axios.post(
                "https://jsonplaceholder.typicode.com/posts",
                newPost
            );

            setPosts([response.data, ...posts]);
            setTitle("");
        } catch (error) {
            console.error("Lỗi POST:", error);
        }
    };

    const deletePost = async (id) => {
        try {
            await axios.delete(
                `https://jsonplaceholder.typicode.com/posts/${id}`
            );

            setPosts(posts.filter((post) => post.id !== id));
        } catch (error) {
            console.error("Lỗi DELETE:", error);
        }
    };

    return (
        <div style={{ border: "1px solid #666", padding: 16, marginTop: 20 }}>
            <h2>Axios CRUD (Fake API online)</h2>

            <input
                type="text"
                placeholder="Nhập tiêu đề"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <button onClick={addPost} style={{ marginLeft: 8 }}>
                Thêm
            </button>

            {loading && <p>Đang tải dữ liệu...</p>}

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

export default AxiosCRUD;
