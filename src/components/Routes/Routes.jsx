import React from 'react'
import styles from './Routes.module.css';
import { Box, InfiniteScroll, Text, Avatar, Icons, Heading , Main} from 'grommet';

export default function MyRoutes() {
  return (
    <>
      <Main pad="large">
        <Heading>Rutas</Heading>
        <InfiniteScroll allRoutes={[1, 2, 3, 4, 5, 6, 7]}>
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