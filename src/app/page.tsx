import DefaultMessage from "@/Components/DefaultMessage/DefaultMessage";
import { fetchRepos } from "./_utils/Services";
import ListWithSearchBox from "@/Components/Card/ListWithSearchBox";

export interface CardProps {
  name: string;
  url: string;
}

export default async function Home() {
  const [error, data] = await fetchRepos();

  return (
    <main className="flex flex-col items-center justify-between">
      <h1 className="text-3xl font-semibold text-center mt-8">List of Repos</h1>
      <ListWithSearchBox error={error} data={data} />
      {
        error ? <DefaultMessage message="Something went wrong!" /> : null
      }
    </main>
  );
}
