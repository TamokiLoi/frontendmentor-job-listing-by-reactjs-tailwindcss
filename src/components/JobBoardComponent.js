import React from 'react';

// "id": 1,
// "company": "Photosnap",
// "logo": "images/photosnap.svg",
// "isNew": true,
// "featured": true,
// "position": "Senior Frontend Developer",
// "role": "Frontend",
// "level": "Senior",
// "postedAt": "1d ago",
// "contract": "Full Time",
// "location": "USA Only",
// "languages": ["HTML", "CSS", "JavaScript"],
// "tools": []

const JobBoardComponent = ({
    job: {
        company,
        logo,
        isNew,
        featured,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools
    },
    handleTagClick
}) => {

    const tags = [role, level, ...languages, ...tools];

    return (
        <>
            <div className={`flex flex-col bg-white shadow-xl mx-6 my-14 pt-6 pb-2 px-1 rounded lg:flex-row lg:p-6 lg:my-6
            ${featured && 'border-l-4 primary-border-left-color boder-solid'}`}>
                <div className="ml-4 lg:m-0">
                    <img src={logo} alt={company} className="-mt-14 mb-2 w-14 h-14 lg:m-0 lg:w-auto lg:h-auto" />
                </div>
                <div className="flex flex-col justify-between ml-4">
                    <h3 className="font-bold primary-color">
                        {company}
                        {isNew && (<span className="primary-bg light-color font-bold rounded-full ml-4 m-1 px-2 py-1 uppercase">New!</span>)}
                        {featured && (<span className="dark-bg light-color font-bold rounded-full m-1 px-2 py-1 uppercase">Featured</span>)}
                    </h3>
                    <h2 className="dark-color font-bold text-xl">{position}</h2>
                    <p className="text-gray-500">
                        {postedAt} &middot; {contract} &middot; {location}
                    </p>
                </div>
                <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t-2 border-gray-500 border-solid lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0 lg:mx-0">
                    {
                        tags && tags.map((tag, index) =>
                            <span key={index}
                                onClick={() => handleTagClick(tag)}
                                className="primary-color light-bg font-bold mr-4 mb-4 p-2 rounded cursor-pointer lg:mt-4 lg:mx-2">
                                {tag}
                            </span>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default JobBoardComponent;
