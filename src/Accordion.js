import React, { useState } from 'react'

function Accordion({items}) {
   
    const[activeIndex, setActiveIndex]=useState(null);
    
    const onTitleClick=(index)=>{
        setActiveIndex(index)
    }
    const renderedItems= items.map((item,index)=>{
        const active= index===activeIndex?'active':'';

    return (
    <div key={item.title}>
        {/* bold title */}
        <div className={`title ${active}`} onClick={()=>onTitleClick(index)}>
          <p className="dropdown icon"></p>
          {item.title}
        </div>

        {/* content will be shown */}
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>

            
    </div>
    
    )
    })
    return <div className="ui styled accordion">{renderedItems}
    <h1>{activeIndex}</h1></div>;

}

export default Accordion
