import { auth } from "@/auth";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const query = (await searchParams).query || "";

  const posts = [{
    _createAt: new Date(),
    views: 100,
    author: { _id: 1, name: "John Doe" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    image: "http://images.unsplash.com/photo-1593376853899-fbb47a057fa0?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images.unsplash.com/photo-1677631231234-1234567890",
    category: "Robótica",
    title: "Startup de Robótica",
    _id: 1,
  }]

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Monte Sua Startup, <br /> Conecte-se com Empreendedores
        </h1>

        <p className="sub-heading !max-w-3xl">
          Acelere sua jornada empreendedora com nossa plataforma de conexão e
          aprendizado. Encontre mentores, faça networking e impulsione seu
          negócio. Junte-se a nós e transforme sua ideia em realidade!
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold" >
          {query ? `Resultados para "${query}"` : "Todas as Startups"}
        </p>

        <ul className="mt-7 card_grid">
            {posts?.length > 0 ? (
                posts.map((post: StartupCardType) => (
                    <StartupCard key={post?._id} post={post} />
                ))
            ) : (
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <h2 className="text-2xl font-semibold text-gray-700">Nenhum resultado encontrado</h2>
                    <p className="text-gray-500">Tente outra pesquisa ou crie sua própria startup.</p>
                </div>
            )}
        </ul>
      </section>
    </>
  );
}
