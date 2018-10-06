import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  padding: 10px 10px 0 10px;
  background-color: #FFFFFF;
  overflow-y: scroll;

  .line-section:last-child {
    height: 100%;
  }
`;

const LineWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .line-section:first-child {
    .rail-station {
      :before {
        height: 20px;
        width: 20px;
        top: -5px;
        left: -8px;
      }
    }
  }

  .line-section:last-child {
    .rail-station {
      height: 100%;
    }
  }
`;

const LineSection = styled.div`
  display: flex;
  flex-direction: row;

  .info-time {
    display: flex;
    flex-direction: column;

    h6 {
      margin-right: 10px;
      margin-bottom: 10px;
    }

    p {
      margin-right: 10px;
      text-align: right;
    }
  }
`;

const Line = styled.div`
  width: 10px;
  height: 150px;
  background-color: #e31713;
  position: relative;

  :before {
    content: "";
    position: absolute;
    height: 15px;
    width: 15px;
    top: -5px;
    left: -5px;
    border-radius: 50%;
    background: #ffffff;
    border: 3px solid #000000;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-grow: grow;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: row;
`;

const HighlightLine = () => (
  <Wrapper>

    <LineWrapper>
      <LineSection className="line-section">
        <div className="info-time">
          <h6>6:03 AM</h6>
          <p>1 min</p>
        </div>
        <Line className="rail-station" />
      </LineSection>

      <LineSection className="line-section">
        <div className="info-time">
          <h6>6:04 AM</h6>
          <p>3 min</p>
        </div>
        <Line className="rail-station" />
      </LineSection>
      
      <LineSection className="line-section">
        <div className="info-time">
          <h6>6:07 AM</h6>
          <p>2 min</p>
        </div>
        <Line className="rail-station" />
      </LineSection>
      
      <LineSection className="line-section">
        <div className="info-time">
          <h6>6:09 AM</h6>
          <p>3 min</p>
        </div>
        <Line className="rail-station" />
      </LineSection>
    </LineWrapper>

    <InfoWrapper>
      <InfoSection>
        <h2>Hospital de Bellvitge</h2>
      </InfoSection>
      <InfoSection>
        <h2>Bellvitge</h2>
      </InfoSection>
      <InfoSection>
        <h2>L’Hospitalet Av. Carrile</h2>
      </InfoSection>
      <InfoSection>
        <h2>Rambla Just Oliveras</h2>
      </InfoSection>
    </InfoWrapper>


  </Wrapper>
);

export default HighlightLine;
