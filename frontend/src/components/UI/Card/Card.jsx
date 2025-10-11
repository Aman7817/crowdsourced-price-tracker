const Card = ({ 
  children, 
  className = '',
  padding = 'medium',
  ...props 
}) => {
  const paddings = {
    small: 'p-3',
    medium: 'p-6',
    large: 'p-8',
    none: 'p-0',
  };

  return (
    <div
      className={`
        bg-white rounded-lg shadow-md border border-gray-200
        ${paddings[padding]}
        ${className}
      `.trim()}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;