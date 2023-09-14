
import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const pageSize = 5;
  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          color='#f11946'
          progress={progress}setProgress
        />
        {/* <News setProgress={setProgress}  pageSize={pageSize} country='us' category="sports" /> */}
        <Routes>
          <Route exact path='/entertainment' element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country='us' category="entertainment" />} />
          <Route exact path='/health' element={<News setProgress={setProgress} key="health" pageSize={pageSize} country='us' category="health" />} />
          <Route exact path='/technology' element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country='us' category="technology" />} />
          <Route exact path='/entertainment' element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country='us' category="entertainment" />} />
          <Route exact path='/health' element={<News setProgress={setProgress} key="health" pageSize={pageSize} country='us' category="health" />} />
          <Route exact path='/science' element={<News setProgress={setProgress} key="science" pageSize={pageSize} country='us' category="science" />} />
          <Route exact path='/sports' element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country='us' category="sports" />} />
          <Route exact path='/technology' element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country='us' category="technology" />} />
        </Routes>

      </Router>
    </div>
  )

}

export default App;
