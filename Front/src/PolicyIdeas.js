import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PolicyIdeas = () => {
    const [policyIdeas, setPolicyIdeas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPolicyIdeas = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/policy/policy_ideas/');
                setPolicyIdeas(response.data);
            } catch (error) {
                setError('Failed to load data');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPolicyIdeas();
    }, []); // Empty array ensures this runs once when the component pmounts

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h1>Policy Ideas</h1>
            {policyIdeas.length > 0 ? (
                <ul>
                    {policyIdeas.map((idea) => (
                        <li key={idea.id}>
                            <h2>{idea.title}</h2>
                            <p>{idea.content}</p>
                            <p><strong>Created At:</strong> {idea.created_at}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No policy ideas available.</p>
            )}
        </div>
    );
};

export default PolicyIdeas;
