import React, { useMemo, useState } from "react";
import { Container, Menu, Search, Grid } from "semantic-ui-react";

/******************************************************************************************************
This would be in models.ts
******************************************************************************************************/
interface FakeListItem {
  id: number;
  name: string;
}

/******************************************************************************************************
Properties
******************************************************************************************************/
export type SearchListProps = {
  list: FakeListItem[];
};

/******************************************************************************************************
Component
******************************************************************************************************/

export const SearchList = ({ list }: SearchListProps) => {
  const { results, handleSearchChange } = useSearch(list);
  const [activeItemId, setActiveItemId] = useState(-1);

  const listItems = results.map(item => {
    const onClick = () => {
      setActiveItemId(item.id);
    };

    return (
      <Menu.Item
        active={activeItemId === item.id}
        onClick={onClick}
        key={item.id}
      >
        {item.name}
      </Menu.Item>
    );
  });

  return (
    <CenterContent>
      <Container textAlign="center">
        <Search onSearchChange={handleSearchChange} showNoResults={false} />
      </Container>

      <Menu fluid pointing secondary vertical>
        {listItems}
      </Menu>
    </CenterContent>
  );
};

/******************************************************************************************************
Custom hook
******************************************************************************************************/

const useSearch = (list: FakeListItem[]) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredList = useMemo(() => filterList(list, searchTerm), [
    searchTerm
  ]);

  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  return {
    results: filteredList,
    handleSearchChange
  };
};

/******************************************************************************************************
Regular JS function
******************************************************************************************************/

const filterList = (list: FakeListItem[], searchTerm: string) => list.filter(
    t =>
      !searchTerm || t.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
  );

/******************************************************************************************************
Separated boilerplate HTML
******************************************************************************************************/
const CenterContent: React.StatelessComponent = ({ children }) => (
  <Grid>
    <Grid.Row columns={3}>
      <Grid.Column width={6} />
      <Grid.Column width={4}>{children}</Grid.Column>
      <Grid.Column width={6} />
    </Grid.Row>
  </Grid>
);
