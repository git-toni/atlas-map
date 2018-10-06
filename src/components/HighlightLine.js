import React from "react";
import styled from "styled-components";

import { FiAlertTriangle } from "react-icons/fi";
import { withData } from "./../context";

const Wrapper = styled.div`
  width: 100%;
  height: 225px;
  display: flex;
  padding: 10px 10px 0 10px;
  background-color: #ffffff;

  .point-section:last-child {
    height: 100%;
  }
`;

const PointWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

const ScheduleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .point-section:first-child {
    .rail-station {
      :before {
        height: 20px;
        width: 20px;
        top: -5px;
        left: -8px;
      }
    }
  }

  .point-section:last-child {
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
  min-height: 200px;
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

const InfoSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 20px;
`;

const ConnectionsWrapper = styled.div`
  display: flex;
  margin-top: 5px;

  img {
    height: 20px;
    margin: 0 2px;
  }

  .alert {
    width: 100%;
    text-align: right;
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    49% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`;

const Alert = styled(FiAlertTriangle)`
  stroke: red;
  font-size: 1em;
`;

const AlertConstruction = styled(FiAlertTriangle)`
  stroke: #ffeb00;
  font-size: 1em;
`;

const HighlightLine = ({ data }) =>
  console.log(data) || (
    <Wrapper>
      <ScheduleWrapper>
        <PointWrapper className="point-section">
          <LineSection className="line-section">
            <div className="info-time">
              <h6>6:03 AM</h6>
              <p>1 min</p>
            </div>
            <Line className="rail-station" />
          </LineSection>
          <InfoSection>
            <h2>Hospital de Bellvitge</h2>
          </InfoSection>
        </PointWrapper>

        <PointWrapper className="point-section">
          <LineSection className="line-section">
            <div className="info-time">
              <h6>6:04 AM</h6>
              <p>3 min</p>
            </div>
            <Line className="rail-station" />
          </LineSection>
          <InfoSection>
            <h2>Bellvitge</h2>
            <ConnectionsWrapper>
              <img src="./src/static/R60.svg" />
              <img src="./src/static/R6.svg" />
              <img src="./src/static/R50.svg" />
              <img src="./src/static/R5.svg" />
              <img src="./src/static/R5a.svg" />
              {data.alert ? (
                <div className="alert">
                  <Alert />
                </div>
              ) : null}
            </ConnectionsWrapper>
          </InfoSection>
        </PointWrapper>

        <PointWrapper className="point-section">
          <LineSection className="line-section">
            <div className="info-time">
              <h6>6:07 AM</h6>
              <p>2 min</p>
            </div>
            <Line className="rail-station" />
          </LineSection>
          <InfoSection>
            <h2>L’Hospitalet Av. Carrilet</h2>
            <ConnectionsWrapper>
              <img src="./src/static/R60.svg" />
              <img src="./src/static/R6.svg" />
              <img src="./src/static/R50.svg" />
              <img src="./src/static/R5.svg" />
              <img src="./src/static/R5a.svg" />
              <img src="./src/static/R7.svg" />
              <img src="./src/static/S33.svg" />
              <img src="./src/static/S4.svg" />
              {data.alertConstruction ? (
                <div className="alert">
                  <AlertConstruction />
                </div>
              ) : null}
            </ConnectionsWrapper>
          </InfoSection>
        </PointWrapper>

        <PointWrapper className="point-section">
          <LineSection className="line-section">
            <div className="info-time">
              <h6>6:09 AM</h6>
              <p>3 min</p>
            </div>
            <Line className="rail-station" />
          </LineSection>
          <InfoSection>
            <h2>Rambla Just Oliveras</h2>
          </InfoSection>
        </PointWrapper>
      </ScheduleWrapper>
    </Wrapper>
  );

export default withData(HighlightLine);
