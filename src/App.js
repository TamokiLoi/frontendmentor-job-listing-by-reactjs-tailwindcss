import React, { useEffect, useState } from 'react';
import data from './assets/data.json';
import JobBoardComponent from './components/JobBoardComponent';

function App() {

  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => setJobs(data), []);

  const filterFunc = ({ role, level, languages, tools }) => {

    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level, ...languages, ...tools];

    return filters.every(filter =>tags.includes(filter));
  }

  const filteredJobs = jobs.filter(filterFunc);

  const handleTagClick = (tag) => {
    // avoid reading the tag
    (!filters.includes(tag)) && setFilters([...filters, tag]);
  }

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter(f => f !== passedFilter));
  }

  const handleClearFilter = () => {
    setFilters([]);
  }

  return (
    <>
      <header className="primary-bg mb-8">
        <img src="/images/bg-header-desktop.svg" alt="bg"
          className="inset-0 w-full h-32 object-cover object-center lg:w-full lg:h-full" />
      </header>

      <div className="container m-auto">
        {filters.length > 0 &&
          <div className="flex flex-wrap bg-white shadow-xl mb-10 mx-6 px-6 pt-6 rounded -my-20 z-10 relative">
            {
              filters.map((filter, index) =>
                <span key={index}
                  onClick={() => handleFilterClick(filter)}
                  className="cursor-pointer mr-4 mb-6"
                >
                  <span className="primary-color light-bg font-bold p-2 rounded-l">{filter}</span>
                  <span className="primary-bg light-color font-bold px-2.5 py-2 rounded-r">&#10006;</span>
                </span>
              )
            }
            <button onClick={handleClearFilter} className="primary-color font-bold mb-6 lg:ml-auto">Clear</button>
          </div>
        }

        {
          filteredJobs.length === 0 ? (
            <p>Jobs are fetching...</p>
          ) : (
              filteredJobs.map(job => <JobBoardComponent
                key={job.id}
                job={job}
                handleTagClick={handleTagClick}
              />)
            )
        }
      </div>
    </>
  );
}

export default App;

// TODOs
// 1. Study the design & JSON
// 2. Create the Job Board Component
// 3. Get the data from the JSON
// 4. Pass down the data to the JBC
// 5. Style it
// 6. Filter component
// 7. Filter the data
