

import React from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

interface CandidateCardProps {
  candidate: Candidate;
  onSave?: (candidate: Candidate) => void | undefined
  onReject?: () => void
  onRejectLocal?: (username: string) => void
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, onSave, onReject, onRejectLocal }) => {
  return (
    <div>
      <h1>{candidate.name }</h1>
      <p>{candidate.location || "Location not available"}</p>
      <img src={candidate.avatar_url} alt={candidate.name} />
      <p>Email: {candidate.email || "Not available"}</p>
      <p>Company: {candidate.company || "Not available"}</p>
      <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">Profile</a>
      <button onClick={() => onSave && onSave(candidate)}>+</button>
      <button onClick={() =>  onReject && onReject() || onRejectLocal && onRejectLocal(candidate.username)}>-</button>
    </div>
  );
};

export default CandidateCard;
``