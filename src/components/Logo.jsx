import PropTypes from "prop-types";

const Logo = ({ className = "" }) => {
  return (
    <div
    className={`w-full h-40 bg-gray flex flex-row items-start justify-between py-[22.5px] pr-2.5 pl-[38px] box-border leading-[normal] tracking-[normal] gap-[20px] text-left text-[96px] text-white font-lacquer ${className}`}
  >
    <a className="[text-decoration:none] relative text-[inherit] mq450:text-[29px] mq767:text-[48px]">
      Jeans Tovar
    </a>
    <div className="mt-[-33.5px] h-[182px] w-[268px] [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] flex flex-row items-start justify-start py-2.5 px-0 box-border relative text-16xl">
      <div className="w-[140.7px] relative hidden h-[55.3px] shrink-0 [transform:_rotate(-40deg)] z-[1] mq450:text-2xl mq767:text-9xl">
        Inicio
      </div>
      <a className="[text-decoration:none] h-[65.5px] w-[192.9px] absolute !m-[0] top-[121.79px] right-[36px] text-[inherit] inline-block [transform:_rotate(-40deg)] [transform-origin:0_0] mq450:text-2xl mq767:text-9xl">
        Categorias
      </a>
    </div>
  </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
//a los 100 ocultar  los