'use client';

import { useState } from 'react';

interface Competitor {
  name: string;
  domain: string;
  domainAuthority: number;
  monthlyTraffic: number;
  targetKeywords: string[];
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
}

interface CompetitiveIntelligenceProps {
  competitors: Competitor[];
  ourMetrics: {
    domainAuthority: number;
    monthlyTraffic: number;
    keywordRankings: Array<{ keyword: string; position: number }>;
  };
  className?: string;
}

export default function CompetitiveIntelligence({ 
  competitors, 
  ourMetrics, 
  className = '' 
}: CompetitiveIntelligenceProps) {
  const [selectedCompetitor, setSelectedCompetitor] = useState<string>('');
  const [analysisType, setAnalysisType] = useState<'overview' | 'keywords' | 'content' | 'backlinks'>('overview');

  const selectedComp = competitors.find(c => c.name === selectedCompetitor);

  const getCompetitivePosition = (metric: 'domainAuthority' | 'monthlyTraffic'): 'leading' | 'competitive' | 'behind' => {
    const ourValue = ourMetrics[metric];
    const avgCompetitorValue = competitors.reduce((sum, comp) => sum + comp[metric], 0) / competitors.length;
    
    if (ourValue >= avgCompetitorValue * 1.2) return 'leading';
    if (ourValue >= avgCompetitorValue * 0.8) return 'competitive';
    return 'behind';
  };

  const getKeywordGap = (): string[] => {
    const competitorKeywords = new Set<string>();
    competitors.forEach(comp => {
      comp.targetKeywords.forEach(keyword => competitorKeywords.add(keyword));
    });
    
    const ourKeywords = new Set(ourMetrics.keywordRankings.map(k => k.keyword));
    return Array.from(competitorKeywords).filter(keyword => !ourKeywords.has(keyword));
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Competitive Intelligence
        </h3>
        <p className="text-gray-600">
          Monitor competitors and identify opportunities for market domination
        </p>
      </div>

      {/* Competitive Overview */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">Our Domain Authority</h4>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">
              {ourMetrics.domainAuthority}
            </div>
            <div className="text-sm text-blue-700">
              {getCompetitivePosition('domainAuthority') === 'leading' ? 'Leading' : 
               getCompetitivePosition('domainAuthority') === 'competitive' ? 'Competitive' : 'Behind'}
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold text-green-900 mb-2">Monthly Traffic</h4>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">
              {ourMetrics.monthlyTraffic.toLocaleString()}
            </div>
            <div className="text-sm text-green-700">
              {getCompetitivePosition('monthlyTraffic') === 'leading' ? 'Leading' : 
               getCompetitivePosition('monthlyTraffic') === 'competitive' ? 'Competitive' : 'Behind'}
            </div>
          </div>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-semibold text-purple-900 mb-2">Keyword Rankings</h4>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">
              {ourMetrics.keywordRankings.length}
            </div>
            <div className="text-sm text-purple-700">
              Tracked Keywords
            </div>
          </div>
        </div>
      </div>

      {/* Competitor Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Competitor for Analysis
        </label>
        <select
          value={selectedCompetitor}
          onChange={(e) => setSelectedCompetitor(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Choose a competitor...</option>
          {competitors.map((comp) => (
            <option key={comp.name} value={comp.name}>
              {comp.name} (DA: {comp.domainAuthority})
            </option>
          ))}
        </select>
      </div>

      {/* Analysis Tabs */}
      {selectedCompetitor && (
        <>
          <div className="border-b border-gray-200 mb-6">
            <nav className="flex space-x-8">
              {[
                { id: 'overview', label: 'Overview', icon: '📊' },
                { id: 'keywords', label: 'Keywords', icon: '🔍' },
                { id: 'content', label: 'Content', icon: '📝' },
                { id: 'backlinks', label: 'Backlinks', icon: '🔗' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setAnalysisType(tab.id as 'overview' | 'keywords' | 'content' | 'backlinks')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                    analysisType === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Analysis Content */}
          <div className="min-h-64">
            {analysisType === 'overview' && selectedComp && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Competitor Profile</h4>
                    <div className="space-y-2 text-sm">
                      <div><strong>Domain:</strong> {selectedComp.domain}</div>
                      <div><strong>Domain Authority:</strong> {selectedComp.domainAuthority}</div>
                      <div><strong>Monthly Traffic:</strong> {selectedComp.monthlyTraffic.toLocaleString()}</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Target Keywords</h4>
                    <div className="flex flex-wrap gap-1">
                      {selectedComp.targetKeywords.map((keyword, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-green-900 mb-2">Strengths</h5>
                    <ul className="space-y-1 text-green-700 text-sm">
                      {selectedComp.strengths.map((strength, index) => (
                        <li key={index}>• {strength}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-red-900 mb-2">Weaknesses</h5>
                    <ul className="space-y-1 text-red-700 text-sm">
                      {selectedComp.weaknesses.map((weakness, index) => (
                        <li key={index}>• {weakness}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-900 mb-2">Opportunities</h5>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      {selectedComp.opportunities.map((opportunity, index) => (
                        <li key={index}>• {opportunity}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {analysisType === 'keywords' && (
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-4">Keyword Gap Analysis</h4>
                <p className="text-yellow-800 mb-4">
                  Keywords that competitors are targeting but we&apos;re not:
                </p>
                <div className="flex flex-wrap gap-2">
                  {getKeywordGap().map((keyword, index) => (
                    <span key={index} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {analysisType === 'content' && (
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-4">Content Strategy Insights</h4>
                <div className="space-y-3 text-blue-800">
                  <div>• Analyze competitor content gaps</div>
                  <div>• Identify trending topics in dental implants</div>
                  <div>• Monitor content performance metrics</div>
                  <div>• Track content update frequency</div>
                </div>
              </div>
            )}

            {analysisType === 'backlinks' && (
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-4">Backlink Analysis</h4>
                <div className="space-y-3 text-purple-800">
                  <div>• Monitor competitor backlink profiles</div>
                  <div>• Identify link building opportunities</div>
                  <div>• Track referring domain quality</div>
                  <div>• Analyze anchor text distribution</div>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* Action Items */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-4">Recommended Actions</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h5 className="font-semibold text-green-900 mb-2">Immediate Actions</h5>
            <ul className="space-y-1 text-green-700 text-sm">
              <li>• Target keyword gaps identified</li>
              <li>• Optimize underperforming content</li>
              <li>• Improve Core Web Vitals</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h5 className="font-semibold text-blue-900 mb-2">Long-term Strategy</h5>
            <ul className="space-y-1 text-blue-700 text-sm">
              <li>• Build high-quality backlinks</li>
              <li>• Create comprehensive content clusters</li>
              <li>• Monitor competitor movements</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Pre-built competitor data for dental implant market
export const dentalCompetitors: Competitor[] = [
  {
    name: 'ClearChoice Dental Implants',
    domain: 'clearchoice.com',
    domainAuthority: 85,
    monthlyTraffic: 500000,
    targetKeywords: ['dental implants', 'all on 4 dental implants', 'dental implant cost'],
    strengths: ['High brand recognition', 'Extensive marketing budget', 'Multiple locations'],
    weaknesses: ['High prices', 'Limited international options', 'Corporate feel'],
    opportunities: ['Cost transparency', 'International expansion', 'Personalized care']
  },
  {
    name: 'Affordable Dentures & Implants',
    domain: 'affordabledentures.com',
    domainAuthority: 78,
    monthlyTraffic: 300000,
    targetKeywords: ['cheap dental implants', 'affordable dentures', 'dental implant prices'],
    strengths: ['Lower prices', 'Multiple locations', 'Established brand'],
    weaknesses: ['Lower quality perception', 'Limited implant options', 'Basic services'],
    opportunities: ['Premium positioning', 'Advanced procedures', 'Quality improvement']
  },
  {
    name: 'NewMouth',
    domain: 'newmouth.com',
    domainAuthority: 71,
    monthlyTraffic: 200000,
    targetKeywords: ['dental implant guide', 'dental implant information', 'dental procedures'],
    strengths: ['Educational content', 'SEO optimization', 'Comprehensive guides'],
    weaknesses: ['No direct services', 'Limited local presence', 'Generic information'],
    opportunities: ['Local partnerships', 'Service offerings', 'Personalized content']
  }
];
