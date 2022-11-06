import Determinant from './components/Determinant';
import Inverse from './components/Inverse';
import Kernel from './components/Kernel';
import Linalg from './components/Linalg';
import Pivot from './components/Pivot';
import Rank from './components/Rank';
import RREF0 from './components/RREF0';
import Transpose from './components/Transpose';

function App() {
  return (
    <div className="App">
      <h3>Online Matrix calculator</h3>
      <h4>Type matrices with ',' to separate numbers, ';' to separate rows, and '-' to separate matrices if the calculation requires 2 or more.</h4>
      <h4>e.g., 1,2,3;4,5,6-1,1,2;,4,2,1 gives two matrices [[1,2,3],[4,5,6]] and [[1,1,2],[4,2,1]]</h4>
      <Pivot/>
      <Inverse/>
      <Transpose/>
      <Determinant/>
      <Linalg/>
      <RREF0/>
      <Rank/>
      <Kernel/>
    </div>
  )
}

export default App;