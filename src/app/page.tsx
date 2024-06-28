import Background from "./components/Background";
import Game from "./components/Game";
export default function Home() {
  return (
    <main>
      <div className="bg-black z-[-6]">
        <div className="w-full max-w-6xl mx-auto">
          <Background>
            <Game/>
          </Background>
        </div>
      </div>
    </main>
  );
}
