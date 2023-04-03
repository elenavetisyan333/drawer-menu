import React, { useState } from 'react'

function DrawerMenu({ icon , name, section, hasSections }) {
  const [open, setOpen] = useState(false);

  function openTheSection(){
    setOpen(!open)
  }

  return (
    <div className="section" key={Math.random()}>

      <div className="title" onClick={hasSections ? openTheSection : ""} >
        {
          hasSections && (
            <i className={open ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-right"}></i>
          )
        }
        <i className={open ? "fa-regular fa-folder-open" : icon}></i>
        <p>{name}</p>
      </div>

      {
        hasSections && open && (
          section.sections.map(newSection =>{
            return <DrawerMenu 
                      key={Math.random()}
                      icon={newSection.icon}
                      name={newSection.name} 
                      section={newSection}
                      hasSections={newSection.sections == undefined ? false : true}>
                    </DrawerMenu>
          })
        )
      }

    </div>
    // <h1>{`${name} / ${hasSections}`}</h1>

  )
}

export default DrawerMenu