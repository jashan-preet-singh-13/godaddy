"use client";
import DefaultMessage from "../DefaultMessage/DefaultMessage";
import SearchInput from "../SearchInput/SearchInput";
import ListCard from "./ListCard";
import { useState } from "react";

export interface Repo {
  name: string;
  url: string;
}

interface ListWithSearchBoxProps {
  error: boolean;
  data: Repo[]; 
}

const ListWithSearchBox: React.FC<ListWithSearchBoxProps> = ({ error, data }) => {
  const [repos, setRepos] = useState<Repo[]>(data);

  const handleSetRepos = (filteredRepos: Repo[]) => {
    setRepos(filteredRepos);
  };

  return (
    <>
    <SearchInput setData={handleSetRepos} data={data} />
      {
        !error && repos.length > 0
          ? (
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {
                repos.map(({ name, url }: Repo, index: number) => (
                  <ListCard 
                    key={`${index}-${name}`} 
                    name={name}
                    url={url}
                  />
                ))
              }
            </div>
          )
          : <DefaultMessage />
      }
    </>
  );
}

export default ListWithSearchBox;
