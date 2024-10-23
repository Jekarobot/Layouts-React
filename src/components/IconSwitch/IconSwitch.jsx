/* eslint-disable react/prop-types */
const IconSwitch = ({ onViewChange, viewMode }) => {
  const handleSwitch = () => {
    onViewChange(viewMode === 'cards' ? 'list' : 'cards');
  };

  return (
    <button className="iconSwitch" onClick={handleSwitch}>
      <i className="material-icons">
        {viewMode === 'cards' ? 'view_module' : 'view_list'}
      </i>
    </button>
  );
};

export default IconSwitch;