import React, { useState } from 'react';
import memberImages from './memberImages';
import timelineImages from './timelineImages';
import timelineEvents from './timelineEvents';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image: string;
  keyDevelopments: string[];
}

interface TeamMember {
  name: string;
  position: string;
  description?: string;
}

interface TimelineProps {
  onYearChange: (year: string) => void;
  teamMembers: {
    [key: string]: TeamMember[];
  };
}

const Timeline: React.FC<TimelineProps> = ({ onYearChange, teamMembers }) => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent>(timelineEvents[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleEventClick = (event: TimelineEvent) => {
    if (event.year === selectedEvent.year) return;
    setIsAnimating(true);
    setSelectedEvent(event);
    onYearChange(event.year);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-5xl font-bold text-center text-theme-blue dark:text-white mb-12">Our Journey</h2>
        
        {/* Main Content Area */}
        <div className="mt-8">
          {/* Content Section */}
          <div className="flex gap-8">
            <div>
              {/* Left Side - Description */}
              <div className="w-[450px]">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg h-[450px] flex flex-col mb-8">
                  {/* Image Section */}
                  <div className="h-[200px] bg-gray-100">
                    <img 
                      src={selectedEvent.image || '/timeline/default-timeline.jpg'} 
                      alt={selectedEvent.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[28px] font-bold">{selectedEvent.year}</span>
                      <div className="w-px h-6 bg-gray-300" />
                      <span className="text-[22px] font-bold">{selectedEvent.title}</span>
                    </div>
                    
                    <p className={`text-gray-600 text-[15px] leading-relaxed ${isExpanded ? '' : 'line-clamp-4'}`}>
                      {selectedEvent.description}
                    </p>
                    
                    <button 
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="text-[13px] text-blue-600 hover:text-blue-700 underline mt-auto"
                    >
                      {isExpanded ? 'Show less' : 'Show more'}
                    </button>
                  </div>
                </div>

                {/* Timeline Bar - Moved below description */}
                <div className="relative h-[60px] flex items-center">
                  {/* Timeline Line with Gradient */}
                  <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-white/10 dark:via-white/30 dark:to-white/10" />
                  
                  {/* Timeline Points */}
                  <div className="relative flex justify-between items-center w-full px-4">
                    {timelineEvents.map((event, index) => (
                      <div
                        key={event.year}
                        className={`relative cursor-pointer group transition-all duration-500 ${
                          selectedEvent.year !== event.year ? 'opacity-50 blur-[1px]' : ''
                        }`}
                        onClick={() => handleEventClick(event)}
                        style={{ minWidth: '50px', textAlign: 'center' }}
                      >
                        {/* Year Label */}
                        <div 
                          className={`absolute -top-8 left-1/2 transform -translate-x-1/2
                            text-[14px] font-medium whitespace-nowrap transition-all duration-500 
                            ${selectedEvent.year === event.year 
                              ? 'text-yellow-400 scale-110' 
                              : 'text-gray-500 dark:text-white/60 group-hover:text-gray-700 dark:group-hover:text-white/90'
                            }`}
                          style={{ minWidth: '50px' }}
                        >
                          {event.year}
                        </div>

                        {/* Diamond Shape */}
                        <div className="relative">
                          <div 
                            className={`relative w-[10px] h-[10px] mx-auto transition-all duration-500
                              transform rotate-45 group-hover:scale-110 ${
                              selectedEvent.year === event.year 
                                ? 'bg-yellow-400 scale-110' 
                                : 'border-2 border-gray-400 dark:border-white/50 group-hover:border-gray-600 dark:group-hover:border-white'
                            }`}
                            style={{
                              boxShadow: selectedEvent.year === event.year 
                                ? '0 0 10px rgba(255, 214, 0, 0.5)' 
                                : 'none'
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Team Members */}
            <div className="flex-1">
              <div className="grid grid-cols-1 gap-8">
                {teamMembers[selectedEvent.year]?.map((member: TeamMember, index: number) => (
                  <div 
                    key={index} 
                    className={`relative group transition-opacity duration-300 ${
                      isAnimating ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    <div className="flex items-start gap-6">
                      {/* Profile Picture */}
                      <div className="w-[130px] h-[130px] rounded-full overflow-hidden flex-shrink-0 bg-gray-100 border-2 border-gray-200 dark:border-gray-700">
                        <img 
                          src={memberImages[member.name] || '/team/default-avatar.jpg'} 
                          alt={member.name}
                          className="w-full h-full object-cover object-center"
                          style={{ objectPosition: 'top center' }}
                        />
                      </div>
                      
                      {/* Text Content */}
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {member.name}
                        </h4>
                        <p className="text-[#6B7280] dark:text-gray-400 text-sm mb-3">
                          <span className="inline-block">{member.position}</span>
                          <span className="block h-[1px] mt-3 border-t-2 border-dotted border-theme-yellow dark:border-theme-yellow w-[80px]"></span>
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {member.position === "PRESIDENT" && "Leading the club's vision and strategic initiatives, coordinating with different teams to drive innovation and growth."}
                          {member.position === "VICE PRESIDENT" && "Supporting the president in club operations and helping execute key initiatives while fostering team collaboration."}
                          {member.position === "CREATIVE DIRECTOR" && "Overseeing the club's creative direction, managing design projects, and ensuring visual consistency across all publications."}
                          {member.position === "MANAGING DIRECTOR" && "Managing day-to-day operations, coordinating events, and ensuring smooth execution of club activities and projects."}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline; 