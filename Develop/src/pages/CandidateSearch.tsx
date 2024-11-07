import React, { useState, useEffect } from 'react';
import CandidateList from '../components/candidatelist';
import { searchGithubUser } from '../api/API';

interface Candidate {
  name: string;
  username: string;
  avatar: string;
  avatar_url: string;
  location: string;
  email: string;
  company: string;
  html_url: string;
}

const CandidateSearch: React.FC = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null); // Single candidate
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]); // Saved candidates list
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Index to simulate different candidates

  // Fetch the next candidate from GitHub
  useEffect(() => {
    const fetchNextCandidate = async () => {
      const username = `user${currentIndex}`; 
      try {
        const userData = await searchGithubUser(username);
        setCurrentCandidate(userData); // Set the current candidate data
      } catch (error) {
        console.error('Error fetching candidate:', error);
      }
    };

    fetchNextCandidate();
  }, [currentIndex]);

  // Handle saving the current candidate
  const handleSaveCandidate = (candidate: Candidate) => {
    const updatedSavedCandidates = [...savedCandidates, candidate];
    setSavedCandidates(updatedSavedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedSavedCandidates));
    setCurrentIndex((prev) => prev + 1); // Move to the next candidate
  };

  // Handle rejecting the current candidate
  const handleRejectCandidate = () => {
    setCurrentIndex((prev) => prev + 1); // Skip to the next candidate
  };

  // Load saved candidates from localStorage on page load
  useEffect(() => {
    const saved = localStorage.getItem('savedCandidates');
    if (saved) {
      setSavedCandidates(JSON.parse(saved));
    }
  }, []);

  return (
    <div>
      <h1>Candidate Search</h1>
      {currentCandidate ? (
        <CandidateList
          candidate={currentCandidate} 
          onSave={handleSaveCandidate}  // Save handler
          onReject={handleRejectCandidate}  // Reject handler
        />
      ) : (
        <p>Loading candidate...</p>
      )}
    </div>
  );
};

export default CandidateSearch;
