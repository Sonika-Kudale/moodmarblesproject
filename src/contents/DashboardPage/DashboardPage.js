import React from 'react';

const DashboardPage = () => {
    return (
        <div className="bx--grid bx--grid--full-width landing-page">
            <div className="bx--row landing-page__banner"></div>
            <div className="bx--row landing-page__r2">
                <div className="bx--col bx--no-gutter">
                    <div className="bx--col bx--no-gutter landing-page__center">
                        <img className="landing-page__illo" src={`${process.env.PUBLIC_URL}/utils/images/MoodM.gif`} alt="M" />
                        <img className="landing-page__illo" src={`${process.env.PUBLIC_URL}/utils/images/MoodO.gif`} alt="O" />
                        <img className="landing-page__illo" src={`${process.env.PUBLIC_URL}/utils/images/MoodO.gif`} alt="O" />
                        <img className="landing-page__illo" src={`${process.env.PUBLIC_URL}/utils/images/MoodD.gif`} alt="D" />
                    </div>
                    <div className="bx--col bx--no-gutter landing-page__center">
                        <img className="landing-page__illo" src={`${process.env.PUBLIC_URL}/utils/images/MarblesM.jpg`} alt="M" />
                        <img className="landing-page__illo" src={`${process.env.PUBLIC_URL}/utils/images/MarblesA.jpg`} alt="A" />
                        <img className="landing-page__illo" src={`${process.env.PUBLIC_URL}/utils/images/MarblesR.jpg`} alt="R" />
                        <img className="landing-page__illo" src={`${process.env.PUBLIC_URL}/utils/images/MarblesB.jpg`} alt="B" />
                        <img className="landing-page__illo" src={`${process.env.PUBLIC_URL}/utils/images/MarblesL.jpg`} alt="L" />
                        <img className="landing-page__illo" src={`${process.env.PUBLIC_URL}/utils/images/MarblesE.jpg`} alt="E" />
                    </div>
                </div>
            </div>
        </div>
      );
};

export default DashboardPage;