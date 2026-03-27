import { useState, useEffect } from "react";
import PostCard from "./PostCard";
import LoadingSpinner from "./LoadingSpinner";
import { useFavorites } from "../context/FavoritesContext"; 

function PostList() {
  const { favorites } = useFavorites(); 
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data.slice(0, 20));
      } catch (err) {
        console.error("ดึงข้อมูลไม่สำเร็จ:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []); // ทำงานครั้งเดียวตอนโหลด Component

  const filtered = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <h2 style={{ color: "#2d3748", borderBottom: "2px solid #1e40af", paddingBottom: "0.5rem" }}>
        โพสต์ล่าสุด
      </h2>
      <input
        type="text"
        placeholder="ค้นหาโพสต์..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem", boxSizing: "border-box" }}
      />
      
      {filtered.length > 0 ? (
        filtered.map((post) => (
          <PostCard key={post.id} post={post} />
        ))
      ) : (
        <p style={{ textAlign: "center", color: "#718096" }}>ไม่พบโพสต์ที่ค้นหา</p>
      )}
    </div>
  );
}

export default PostList;