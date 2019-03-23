import React, { useMemo, useState } from "react";
import { Container, Menu, Search } from "semantic-ui-react";
import * as _ from "lodash";

interface FakeListItem {
  id: number;
  name: string;
}

export type SearchListProps = {
  list: FakeListItem[];
};

export const SearchList = ({ list: fakeList }: SearchListProps) => {
  const { results, handleSearchChange } = useSearch(fakeList);
  const [activeItemId, setActiveItemId] = useState(-1);

  const listItems = results.map(item => {
    const onClick = () => {
      setActiveItemId(item.id);
    };

    return (
      <Menu.Item active={activeItemId === item.id} onClick={onClick}>
        {item.name}
      </Menu.Item>
    );
  });

  return (
    <React.Fragment>
      <Container textAlign="center">
        <Search onSearchChange={handleSearchChange} showNoResults={false} />
      </Container>

      <Menu fluid pointing secondary vertical>
        {listItems}
      </Menu>
    </React.Fragment>
  );
};

const useSearch = (list: FakeListItem[]) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredList = useMemo(
    () =>
      list.filter(
        t =>
          !searchTerm ||
          t.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
      ),
    [searchTerm]
  );

  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  return {
    results: filteredList,
    handleSearchChange
  };
};
