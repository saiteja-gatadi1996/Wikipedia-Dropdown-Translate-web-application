import React from 'react'

function Link({className, href, children}) {
    const onClick=(event)=>{
            //hold ctrl+click on header, it will open a new tab
            if(event.metaKey || event.ctrlKey){
                    return;
            }
            event.preventDefault();

            //by adding below now the onclick changes the URL
            window.history.pushState({},'',href);

            //now the onclick routes to url
            const navEvent=new PopStateEvent('popstate');
            window.dispatchEvent(navEvent);
    }
    return (
       
            <a onClick={onClick} className={className} href={href} >{children}</a>
       
    )
}

export default Link
