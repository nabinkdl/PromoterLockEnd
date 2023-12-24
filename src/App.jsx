import React, { useEffect } from 'react';
import Table from './Table';
import ReactGA from 'react-ga';
import Contributors from './Contributors';

const TRACKING_ID = "UA-284093981-2";
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    // Track initial page view
    ReactGA.pageview(window.location.pathname);

    // Track a custom event when the component mounts
    ReactGA.event({
      category: 'Visitor Interaction',
      action: 'Visit Homepage',
    });

    // You can add more custom events based on user interactions
    // For example, tracking a button click
    const handleButtonClick = () => {
      ReactGA.event({
        category: 'User Interaction',
        action: 'Button Click',
        label: 'My Button',
      });
    };

    // Attach the event handler to the button
    const button = document.getElementById('myButton');
    if (button) {
      button.addEventListener('click', handleButtonClick);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      if (button) {
        button.removeEventListener('click', handleButtonClick);
      }
    };
  }, []);

  return (
    <>
      <Table />
      <Contributors />
      <button id="myButton">Click me</button>
    </>
  );
}

export default App;
