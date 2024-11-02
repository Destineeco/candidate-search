import { useState, useEffect, SetStateAction } from 'react';
import {Candidate} from '../interfaces/Candidate.interface';
import { searchGithubUser } from '../api/API'; 

const CandidateSearch = () => {
  const [username, setUsername] = useState(''); 
  const [candidate, setCandidate] = useState<Candidate | null>();
  const [error, setError] = useState('');

  // Fetch candidate data when the component mounts or when username changes
  useEffect(() => {
    const fetchCandidate = async () => {
      try {
        const data = await searchGithubUser(username);
        setCandidate(data);
        setError(''); // Clear any previous error
      } catch (err) {
        setCandidate(null);
        setError('Candidate not found.'); // Handle error if user is not found
      }
    };

    fetchCandidate();
  }, [username]);

  // Function to handle user input for username
  const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setUsername(event.target.value);
  };

  // Function to handle search
  const handleSearch = () => {
    if (username) {
      setUsername(username);
    }
  };

  return (
    <div>
      <h1>Candidate Search</h1>
      <input
        type="text"
        value={username}
        onChange={handleInputChange}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p>{error}</p>}

      {candidate && (
        <div>
          <h2>{candidate.name || candidate.username}</h2>
          <p>Location: {candidate.location || 'Not available'}</p>
          <img src={candidate.avatar_url} alt={candidate.username} />
          <p>Email: {candidate.email || 'Not available'}</p>
          <p>Company: {candidate.company || 'Not available'}</p>
          <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default CandidateSearch;
