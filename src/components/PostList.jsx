import { useState, useEffect } from "react";
import PostCard from "./PostCard";
import LoadingSpinner from "./LoadingSpinner";
// 1. นำเข้า useFavorites เพื่อดึงข้อมูลจากคลังกลาง
import { useFavorites } from "../context/FavoritesContext"; 

function PostList() {
  const { favorites } = useFavorites(); 
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(""); // ต้องมี state นี้สำหรับช่องค้นหา

  //สร้างตัวแปร filtered เพื่อกรองข้อมูลตามคำค้นหา
  const filtered = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      {/* ส่วน Input สำหรับค้นหา */}
      <input
        type="text"
        placeholder="ค้นหาโพสต์..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
      />
      
      {filtered.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;