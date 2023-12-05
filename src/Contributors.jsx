import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Contributors = () => {
    const [contributors, setContributors] = useState([]);
    const repoOwner = 'nabinkdl';
    const repoName = 'PromoterLockEnd';
    const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`;

    // const accessToken = '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'; // Replace with your actual access token

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);
                setContributors(response.data);
            } catch (error) {
                console.error('Error fetching contributors:', error);
            }
        };

        fetchData();
    }, [apiUrl]);
    console.log(contributors)
    return (
       <>
        <div className='flex relative   py-2 dark:bg-slate-800 dark:text-blue-100'>
                <div className='  font-semibold text-2xl mt-4 mx-4'>
                    Github Contributors: 
                </div>
                <div className='flex gap-2  top-1 '>
                {contributors.map(contributor => (
                    <a href={contributor.html_url} target='_blank'>
                                            <img src={contributor.avatar_url} alt="" className='h-14 w-14 object-cover rounded-full border-2 border-datessecondary' />

                    </a>
                ))}
                </div>

                </div>
    

        </>
    );
};

export default Contributors;