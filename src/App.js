import './App.css';
import TodoExplorer from "./components/todo/todo-explorer";
import MenuBox from "./components/menu-box";
import LogoBox from "./components/logo-box";
import {useState} from "react";

function App() {

    const [contentToShow, setContentToShow] = useState(1);

  return (
    <div className="App">
        <div className="d-flex">
            <LogoBox/>
            <MenuBox changeAppContent={(content) => changeAppContent(content)}/>
        </div>
        {renderContent()}
    </div>
  );

  function renderContent(){
      return contentToShow === 1 ? <TodoExplorer/>
          : contentToShow === 2 ? <div className="mt-1">This is some Tracking content</div>
              : <div className="mt-1">This is some reporting content</div>
  }

    //Instead of changeAppContent, react router should be used for client routing.
    // changeAppContent method is used here only for demo purpose as it's lighter than react routing

  function changeAppContent(content){
      setContentToShow(content);
  }
}

export default App;
