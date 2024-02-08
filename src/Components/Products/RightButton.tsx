import React from 'react';
import prev from '../../assets/prev.png'; // replace with your right arrow image

type RightButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled: boolean;
};

const RightButton: React.FC<RightButtonProps> = ({ onClick, disabled }) => {
    return (
        <button onClick={onClick} disabled={disabled} style={{ float: "right", marginTop: "280px", cursor: "pointer" }}>
            <img src={prev} alt="Next" width="35" height="35" />
        </button>
    );
};

export default RightButton;
