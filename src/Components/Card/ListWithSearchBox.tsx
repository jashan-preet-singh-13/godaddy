"use client";
import DefaultMessage from "../DefaultMessage/DefaultMessage";
import SearchInput from "../SearchInput/SearchInput";
import ListCard from "./ListCard";
import { useState } from "react";
import { FixedSizeList as List } from "react-window";

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

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const { name, url } = repos[index];
    return (
      <div style={{...style, width: "60%", justifySelf: "anchor-center"}}>
        <ListCard key={`${index}-${name}`} name={name} url={url} />
      </div>
    );
  };

  return (
    <>
      <SearchInput setData={handleSetRepos} data={data} />
      {!error && repos.length > 0 ? (
        <List
          height={600}
          itemCount={repos.length}
          itemSize={100}
          width={"100%"}
          className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {Row}
        </List>
      ) : (
        <DefaultMessage />
      )}
    </>
  );
};

export default ListWithSearchBox;
