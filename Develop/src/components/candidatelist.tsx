
import CandidateCard from './candidatecard';
import { Candidate } from '../interfaces/Candidate.interface';

interface CandidateListProps {
  candidate: Candidate;       
  onSave: (candidate: Candidate) => void;    // Function to handle save
  onReject: () => void;  // Function to handle reject
}

const CandidateList = ({ candidate, onSave, onReject }: CandidateListProps) => {
  return (
    <div>
        <CandidateCard 
          key={candidate.username} 
          candidate={candidate} 
          onSave={() => onSave(candidate)} 
          onReject={() => onReject()} 
        />
      
    </div>
  );
};

export default CandidateList;

