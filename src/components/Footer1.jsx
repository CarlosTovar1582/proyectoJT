import PropTypes from "prop-types";

const Footer1 = ({ className = "" }) => {
  return (
    <footer className="h-96 border-2 border-blue-700"      
    >
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full"
        alt=""
        src="../../public/clippathgroup.svg"
      />
    </footer>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
};

export default Footer1;