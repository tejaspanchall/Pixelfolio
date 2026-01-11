const TopographicBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      
      {/* Topographic contour lines SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Contour lines */}
        <path
          d="M-100 200 Q200 100 400 250 T800 200 T1200 300 T1600 200"
          stroke="white"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-100 300 Q300 200 500 350 T900 280 T1300 380 T1600 300"
          stroke="white"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-100 400 Q250 320 480 420 T850 380 T1250 480 T1600 400"
          stroke="white"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-100 500 Q200 420 450 520 T820 480 T1200 560 T1600 500"
          stroke="white"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-100 600 Q280 520 520 620 T900 580 T1280 660 T1600 600"
          stroke="white"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-100 700 Q240 620 480 720 T880 680 T1240 760 T1600 700"
          stroke="white"
          strokeWidth="1"
          fill="none"
        />
        
        {/* Circular contours in center */}
        <ellipse
          cx="720"
          cy="450"
          rx="300"
          ry="200"
          stroke="white"
          strokeWidth="1"
          fill="none"
        />
        <ellipse
          cx="720"
          cy="450"
          rx="400"
          ry="280"
          stroke="white"
          strokeWidth="1"
          fill="none"
        />
        <ellipse
          cx="720"
          cy="450"
          rx="500"
          ry="360"
          stroke="white"
          strokeWidth="1"
          fill="none"
        />
        
        {/* Additional organic curves */}
        <path
          d="M0 150 Q360 80 720 180 T1440 120"
          stroke="white"
          strokeWidth="0.5"
          fill="none"
        />
        <path
          d="M0 750 Q360 820 720 720 T1440 780"
          stroke="white"
          strokeWidth="0.5"
          fill="none"
        />
      </svg>
      
      {/* Center glow oval */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px]"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(220 10% 15% / 0.8) 0%, hsl(220 10% 13% / 0.4) 40%, transparent 70%)',
        }}
      />
    </div>
  );
};

export default TopographicBackground;
