import React, { useState } from 'react'
import Canvas from './Canvas'
import ConfigurationPanel from './ConfigurationPanel'
import './Configurator.css'

function Configurator() {
  // Shared state that both Canvas and ConfigurationPanel can access
  // Set default colors to match the model's default appearance
  const [configState, setConfigState] = useState({
    activeTab: 'Adornment',
    activeFeature: 'Gems',
    activeCategory: 'Precious',
    selectedGridItem: null,
    selectedColorName: 'Sapphire', // Default gem color (sapphire blue)
    sliderValue: 50,
    selectedGem: { category: 'Precious', itemIndex: null, gemName: 'Sapphire' }, // Default gem selection
    selectedMaterial: null,
    showColorPicker: false,
  })

  // Handler to update config state from ConfigurationPanel
  const updateConfigState = (updates) => {
    setConfigState(prev => ({ ...prev, ...updates }))
  }

  React.useEffect(() => {
    console.log('Configurator mounted')
  }, [])

  return (
    <div className="configurator">
      <Canvas configState={configState} />
      <ConfigurationPanel 
        configState={configState} 
        updateConfigState={updateConfigState}
      />
    </div>
  )
}

export default Configurator


