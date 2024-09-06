import { Flex } from '@chakra-ui/react';
import { useKeypadHeight } from './hooks/useKeypadHeight';

function App() {
  const keypadHeight = useKeypadHeight();

  return (
    <>
      <button onClick={() => {}}>open drawer</button>
      <input type='text' />
      <Flex
        mx='auto'
        maxW='var(--max-width)'
        position='fixed'
        bottom={keypadHeight}
        left={0}
        right={0}
        bgColor='red'
        borderTop='var(--border-main)'
        justifyContent='space-between'
        p='8px'
      >
        bottom flex
      </Flex>
    </>
  );
}

export default App;
