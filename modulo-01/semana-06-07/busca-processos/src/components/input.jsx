import '../assets/styles/input.css';

const Input = props => {
  const { label, name, value, onChange, type } = props;

  if (type === "textarea") {
    return (
      <div className="textarea-content">
        <label htmlFor={name}>{label}</label>
        <textarea 
          value={value}
          onChange={e => onChange(e.target.value)}
          name={name}
        />
      </div>
    );
  } else {
    return (
      <div className="input-content">
        <label htmlFor={name}>{label}</label>
        <input
          value={value}
          onChange={e => onChange(e.target.value)}
          name={name}
          type="text"
        />
      </div>
    );
  }
}

export default Input;
