import * as S from './styles';
import {useGlobalCountState} from '../../hooks/context/useGlobalCountState';
const Home = () => {
  const [count, setCount] = useGlobalCountState();
  return(
    <S.Container>    
      <S.Counter>contador: {count}</S.Counter>
      <button type='button' onClick={()=>setCount(oldState=>oldState+1)}>incrementar</button>
      <button type='button' onClick={()=>setCount(oldState=>oldState-1)}>decrementar</button>
    </S.Container>
  )
}

export default Home;