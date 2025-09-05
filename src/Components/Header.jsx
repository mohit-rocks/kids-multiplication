import React, { useState, useEffect, useRef } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setLevel, setNumbers} from "../store/store.jsx";

// Level mapper allows us to set the table start for each level.
// i.e. when level is 2, multiple questions will start form table of 4.
const LevelMapper = new Map([
  [1, 1],
  [2, 4],
  [3, 7],
  [4, 9],
]);

function Header({props}) {

  const [selectedLevel, setSelectedLevel] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  const levels = [
    { value: 1, label: "Level 1 - Table of 1 - 3", emoji: "🟢" },
    { value: 2, label: "Level 2 - Table of 4 - 6", emoji: "🟡" },
    { value: 3, label: "Level 3 - Table of 7 - 8", emoji: "🟠" },
    { value: 4, label: "Level 10 - Table of 9 - 10", emoji: "⭐" }
  ];

  const currentLevel = levels.find(level => level.value === selectedLevel);

  const handleLevelChange = (levelValue) => {
    setSelectedLevel(levelValue);
    setIsDropdownOpen(false);

    // Set the level in the state and set numbers again so we can start from
    // specific table for that level.
    dispatch(setLevel({level: LevelMapper.get(levelValue)}))
    dispatch(setNumbers())
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="floating-emoji emoji-1">🧮</div>
      <div className="floating-emoji emoji-2">⭐</div>
      <div className="floating-emoji emoji-3">🎯</div>

      <div className="header">
        <h1 className="title">Multiplication Quiz</h1>

        <div className="level-info">
          <div className="level-dropdown" ref={dropdownRef}>
            <button
              className={`level-badge dropdown-trigger ${isDropdownOpen ? 'active' : ''}`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="level-emoji">{currentLevel.emoji}</span>
              {currentLevel.label}
              <svg className="dropdown-arrow" viewBox="0 0 24 24" width="16" height="16">
                <path fill="currentColor" d="M7 10l5 5 5-5z"/>
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="dropdown-menu">
                {levels.map((level) => (
                  <button
                    key={level.value}
                    className={`dropdown-item ${selectedLevel === level.value ? 'active' : ''}`}
                    onClick={() => handleLevelChange(level.value)}
                  >
                    <span className="level-emoji">{level.emoji}</span>
                    {level.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="score">Score: 850pts</div>
        </div>
      </div>
    </>
  );
}

export default Header;
