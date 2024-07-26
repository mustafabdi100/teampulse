import React, { useState } from 'react';
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const [companyName, setCompanyName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedLinks, setGeneratedLinks] = useState({ team: '', clients: '' });

  const handleCompanyNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyName(e.target.value);
  };

  const getNetlifyUrl = (type: string) => {
    const baseUrl = 'https://teampulsee.netlify.app';
    const encodedCompanyName = encodeURIComponent(companyName.trim() || 'default');
    return `${baseUrl}/${type}?company=${encodedCompanyName}`;
  };

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const generateLinks = () => {
    setIsLoading(true);
    // Simulating an API call or some processing time
    setTimeout(() => {
      const teamLink = getNetlifyUrl('team');
      const clientsLink = getNetlifyUrl('clients');
      setGeneratedLinks({ team: teamLink, clients: clientsLink });
      setIsLoading(false);
    }, 1500); // 1.5 seconds delay to simulate processing
  };

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
            {generatedLinks.team && (
              <div className="text-left mb-4">
                <p className="mb-1 text-sm font-medium">Link to collect feedback from your team:</p>
                <p 
                  className="text-sm text-blue-600 cursor-pointer hover:underline"
                  onClick={() => openInNewTab(generatedLinks.team)}
                >
                  {generatedLinks.team}
                </p>
              </div>
            )}
            {generatedLinks.clients && (
              <div className="text-left mb-6">
                <p className="mb-1 text-sm font-medium">Link to collect feedback from your clients:</p>
                <p 
                  className="text-sm text-blue-600 cursor-pointer hover:underline"
                  onClick={() => openInNewTab(generatedLinks.clients)}
                >
                  {generatedLinks.clients}
                </p>
              </div>
            )}
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
