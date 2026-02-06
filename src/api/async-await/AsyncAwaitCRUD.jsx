import { useEffect, useState } from "react";

function AsyncAwaitCRUD() {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);

    const API_URL = "https://jsonplaceholder.typicode.com/posts";

    const fetchPosts = async () => {
        try {
            setLoading(true);
            const response = await fetch(API_URL + "?_limit=5");
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.log("Lỗi khi GET:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);


    const addPost = async () => {
        if (title === "") {
            alert("Vui lòng nhập tiêu đề!");
            return;
        }

        const newPost = {
            title: title,
            body: "Nội dung demo",
            userId: 1,
        };

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newPost),
            });

            const data = await response.json();
            setPosts([data, ...posts]);
            setTitle("");
        } catch (error) {
            console.log("Lỗi khi POST:", error);
        }
    };

    const deletePost = async (id) => {
        try {
            await fetch(API_URL + "/" + id, {
                method: "DELETE",
            });

            setPosts(posts.filter((post) => post.id !== id));
        } catch (error) {
            console.log("Lỗi khi DELETE:", error);
        }
    };

    return (
        <div style={{ border: "1px solid gray", padding: 16, marginTop: 20 }}>
            <h2>Async / Await CRUD (Fake API online)</h2>

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

export default AsyncAwaitCRUD;
