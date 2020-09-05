import React from 'react';
import Link from 'gatsby-link';

const DailyHeader = () => {
  const callout = [
    {
      number: 365,
      title: 'Days',
      description: 'An entire year of sketches',
    },
    {
      number: 1,
      title: 'SKETCH A DAY',
      description: 'On saturdays, on mondays, even on holidays!',
    },
    {
      number: 30,
      title: 'MINUTES EACH',
      description: 'This is the time it usually takes from start to finish',
    },
  ];
  return (
    <div className="daily-header">
      <div className="daily-header-description">
        For a period of a year I will make <strong>one sketch a day</strong>,
        each sketch takes around 30 minutes. <br />
        The works in this page are quick sketches, if you want to see my work
        projects head over to <Link to="/projects">projects</Link> <br />
      </div>

      <div className="daily-header-callout">
        <div className="daily-header-callout-title">THESE ARE THE RULES*</div>
        <div className="daily-header-callout-subtitle">Let's get started</div>

        {callout.map((item, i) => (
          <div
            className="daily-header-callout-item"
            key={`daily-header-item-${i}`}
          >
            <div className="daily-header-callout-item-number">
              {item.number}
            </div>

            <div className="daily-header-callout-item-title">{item.title}</div>

            <div className="daily-header-callout-item-description">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyHeader;
