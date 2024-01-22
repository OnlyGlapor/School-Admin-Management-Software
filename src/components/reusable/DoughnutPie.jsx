import React from 'react';
import { ResponsivePie } from '@nivo/pie';

// const data = [
//     { id: 'Boys', value: 300, color: '#33A6FF' },
//     { id: 'Girls', value: 400, color: '#3B82F6' },
//     { id: 'Staffs', value: 50, color: '#FF6F33' }, // Adjusted the color to the orange from the theme
// ];

const DoughnutPie = ({data, width, height, isPercentage, fontsize}) => {
    const getTotal = () => data.reduce((sum, entry) => sum + entry.value, 0);

    const total = getTotal();

    return (
        <div style={{ position: 'relative', height: height ? height : '180px', width: width ? width : '300px' }}>
            <ResponsivePie
                data={data}
                colors={(d) => d.data.color}
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeInnerRadius={0.5}
                activeOuterRadius={0.5}
                activeOuterRadiusOffset={8}
                borderWidth={0}
                borderColor={{
                    from: 'color',
                    modifiers: [['darker', 0.2]],
                }}
                enableArcLabels={false}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [['darker', 2]],
                }}
                layers={[
                    'arcs',
                    'arcLabels',
                    ({ centerX, centerY }) => (
                        <text
                            x={centerX}
                            y={centerY}
                            textAnchor="middle"
                            dominantBaseline="central"
                            style={{
                                fontSize: fontsize ? fontsize : '1.5em',
                                fontWeight: 'bold',
                                fill: '#333',
                            }}
                            >
                            {isPercentage ? '10% ': total}
                        </text>
                    ),
                ]}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true,
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10,
                    },
                ]}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 56,
                        itemsSpacing: 0,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000',
                                },
                            },
                        ],
                    },
                ]}
            />
        </div>
    );
};

export default DoughnutPie;
