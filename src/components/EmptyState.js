import styled from 'styled-components';

const EmptyStateContainer = styled.div`
  padding: 10px;
  margin-top: calc(50vh - 220px);
  color: #0d6efd;
`;

const EmptyStateText = styled.div`
  font-size: 20px;
  margin-top: 10px;
`;

const EmptyState = () => (
  <EmptyStateContainer className="text-center">
    <img
      width={150}
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1vzgBGWurwN5qXFRoWi92oND80HPCMroJOt1Esvb2J5ReTRpjTKVuKzb4yUv2CkBw5G4&usqp=CAU"
      alt=""
    />

    <EmptyStateText>No Movie, Search Your Movie Title</EmptyStateText>
  </EmptyStateContainer>
);

export default EmptyState;
