📘 BÀI TẬP BỔ SUNG: REACT HOOKS & API

Họ và tên: Huỳnh Đoàn Nhân
MSSV: 23676991
Môn học: Phát triển giao diện ứng dụng
Project: addexercises

🧠 Giải thích các Hook đã sử dụng (theo đúng bài đã làm)
1️⃣ useState

Trong component UseStateExample.jsx, em sử dụng useState để tạo biến count.

Khi nhấn nút Tăng, hàm setCount được gọi.

Giá trị count thay đổi và giao diện hiển thị lại giá trị mới.

→ useState dùng để lưu trữ dữ liệu và cập nhật giao diện khi dữ liệu thay đổi.

2️⃣ useEffect

Trong component UseEffectExample.jsx, em sử dụng useEffect để:

In thông báo ra console khi component render lần đầu.

In ra console mỗi khi giá trị count thay đổi.

→ useEffect dùng để theo dõi vòng đời component và xử lý các hành động phụ như log console hoặc gọi API.

3️⃣ useReducer

Trong component UseReducerExample.jsx, em sử dụng useReducer để quản lý count thông qua các action:

INCREMENT (Tăng)

DECREMENT (Giảm)

RESET (Đặt lại)

Khi bấm nút, dispatch gửi action vào reducer để cập nhật state.

→ useReducer giúp quản lý state theo từng hành động một cách rõ ràng hơn so với useState.

4️⃣ useRef

Trong component UseRefExample.jsx, em sử dụng useRef để:

Focus vào ô input khi nhấn nút Focus input.

Đếm số lần component render và hiển thị trong console.

→ useRef dùng để truy cập trực tiếp vào DOM và lưu giá trị mà không làm component render lại.

5️⃣ useMemo

Trong component UseMemoExample.jsx, em tạo một hàm tính toán nặng expensiveCalculation.

Khi nhập text vào input → không chạy lại phép tính.

Khi nhấn nút tăng count → phép tính mới được thực hiện và console hiển thị:

"Đang tính toán lại..."

→ useMemo giúp ghi nhớ kết quả tính toán và chỉ tính lại khi count thay đổi.

6️⃣ useCallback

Trong component UseCallbackExample.jsx, em sử dụng useCallback để ghi nhớ hàm truyền từ component cha sang component con.

Khi thay đổi state ở component cha, nếu không dùng useCallback thì component con sẽ render lại.

Khi dùng useCallback, component con chỉ render khi thật sự cần thiết.

→ useCallback giúp hạn chế việc render lại component con không cần thiết.

7️⃣ memo

Trong component MemoExample.jsx, em sử dụng React.memo cho component con.

Khi nhập text ở component cha → component con không render lại.

Chỉ khi props thay đổi thì component con mới render.

→ memo giúp tối ưu hiệu suất bằng cách ghi nhớ component con.

🌐 Phần API CRUD (theo đúng bài đã làm)

Em thực hiện 3 component CRUD với API online.

🔹 FetchCRUD

Trong FetchCRUD.jsx, em sử dụng fetch().then() để:

GET: lấy danh sách bài viết từ API

POST: thêm bài viết mới

DELETE: xóa bài viết theo id

Dữ liệu được hiển thị bằng danh sách <li> trên giao diện.

🔹 AsyncAwaitCRUD

Trong AsyncAwaitCRUD.jsx, em thực hiện tương tự FetchCRUD nhưng:

Sử dụng async/await thay cho .then()

Có thêm biến loading để hiển thị chữ Loading... khi đang gọi API

→ Code dễ đọc và dễ quản lý lỗi hơn.

🔹 AxiosCRUD

Trong AxiosCRUD.jsx, em sử dụng thư viện Axios để:

GET dữ liệu bằng axios.get

POST dữ liệu bằng axios.post

DELETE dữ liệu bằng axios.delete

→ Axios giúp cú pháp ngắn gọn và xử lý lỗi thuận tiện bằng try/catch.

📸 Minh chứng

Ảnh minh chứng được lưu trong thư mục:

/MINHCHUNG


Bao gồm hình ảnh của:

useState

useEffect

useReducer

useRef

useMemo

useCallback

memo

Fetch CRUD

Async/Await CRUD

Axios CRUD