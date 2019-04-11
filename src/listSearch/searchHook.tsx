import React, { useMemo, useState } from "react";
import { Container, Menu, Search, Grid } from "semantic-ui-react";

/******************************************************************************************************
This would be in another file such as models.ts
******************************************************************************************************/
interface Product {
  id: number;
  name: string;
  price: number;
}

/******************************************************************************************************
Properties expected to be passed to the component
******************************************************************************************************/
export type SearchListProps = {
  list: Product[];
};

/******************************************************************************************************
Component
******************************************************************************************************/

export const SearchList = ({ list }: SearchListProps) => {
  const [activeItemId, setActiveItemId] = useState(-1); // local state. Other components don't have access to this
  const { results, handleSearchChange } = useSearch(list); // "use" in the function name tells us that it could modify local state

  // map is a foreach loop that returns an array; in this case, an array of JSX Menu.Item tags.
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
      <Container>
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

const useSearch = (list: Product[]) => {
  const [searchTerm, setSearchTerm] = useState("");

  // broke this into a function below just for readability & separation of concerns
  const filteredList = useMemo(() => filterList(list, searchTerm), [
    searchTerm
  ]);

  // event handler
  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  // notice that an array & a function are both being returned to be made available to any component that needs this functionality (don't forget to export it!)
  return {
    results: filteredList,
    handleSearchChange
  };
};

/******************************************************************************************************
Regular JS function
******************************************************************************************************/

const filterList = (list: Product[], searchTerm: string) =>
  list.filter(
    t =>
      !searchTerm || t.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
  );

/******************************************************************************************************
Separated boilerplate HTML
******************************************************************************************************/
const CenterContent: React.FunctionComponent = ({ children }) => (
  <Grid>
    <Grid.Row columns={3}>
      <Grid.Column width={6} />
      <Grid.Column width={4} textAlign="center">{children}</Grid.Column>
      <Grid.Column width={6} />
    </Grid.Row>
  </Grid>
);
