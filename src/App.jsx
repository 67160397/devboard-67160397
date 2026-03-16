import { useState } from "react";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import UserList from "./components/UserList";
import AddPostForm from "./components/AddPostForm";

const INITIAL_POSTS = [
  { id: 1, title: "React คืออะไร?", body: "React เป็น library สำหรับสร้าง UI ที่ทำให้ code อ่านง่ายและดูแลรักษาได้" },
  { id: 2, title: "ทำไมต้องใช้ Components?", body: "Components ช่วยให้เราแบ่ง UI ออกเป็นชิ้นเล็ก ๆ ที่ reuse ได้" },
  { id: 3, title: "JSX คืออะไร?", body: "JSX คือ syntax ที่ช่วยให้เราเขียน HTML ใน JavaScript ได้อย่างสะดวก" },
  { id: 4, title: "Props ทำงานอย่างไร?", body: "Props คือ argument ที่ส่งให้ component เหมือนกับการส่งพารามิเตอร์ให้ฟังก์ชัน" },
];

const USERS = [
  { id: 1, name: "ธนภัทธ์ พอควร", email: "tanakhuan@dev.com" },
  { id: 2, name: "ภัทธน ควรพอ", email: "phatphor@dev.com" },
  { id: 3, name: "ควรพอ พอเลย", email: "khuanphor@dev.com" },
];

function App() {
  const [favorites, setFavorites] = useState([]);

  // ฟังก์ชันจัดการเพิ่มโพสต์ (ในสัปดาห์นี้จะยังไม่เชื่อมกับ API ของ PostList 
  // ให้เขียนเตรียมไว้ก่อนตามคู่มือครับ)
  function handleAddPost({ title, body }) {
    console.log("Add Post:", { title, body });
  }

  // ฟังก์ชัน Toggle ถูกใจ
  function handleToggleFavorite(postId) {
    setFavorites((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  }

  return (
    <div>
      {/* ส่งจำนวน favorites ไปแสดงที่ Navbar */}
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
        {/* คอลัมน์ซ้าย: ฟอร์มเพิ่มโพสต์ และรายการโพสต์จาก API */}
        <div>
          <AddPostForm onAddPost={handleAddPost} />
          
          <PostList
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        </div>

        {/* คอลัมน์ขวา: รายชื่อสมาชิกจาก API */}
        <div>
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default App;