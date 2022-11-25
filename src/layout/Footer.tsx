import styled, { keyframes } from 'styled-components';

const FooterContainer = styled.div`
  margin-top: 10px;
  padding: 5px;
  min-height: 40px;
  background: black;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-weight: 600;
`;

const marquee = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const FooterText = styled.div`
  color: limegreen;
  position: absolute;
  margin: 0;
  text-align: center;
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  -moz-animation: ${marquee} 15s linear infinite;
  -webkit-animation: ${marquee} 15s linear infinite;
  animation: ${marquee} 15s linear infinite;
  width: max-content;

  span {
    margin: 0 5px;
  }
`;

const SpanText = styled.span`
  color: ${(props) => props.color};
`;

export default function Footer() {
  const footerText = [
    { text: 'Powered By', color: '#FFFFFF' },
    { text: 'ReactJS', color: '#80BDE3' },
    { text: 'Redux Toolkit', color: '#BD80E3' },
    { text: 'Redux Toolkit Query', color: '#FFFFFF' },
    { text: 'Bootstrap CSS', color: '#BD80E3' },
    { text: 'OMDB API', color: '#E3BD80' },
    { text: 'Netlify', color: '#BDE380' },
  ];

  return (
    <FooterContainer>
      <FooterText>
        {footerText.map((t, i) => (
          <SpanText key={i} color={t.color}>
            {t.text}
          </SpanText>
        ))}
      </FooterText>
    </FooterContainer>
  );
}
