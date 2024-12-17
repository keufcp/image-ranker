import React from "react";

interface ProgressBarProps {
    current: number;
    total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
    const percentage = (current / total) * 100;
    return (
        <div style={styles.container}>
            <div style={{ ...styles.progress, width: `${percentage}%` }} />
        </div>
    );
};

import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
    container: {
        width: '100%',
        height: '20px',
        backgroundColor: '#e0e0e0',
        borderRadius: '10px',
        overflow: 'hidden',
        position: 'relative',
    },
    progress: {
        height: '100%',
        backgroundColor: '#535c13', // プログレスバーの色
        transition: 'width 0.5s ease',
    },
    label: {
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        color: '#000',
        fontSize: '14px',
        fontWeight: 'bold',
    },
};

export default ProgressBar;