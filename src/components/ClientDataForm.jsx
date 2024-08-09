import React, { useState } from 'react';
import './ClientDataForm.css'; 

const ClientDataForm = () => {
  const [clientId, setClientId] = useState('');
  const [referrer, setReferrer] = useState('');
  const [utmSource, setUtmSource] = useState('');
  const [utmMedium, setUtmMedium] = useState('');
  const [utmCampaign, setUtmCampaign] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      clientId,
      referrer,
      utmSource,
      utmMedium,
      utmCampaign,
    };

    try {
      const response = await fetch('https://www.tracktraffics.com/api/save-client-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        alert('Client data saved successfully!');
        setClientId('');
        setReferrer('');
        setUtmSource('');
        setUtmMedium('');
        setUtmCampaign('');
      } else {
        alert('Failed to save client data.');
      }
    } catch (error) {
      console.error('Error saving client data:', error);
    }
  };

  return (
    <form className="client-data-form" onSubmit={handleSubmit}>
      <h1>Save Client Data</h1>
      <label>
        Client ID:
        <input
          type="text"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Referrer:
        <input
          type="text"
          value={referrer}
          onChange={(e) => setReferrer(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        UTM Source:
        <input
          type="text"
          value={utmSource}
          onChange={(e) => setUtmSource(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        UTM Medium:
        <input
          type="text"
          value={utmMedium}
          onChange={(e) => setUtmMedium(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        UTM Campaign:
        <input
          type="text"
          value={utmCampaign}
          onChange={(e) => setUtmCampaign(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Save Data</button>
    </form>
  );
};

export default ClientDataForm;
