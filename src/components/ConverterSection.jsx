import { useSelector, useDispatch } from "react-redux";
import { ThreeDots } from "react-loader-spinner";

function ConverterSection({ value, setValue, currency, setCurrency }) {
  const currencies = useSelector((state) => state.currencies.currencies);
  const dispatch = useDispatch();
  const toCurrency = useSelector((state) => state.converter.toValue);

  return (
    <div className="md:col-span-2 flex flex-col gap-2 md:row-span-4 px-10 py-7 row-span-2 col-span-4 w-full text-[#1c2453] bg-white rounded-xl shadow-2xl">
      <div className="w-full h-fit flex flex-wrap items-center">
        <div className="w-[30%] min-w-fit text-xl md:text-2xl font-semibold tracking-wide">
          <p>{currency}</p>
        </div>
        <div className="w-[70%]">
          {currencies && Object.keys(currencies).length > 0 && (
            <select
              className="max-w-fit w-full text-lg p-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 ease-in-out"
              value={currency}
              onChange={(e) => dispatch(setCurrency(e.target.value))}>
              {Object.keys(currencies).map((code) => (
                <option key={code} value={code}>
                  {currencies[code]}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
      {currency === toCurrency && (
        <div className="w-full h-full flex items-center" id="toLoader">
          <ThreeDots
            visible={true}
            height="60"
            width="60"
            ariaLabel="radio-loading"
            color="rgb(168 85 247)"
          />
        </div>
      )}
      <div className="w-full h-full flex items-center px-5 text-5xl">
        <input
          type="number"
          min={0}
          disabled={currency === toCurrency ? true : false}
          id={currency === toCurrency ? "toValueField" : "fromValueField"}
          name=""
          value={value}
          onChange={(e) => {
            let val = e.target.value.replace(/^0+/, "");
            if (val[0] === ".") {
              val = "0" + val;
            }
            setValue(val);
          }}
          className="w-full p-2 focus:outline-none text-[#6239eb] disabled:bg-transparent"
        />
      </div>
    </div>
  );
}

export default ConverterSection;
