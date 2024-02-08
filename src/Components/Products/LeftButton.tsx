import React from 'react';
import next from '../../assets/next.png'; // replace with your left arrow image

type LeftButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled: boolean;
};

const LeftButton: React.FC<LeftButtonProps> = ({ onClick, disabled }) => {
    return (
        <button onClick={onClick} disabled={disabled} style={{ float: "left", marginTop: "280px", cursor: "pointer" }}>
            <img src={next} alt="Previous" width="35" height="35" />
        </button>
    );
};

export default LeftButton;
