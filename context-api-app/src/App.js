import logo from './logo.svg';
import './App.css';
import UserInfoContext from "./context/UserInfoContext";
import BlogPage from "./components/BlogPage";
import ThemeProvider from "./context/ThemeProvider";
import ContentComponent from "./components/ContentComponent";

export default function App() {
  const userInfo = { username:"Admin", isAdmin: true };

  return (
    <div>
      <div>
      <ThemeProvider>
        <ContentComponent>
        </ContentComponent>
      </ThemeProvider>
      </div>
      <div>
        <UserInfoContext.Provider value={userInfo}>
          <BlogPage></BlogPage>
        </UserInfoContext.Provider> 
      </div>
    </div>
  );
}
