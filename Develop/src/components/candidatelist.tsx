// src/components/CandidateList.tsx
import React from 'react';
import CandidateCard from './candidatecard';
import { Candidate } from '../interfaces/Candidate.interface';

interface CandidateListProps {
  candidates: Candidate[];
  onSave: (candidate: Candidate) => void;
}

const CandidateList: React.FC<CandidateListProps> = ({ candidates, onSave }) => {
  return (
    <div>
      {candidates.map((candidate) => (
        <CandidateCard key={candidate.username} candidate={candidate} onSave={() => onSave(candidate)} />
      ))}
    </div>
  );
};

export default CandidateList;
