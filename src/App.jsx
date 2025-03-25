import ColorBox from "./components/session01/ColorBox";
import LoggerCounter from "./components/session02/LoggerCounter";
import Watch from "./components/session03/Watch";

function App() {
  return (
    <>
      {/* Import và sử dụng component Bài 1 */}
      <ColorBox />

      {/* Import và sử dụng component Bài 2 */}
      <LoggerCounter />

      {/* Import và sử dụng component Bài 3 */}
      <Watch />
    </>
  );
}
