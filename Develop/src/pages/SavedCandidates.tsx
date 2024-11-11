import React, {useState, useEffect} from 'react';
import { Candidate } from '../interfaces/Candidate.interface';
import CandidateCard from '../components/candidatecard';


const savedCandidates: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([])
  
  useEffect(() => {
    const saved = localStorage.getItem('savedCandidates') || '[]';
    if (saved) {
      setCandidates(JSON.parse(saved));
    }
  }, []);
  const onRemove = (username:string) =>{
    const updatedCandidates = candidates.filter((candidate) => candidate.username !==username );
    setCandidates(updatedCandidates);

     localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates))
  }
  return (
    <div>
      <h1>Potential Candidates</h1>
      {candidates?.length === 0 ? (
        <p>No candidates saved yet.</p>
      ) : (
        candidates?.map((candidate) => (
          <CandidateCard 
            key={candidate.username} 
            candidate={candidate} 
            onRejectLocal= {onRemove}
          />
        ))
      )}
    </div>
  );
};

export default savedCandidates;
