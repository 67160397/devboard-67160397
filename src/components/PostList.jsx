import { useState } from "react";
import PostCard from "./PostCard";

function PostList({ posts, favorites, onToggleFavorite }) {
  const [search, setSearch] = useState(""); // สร้าง state สำหรับเก็บคำค้นหา

  // กรองโพสต์ตามคำที่พิมพ์ (Case-insensitive)
  const filtered = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 style={{ color: "#2d3748", borderBottom: "2px solid #1e40af", paddingBottom: "0.5rem" }}>
        โพสต์ล่าสุด
      </h2>

      {/* ช่อง Search */}
      <input
        type="text"
        placeholder="ค้นหาโพสต์..."
        value={search}
        onChange={(e) => setSearch(e.target.value)} // อัปเดต state เมื่อพิมพ์
        style={{
          width: "100%",
          padding: "0.5rem",
          border: "1px solid #cbd5e0",
          borderRadius: "6px",
          marginBottom: "1rem",
          boxSizing: "border-box",
        }}
      />

      {/* ถ้าหาไม่เจอ ให้โชว์ข้อความบอก */}
      {filtered.length === 0 && (
        <p style={{ color: "#718096", textAlign: "center", padding: "1rem" }}>
          ไม่พบโพสต์ที่ค้นหา
        </p>
      )}

      {/* Render โพสต์ที่ผ่านการกรองแล้ว */}
      {filtered.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
          isFavorite={favorites.includes(post.id)} // เช็คว่าเป็นโพสต์ที่ถูกใจไหม
          onToggleFavorite={() => onToggleFavorite(post.id)} // ส่งฟังก์ชันกดถูกใจไปให้
        />
      ))}
    </div>
  );
}

export default PostList;