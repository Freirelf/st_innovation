import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const query = (await searchParams).query || "";

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
    </>
  );
}
