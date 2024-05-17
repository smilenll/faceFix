import { Container } from "./components/container";

export default function Home() {
  return (
    <main className="w-3/6 mb-20">
      <div className="overflow-auto">
        <div className="flex text-white bg-gray-700 ">
          <nav >
          <p className="pl-4 h-12 flex items-center text-xl">Face Skin Product Recommender</p>
        </nav>
        </div>
        <Container />
      </div>
    </main>
  );
}
