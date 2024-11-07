import React from 'react';
import { Candidate } from '../interfaces/Candidate.interface';
import CandidateCard from '../components/candidatecard';

interface savedCandidatesProps {
  candidates?: Candidate[];
  onRemove?: (candidate: Candidate) => void | undefined
}

const savedCandidates: React.FC<savedCandidatesProps> = ({ candidates, onRemove }) => {
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
            onSave= {onRemove}
          />
        ))
      )}
    </div>
  );
};

export default savedCandidates;
