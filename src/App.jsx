import { useState } from 'react'
import './App.css'
import DrawerMenu from './DrawerMenu'
import { sectionsInfo } from './sectionsInfo'


function App() {
  const [show, setShow] = useState(false);

  function openTheMenu(){
    setShow( !show)
  }
  return (
    <div id='content'>
      <button onClick={openTheMenu}><i className="fa-solid fa-bars" /></button>
      {
        show && (
          <div id="menuDiv" style={{display: show ? "block" : "none"}}>
            {
              sectionsInfo.map(section =>{
                return <DrawerMenu 
                          key={Math.random()}
                          icon={section.icon}
                          name={section.name} 
                          section={section}
                          hasSections={section.sections == undefined ? false : true}>
                        </DrawerMenu>
              })
            }
          </div>
        )
      }
    </div>
  )
}

export default App
