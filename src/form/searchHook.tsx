import React, { useMemo, useState } from "react";
import { Container, Menu, Search } from "semantic-ui-react";

interface FakeListItem {
  id: number;
  name: string;
}

export type SearchListProps = {
  list: FakeListItem[];
};

export const SearchList = ({ list: fakeList }: SearchListProps) => {
  const { results, handleSearchChange } = useSearch(fakeList);

  return (
    <React.Fragment>
      <Container textAlign="center">
        <Search onSearchChange={handleSearchChange} showNoResults={false} />
      </Container>

      <Menu fluid pointing secondary vertical>
        {results}
      </Menu>
    </React.Fragment>
  );
};

const useSearch = (list: FakeListItem[]) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeItem, setActiveItem] = useState(-1);

  const filterResults = (criteria: string) => {
    return list.map(item => {
      const handleMenuItemClick = () => {
        setActiveItem(item.id);
      };

      return (
        (!criteria ||
          item.name.toLowerCase().indexOf(criteria.toLowerCase()) > -1) && (
          <Menu.Item
            key={item.id}
            active={activeItem === item.id}
            onClick={handleMenuItemClick}
          >
            {item.name}
          </Menu.Item>
        )
      );
    });
  };

  const memoizedFilteredTenants = useMemo(() => filterResults(searchTerm), [
    searchTerm,
    activeItem
  ]);

  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  return {
    results: memoizedFilteredTenants,
    handleSearchChange
  };
};
