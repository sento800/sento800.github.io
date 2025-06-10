import Headers from "@/components/Header";
import Introduction from "@/components/Introduction";
import SkillList from "@/components/SkillList";
import Social from "@/components/Social";

function App() {
  return (
    <main className=" px-8">
      <section className="my-16 relative block">
        <Introduction />
      </section>
      <section className="mt-32 mb-16">
        <h1 className="text-6xl text-center py-5 ">
          My <span className="font-bold">Skills</span>
        </h1>
        <SkillList />
      </section>
    </main>
  );
}

export default App;
