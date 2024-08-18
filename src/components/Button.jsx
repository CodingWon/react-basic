const Button = ({ text, color = "black", children }) => {
  const onClickButton = (e) => {
    console.log(e);
    /* 
     # SyntheticBaseEvent(합성 이벤트 객체)
        - 모든 브라우저에서의 이벤트 객체를 하나로 통일한 형태
     */
    console.log(text);
  };

  return (
    <button
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
