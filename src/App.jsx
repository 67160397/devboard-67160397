import { useState } from "react";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import UserCard from "./components/UserCard";

const INITIAL_POSTS = [
  { id: 1, title: "React คืออะไร?", body: "React เป็น library สำหรับสร้าง UI..." },
  { id: 2, title: "ทำไมต้องใช้ Components?", body: "ช่วยให้เราแบ่ง UI เป็นชิ้นเล็ก ๆ..." },
  { id: 3, title: "JSX คืออะไร?", body: "ช่วยให้เราเขียน HTML ใน JavaScript..." },
  { id: 4, title: "Props ทำงานอย่างไร?", body: "เป็น argument ที่ส่งให้ component..." },
];

const USERS = [
  { id: 1, name: "ธนภัทธ์ พอควร", email: "tanakhuan@dev.com" },
  { id: 2, name: "ภัทธน ควรพอ", email: "phatphor@dev.com" },
  { id: 3, name: "ควรพอ พอเลย", email: "khuanphor@dev.com" },
];

function App() {
  const [posts, setPosts] = useState(INITIAL_POSTS); //
  const [favorites, setFavorites] = useState([]); // เก็บ id ที่ถูกใจ

  // ฟังก์ชัน Toggle ถูกใจ/ยกเลิก (หัวใจสำคัญที่ทำให้กดได้จริง)
  function handleToggleFavorite(postId) {
    setFavorites((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId) // ถ้ามีอยู่แล้วให้ลบออก
        : [...prev, postId] // ถ้ายังไม่มีให้เพิ่มเข้า
    );
  }

  return (
    <div>
      {/* 1. ส่ง favorites.length ไปให้ Navbar */}
      <Navbar favoriteCount={favorites.length} />

      <div
        style={{
          maxWidth: "900px",
          margin: "2rem auto",
          padding: "0 1rem",
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "2rem",
        }}
      >
        <div>
          {/* 2. ส่ง favorites และ handleToggleFavorite ไปให้ PostList */}
          <PostList
            posts={posts}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        </div>

        <div>
          <h2 style={{ color: "#2d3748", borderBottom: "2px solid #1e40af", paddingBottom: "0.5rem" }}>
            สมาชิก
          </h2>
          {USERS.map((user) => (
            <UserCard key={user.id} name={user.name} email={user.email} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;