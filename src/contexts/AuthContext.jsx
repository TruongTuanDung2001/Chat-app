import { createContext, useState } from "react";

const AuthContext = createContext(null);

/**
      <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter> giải thích: children chính là <App /> những thằng nào nó bao sẽ nhận được giá trị của value nó truyền, những thằng nào con của app cũng sẽ nhận được lun vì app nằm bên trong authProvider

  - const AuthContext = createContext(null); chưa có dữ liệu, chỉ là tạo ra một context object dùng để truyền dữ liệu Auth, dữ liệu thật sự truyền là value

  - gán createContext(null) là nếu 1 hàm không nằm trong <authContext.provider></authContext.provider> thì kết quả useContext(AuthContext) sẽ là null

  - sử dụng useContext(AuthContext) đề làm gì, thứ nhất là nó phải được bao bởi AuthContext, thì khi sử dụng nó sẽ lấy được giá trị của value, 

  - chỉ cần useContext(AuthContext) mà nó có bao bởi AuthContext.provider thì nó sẽ lấy được value mà thằng trên đã truyền v thôi

  - const { currentUser, isLoggedIn } = useContext(AuthContext); tại sao lại là { ... ... } vì nó là destructuring.

  - useContext(AuthContext) => trả về : 
  {
    currentUser: {...},
    setCurrentUser: function,
    isLoggedIn: true
  } mình gán bằng destructuring rồi sử dụng thôi
    
 */
function AuthProvider({ children }) {
  // Cách dùng useState ở dưới là: Lazy initialization của useState — dùng khi giá trị initial cần được tính/lấy từ đâu đó.
  // Dùng như v để khi render lần đầu thì currentUser đã có giá trị đúng, nếu setCurrentUser sẽ phải render lại nhiều lần
  const [currentUser, setCurrentUser] = useState(() => {
    const user = localStorage.getItem("currentUser");

    if (user) {
      return JSON.parse(user);
    }

    return null;
  });

  const isLoggedIn = currentUser !== null; // so sánh: nếu current khác null là true, còn nếu === null thì là false.

  //
  // Giải thích 3 tham số trong value (value là 1 object có 3 thuộc tính)
  /*
    - currentUser: cho biết thông tin ai đăng nhập (object {}), để các component khác sử dụng chỉ cần currentUser.name là ok
    - isLoggedIn là trạng thái đăng nhập, true thì cho vào không thì kh, true thì hiện button logout không thì không hiện
    - setCurrentUser là hàm dùng để thay đổi currentUser. vd: nếu là logout thì localStorage remove cái currentUser và setCurrentUser lại là null, hiện tại làm như v, sau này đẹp hơn sẽ dùng cách khác gọn hơn

  */
  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
