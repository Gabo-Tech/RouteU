import React from 'react'
import styles from './Profile.module.css';
import { Box, InfiniteScroll, Text, Avatar, Icons, Heading , Main} from 'grommet';
import {User } from 'grommet-icons';

export default function Profile() {
  return (
    <>
      <Main pad="large">
        <Heading>Hola Roberta!</Heading>
        <Box direction="row"  gap="small">
          <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />   
            <User color="accent-1" />
          </Avatar>
        </Box>
        <Text>Tus rutas favoritas</Text>
        <InfiniteScroll favouriteRoutes={[1, 2, 3, 4, 5, 6, 7]}>
          {(item) => (
            <Box
              flex={false}
              pad="medium"
              background={`dark-${(item % 3) + 1}`}
            >
              <Text>{item}</Text>
            </Box>
          )}
        </InfiniteScroll>
      </Main>
    </>
  )
}
