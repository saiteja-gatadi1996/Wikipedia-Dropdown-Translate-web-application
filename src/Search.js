import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Search () {
  const [term, setTerm] = useState('React');
  const[debouncedTerm, setDebouncedTerm]=useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
      const timerId= setTimeout(()=>{
        setDebouncedTerm(term);
      },1000);

      return ()=>{
          clearTimeout(timerId);
      }

}, [term]);

useEffect(()=>{

    const search = async () => {
        const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
          params: {
            action: 'query',
            list: 'search',
            origin: '*',
            format: 'json',
            srsearch: debouncedTerm,
          },
        });
  
        setResults(data.query.search);
      };

search();

},[debouncedTerm])


 

  const renderedResults = results.map((result) => {
    return (
        //pageid results from console
      <div key={result.pageid} className="item">
          {/* gives a button at each p tag */}
          <div className="right floated content">
              <a className="ui button"
              href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">Go</a>
          </div>

        <div className="content">
          <div className="header">{result.title}</div>
          {/* removes all the span */}
          <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
         
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;


//we have taken two useState so that while we do the same search (there will not be another extra request in the console.log)