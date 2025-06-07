import React, { useEffect, useState, useRef } from 'react';
import '../styles/CursorFollower.css';

const CursorFollower = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const followerRef = useRef(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef();

  // Smoothly follow the cursor
  const animate = () => {
    if (!followerRef.current) return;
    
    const { x, y } = positionRef.current;
    const follower = followerRef.current;
    const currentX = parseFloat(follower.style.left || '0');
    const currentY = parseFloat(follower.style.top || '0');
    
    // Calculate new position with easing
    const newX = currentX + (x - currentX) * 0.15;
    const newY = currentY + (y - currentY) * 0.15;
    
    // Apply the new position
    follower.style.left = `${newX}px`;
    follower.style.top = `${newY}px`;
    
    // Continue the animation loop
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Show the cursor after it's positioned
    const showCursor = () => {
      setIsVisible(true);
      document.removeEventListener('mousemove', showCursor);
    };

    const handleMouseMove = (e) => {
      // Update the target position
      positionRef.current = { x: e.clientX, y: e.clientY };
      
      // Show cursor on first move
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.closest('a, button, .skill-item, .timeline-content, .interactive-element')) {
        setIsHovered(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);
    
    // Start the animation loop
    animationFrameRef.current = requestAnimationFrame(animate);
    
    // Hide cursor when leaving the window
    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };
    
    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };
    
    document.addEventListener('mouseenter', handleMouseEnterWindow);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isVisible]);

  return (
    <div 
      ref={followerRef}
      className={`cursor-follower ${isHovered ? 'cursor-hover' : ''} ${isVisible ? 'visible' : ''}`}
      style={{
        left: `${positionRef.current.x}px`,
        top: `${positionRef.current.y}px`,
      }}
    />
  );
};

export default CursorFollower;
