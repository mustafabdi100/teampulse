import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";

const LandingPage: React.FC = () => {
  const [companyName, setCompanyName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedLinks, setGeneratedLinks] = useState({ team: '', clients: '' });
  const navigate = useNavigate();

  const handleCompanyNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyName(e.target.value);
  };

  const getAppUrl = (type: string) => {
    const encodedCompanyName = encodeURIComponent(companyName.trim() || 'default');
    return `/${type}?company=${encodedCompanyName}`;
  };

  const openFeedbackPage = (url: string) => {
    window.open(url, '_blank');
  };

  const generateLinks = () => {
    setIsLoading(true);
    // Simulating an API call or some processing time
    setTimeout(() => {
      const teamLink = getAppUrl('team');
      const clientsLink = getAppUrl('clients');
      setGeneratedLinks({ team: teamLink, clients: clientsLink });
      setIsLoading(false);
    }, 1500); // 1.5 seconds delay to simulate processing
  };

  const previewTeamLink = getAppUrl('team');
  const previewClientsLink = getAppUrl('clients');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-100 font-sans">
      <header className="py-4 px-6 max-w-6xl mx-auto">
        <nav className="flex justify-between items-center">
          <span className="text-xl font-bold">TeamPulse</span>
          <div className="flex items-center space-x-6">
            <Link to="/pricing" className="text-sm text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link to="/login" className="text-sm text-gray-600 hover:text-gray-900">Login</Link>
            <Link to="/signup">
              <Button className="bg-gray-900 text-white hover:bg-gray-700 text-sm">Sign Up</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Do you know what your Team<br />think about <span className="text-pink-500">your company?</span>
        </h1>
        <p className="text-lg mb-10 text-gray-600">
          TeamPulse offers a platform for gathering anonymous feedback from both<br />your team and your clients.
        </p>
        <Button className="bg-pink-500 text-white hover:bg-pink-600 px-8 py-3 text-lg font-semibold rounded-full mb-6">
          Start For Free
        </Button>
        <p className="text-sm text-gray-500 mb-16">
          Or, you can test how it works with the next form
        </p>

        <Card className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <CardHeader className="bg-gray-50 py-4">
            <CardTitle className="text-xl font-semibold">Create Portals to collect feedback</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-sm text-gray-500 mb-6">
              Generate links to collect feedback from your team and clients.
            </p>
            <Input 
              placeholder="Your company name" 
              className="mb-6" 
              value={companyName}
              onChange={handleCompanyNameChange}
            />
            <div className="text-left mb-4">
              <p className="mb-1 text-sm font-medium">Link to collect feedback from your team:</p>
              <p 
                className={`text-sm ${generatedLinks.team ? 'text-blue-600 cursor-pointer hover:underline' : 'text-black'}`}
                onClick={() => generatedLinks.team && openFeedbackPage(window.location.origin + generatedLinks.team)}
              >
                {window.location.origin + previewTeamLink}
              </p>
            </div>
            <div className="text-left mb-6">
              <p className="mb-1 text-sm font-medium">Link to collect feedback from your clients:</p>
              <p 
                className={`text-sm ${generatedLinks.clients ? 'text-blue-600 cursor-pointer hover:underline' : 'text-black'}`}
                onClick={() => generatedLinks.clients && openFeedbackPage(window.location.origin + generatedLinks.clients)}
              >
                {window.location.origin + previewClientsLink}
              </p>
            </div>
            <Button 
              className="w-full bg-gray-900 text-white hover:bg-gray-700 py-2 text-sm font-semibold"
              onClick={generateLinks}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Generate Links"}
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default LandingPage;
