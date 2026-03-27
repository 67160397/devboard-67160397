import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import Navbar from "./components/Navbar";

// นำเข้าหน้าต่าง ๆ จากโฟลเดอร์ pages ที่คุณสร้างใน Activity 3
import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";
import ProfilePage from "./pages/ProfilePage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    /* 1. FavoritesProvider: ครอบเพื่อให้ทุกหน้าใช้ข้อมูล 'ถูกใจ' ร่วมกันได้ */
    <FavoritesProvider>
      {/* 2. BrowserRouter: เปิดใช้งานระบบ URL นำทาง */}
      <BrowserRouter>
        <Navbar />
        
        {/* 3. Routes: ส่วนที่กำหนดว่า URL ไหน จะแสดงหน้า Page ใด */}
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/posts/:id" element={<PostDetailPage />} /> 
          <Route path="/profile" element={<ProfilePage />} /> 
          <Route path="/favorites" element={<FavoritesPage />} /> 
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;