import Circle from "./components/Circle/Circle";
import ScrollAction from "./components/ScrollAction/ScrollAction";
import Heading from "./components/Heading/Heading";
export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-screen relative">
      <Heading />
      <ScrollAction />
    </div>
  );
}
