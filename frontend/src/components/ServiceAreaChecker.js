import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getDistanceFromSaltLakeCity, getServiceAreaMessage } from '../utils/distanceUtils';
import './ServiceAreaChecker.css';

const ServiceAreaChecker = ({ onServiceAreaDetermined, showAsModal = false }) => {
  const [zipcode, setZipcode] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCheck = async (e) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    // Validate zipcode
    if (!zipcode || zipcode.length < 5) {
      setError('Please enter a valid 5-digit zipcode');
      return;
    }

    setIsChecking(true);

    try {
      // Use zipcode database to get accurate distance
      const distanceInfo = await getDistanceFromSaltLakeCity(zipcode);
      const serviceAreaInfo = getServiceAreaMessage(distanceInfo.distance);
      
      setResult({
        distance: distanceInfo.distance,
        message: serviceAreaInfo,
        isApproximate: false,
        cityInfo: distanceInfo.cityInfo
      });
      
      if (onServiceAreaDetermined) {
        onServiceAreaDetermined(serviceAreaInfo, distanceInfo.distance);
      }
    } catch (error) {
      if (error.message === 'ZIPCODE_NOT_FOUND') {
        // Redirect to out-of-area service form for unknown zipcodes
        navigate('/out-of-area-service');
      } else {
        setError('Unable to determine distance for this zipcode. Please try again or contact us directly.');
      }
    } finally {
      setIsChecking(false);
    }
  };

  const handleReset = () => {
    setZipcode('');
    setResult(null);
    setError(null);
  };

  return (
    <div className={`service-area-checker ${showAsModal ? 'modal' : ''}`}>
      <div className="checker-header">
        <h3>Check Service Area</h3>
        <p>Enter your zipcode to see if you're within our service area</p>
      </div>

      <form onSubmit={handleCheck} className="checker-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="zipcode">Zipcode</label>
            <input
              type="text"
              id="zipcode"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value.replace(/\D/g, '').slice(0, 5))}
              placeholder="84121"
              maxLength="5"
              required
            />
          </div>
        </div>

        <div className="form-actions">
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={isChecking}
          >
            {isChecking ? 'Checking...' : 'Check Service Area'}
          </button>
        </div>
      </form>

      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}

      {result && (
        <div className={`result-message ${result.message.status}`}>
          <div className="result-header">
            <div className="result-icon">
              {result.message.status === 'primary' ? '✅' : '📍'}
            </div>
            <div className="result-info">
              <h4>{result.message.status === 'primary' ? 'Within Service Area' : 'Extended Service Area'}</h4>
              <p>{result.distance} miles from Salt Lake City {result.isApproximate && '(approximate)'}</p>
            </div>
          </div>
          
          <div className="result-message-text">
            <p>{result.message.message}</p>
          </div>

          <div className="result-actions">
            {result.message.status === 'primary' ? (
              <div className="primary-actions">
                <p>Great! You're within our primary service area. You can proceed with our standard contact form.</p>
                <Link to="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
              </div>
            ) : (
              <div className="extended-actions">
                <p>You're outside our primary service area, but we may be able to help with extended service.</p>
                <div className="action-buttons">
                  <Link to="/out-of-area-service" className="btn btn-primary">
                    Extended Service Request
                  </Link>
                  <Link to="/contact" className="btn btn-secondary">
                    Contact Us Directly
                  </Link>
                </div>
              </div>
            )}
          </div>

          <button 
            type="button" 
            className="reset-btn"
            onClick={handleReset}
          >
            Check Another Zipcode
          </button>
        </div>
      )}
    </div>
  );
};

export default ServiceAreaChecker;
