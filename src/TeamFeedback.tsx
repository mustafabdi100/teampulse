import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Textarea } from "./components/ui/textarea";
import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";
import { useToast } from "./components/ui/use-toast";
import { Toaster } from "./components/ui/toaster";

const TeamFeedback: React.FC = () => {
  const [searchParams] = useSearchParams();
  const companyName = searchParams.get('company') || 'Default Company';
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Test portal",
      description: "You cannot submit feedback in a test portal",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-white font-sans p-8">
      <Card className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <CardContent className="p-6">
          <Alert variant="destructive" className="mb-6">
            <AlertTitle>This is a test portal!</AlertTitle>
            <AlertDescription>
              This portal will be removed in 24 hours. If you want to create a portal that lasts forever, sign in here for free: <a href="#" className="underline">here</a>
            </AlertDescription>
          </Alert>
          
          <h1 className="text-3xl font-bold mb-6 text-center">{companyName}</h1>
          
          <p className="text-gray-600 mb-4">
            Welcome to our feedback platform! We value your honest opinions and want to create a safe space for you to share them.
          </p>
          
          <p className="text-gray-600 mb-4">
            Your feedback is crucial in our efforts to improve and foster a positive work environment. Your anonymity is our priority, and your feedback will be kept confidential. Thank you for taking the time to share your valuable insights with us.
          </p>
          
          <p className="text-gray-600 mb-6">
            Let's work together to make positive changes for our company and our team.
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="feedback">
                Your Feedback:
              </label>
              <Textarea id="feedback" placeholder="Your feedback" className="w-full" />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Your Email:
              </label>
              <Input id="email" type="email" placeholder="Your email" className="w-full" />
            </div>
            
            <p className="text-sm text-gray-500 mb-6">
              {companyName} will be able to respond to the feedback to you via opinionFeeds and we will send you an email with their response, but {companyName} will never know your email or identity and will not be able to associate it with your feedback.
            </p>
            
            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
              Submit Feedback
            </Button>
          </form>
        </CardContent>
      </Card>
      <Toaster />
    </div>
  );
};

export default TeamFeedback;