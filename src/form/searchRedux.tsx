import React, { useMemo, useState } from "react";
import { Container, Menu, Search, Grid } from "semantic-ui-react";

/******************************************************************************************************
This would be in another file such as models.ts
******************************************************************************************************/
export interface SampleListItem {
  id: number;
  name: string;
}

/******************************************************************************************************
Properties expected to be passed to the component
******************************************************************************************************/
export type SearchListProps = {
  list: SampleListItem[];
  activeItemId: number;
  searchTerm: string;
  onActiveChanged: (id: number) => void;
  onSearchChanged: (searchTerm: string) => void;
};

/******************************************************************************************************
Component
******************************************************************************************************/

export const SearchList = ({
  list,
  activeItemId,
  onActiveChanged,
  onSearchChanged
}: SearchListProps) => {
  const handleSearchChanged = (e: any) => onSearchChanged(e.target.value);

  // map is a foreach loop that returns an array; in this case, an array of JSX Menu.Item tags.
  const listItems = list.map(item => {
    const handleClick = () => onActiveChanged(item.id);

    return (
      <Menu.Item
        active={activeItemId === item.id}
        onClick={handleClick}
        key={item.id}
      >
        {item.name}
      </Menu.Item>
    );
  });

  return (
    <CenterContent>
      <Container textAlign="center">
        <Search onSearchChange={handleSearchChanged} showNoResults={false} />
      </Container>

      <Menu fluid pointing secondary vertical>
        {listItems}
      </Menu>
    </CenterContent>
  );
};

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
