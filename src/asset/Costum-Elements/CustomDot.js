const CustomDot = ({ onClick, active }) => {
  return (
    <button
      className={active ? "dot-active" : "dot-inactive"}
      onClick={() => onClick()}
    />
  );
};
export default CustomDot;
