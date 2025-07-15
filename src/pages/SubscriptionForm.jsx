import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages css/SubscriptionForm.css';


const SubscriptionForm = () => {
  const navigate = useNavigate();

  // State for form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [plan, setPlan] = useState('free'); // 'free' or 'premium'
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [notifyNewCategories, setNotifyNewCategories] = useState(false);
  const [sendWeeklyTips, setSendWeeklyTips] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // For demonstration, auto-fill start/end dates if you want
  React.useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    setStartDate(today);

    // 30 days from now for premium, else blank
    if (plan === 'premium') {
      const thirtyDaysLater = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 10);
      setEndDate(thirtyDaysLater);
    } else {
      setEndDate('');
    }
  }, [plan]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!agreedTerms) {
      alert('You must agree to the Terms of Service and Privacy Policy.');
      return;
    }

    // You can handle your data submission here (e.g., send to backend)

    setSubmitted(true);

    // Redirect to categories after short delay (show confirmation)
    setTimeout(() => {
      navigate('/categories');
    }, 1500);
  };

  return (
   <div className="subscription-wrapper">
  <div className="subscription-container">
      <h2>Subscribe to a Plan</h2>

      {submitted ? (
        <div style={{ padding: 20, backgroundColor: '#e0ffe0', borderRadius: 5 }}>
          <h3>Thank you for subscribing!</h3>
          <p>You will be redirected to the categories page shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 15 }}>
            <label>
              Full Name <br />
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                style={{ width: '100%', padding: 8 }}
              />
            </label>
          </div>

          <div style={{ marginBottom: 15 }}>
            <label>
              Email Address <br />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: '100%', padding: 8 }}
              />
            </label>
          </div>

          <div style={{ marginBottom: 15 }}>
            <label>
              Country <br />
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Enter your country"
                required
                style={{ width: '100%', padding: 8 }}
              />
            </label>
          </div>

          <div style={{ marginBottom: 15 }}>
            <label>
              Plan Selection <br />
              <select
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                style={{ width: '100%', padding: 8 }}
              >
                <option value="free">✅ Free Plan — Access to Education only</option>
                <option value="premium">🚀 Premium Plan — Access to all categories</option>
              </select>
            </label>
          </div>

          <div style={{ marginBottom: 15 }}>
            <label>
              Subscription Duration <br />
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
                style={{ padding: 8, marginRight: 10 }}
              />
              to
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                disabled={plan === 'free'}
                style={{ padding: 8, marginLeft: 10 }}
              />
              {plan === 'free' && <small style={{ marginLeft: 10 }}>(Free plan has no end date)</small>}
            </label>
          </div>

          <div style={{ marginBottom: 15 }}>
            <label>
              <input
                type="checkbox"
                checked={notifyNewCategories}
                onChange={(e) => setNotifyNewCategories(e.target.checked)}
              />{' '}
              Notify me about new quiz categories
            </label>
          </div>

          <div style={{ marginBottom: 15 }}>
            <label>
              <input
                type="checkbox"
                checked={sendWeeklyTips}
                onChange={(e) => setSendWeeklyTips(e.target.checked)}
              />{' '}
              Send me weekly learning tips
            </label>
          </div>

          <div style={{ marginBottom: 15 }}>
            <label>
              <input
                type="checkbox"
                checked={agreedTerms}
                onChange={(e) => setAgreedTerms(e.target.checked)}
                required
              />{' '}
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>

          <button
            type="submit"
            style={{
              padding: '10px 20px',
              fontSize: 16,
              cursor: 'pointer',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: 4,
            }}
          >
            Subscribe Now
          </button>

          <hr style={{ margin: '20px 0' }} />

          <div>
            <h4>Plan Comparison</h4>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #ccc' }}>
                  <th></th>
                  <th>Free Plan</th>
                  <th>Premium Plan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Access to Education</td>
                  <td style={{ textAlign: 'center' }}>✅</td>
                  <td style={{ textAlign: 'center' }}>✅</td>
                </tr>
                <tr>
                  <td>Access to All Categories</td>
                  <td style={{ textAlign: 'center' }}>❌</td>
                  <td style={{ textAlign: 'center' }}>🚀</td>
                </tr>
                <tr>
                  <td>Email Notifications</td>
                  <td style={{ textAlign: 'center' }}>Optional</td>
                  <td style={{ textAlign: 'center' }}>Optional</td>
                </tr>
                <tr>
                  <td>Subscription Duration</td>
                  <td style={{ textAlign: 'center' }}>Unlimited</td>
                  <td style={{ textAlign: 'center' }}>30 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      )}
    </div>
    </div>
  );
};

export default SubscriptionForm;
