import { useEffect, useState } from "react";
import { fetchCurrencies, convert } from "../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { setCurrrencies } from "../slices/currenciesSlice";
import { setFrom, setTo } from "../slices/converterSlice";
import { HiArrowPath } from "react-icons/hi2";
import ConverterSection from "./ConverterSection";

function Converter() {
  const [rotationDegree, setRotationDegree] = useState(0);
  const dispatch = useDispatch();

  const fromCurrency = useSelector((state) => state.converter.fromValue);
  const toCurrency = useSelector((state) => state.converter.toValue);

  const [fromValue, setFromValue] = useState(1);
  const [toValue, setToValue] = useState(1);

  useEffect(() => {
    async function handleFetchCurrencies() {
      const data = await fetchCurrencies();
      if (data) {
        dispatch(setCurrrencies(data));
      }
    }
    handleFetchCurrencies();
  }, []);

  async function handleConvert() {
    document.getElementById("toValueField").value = "000000";
    const result = await convert(fromCurrency, toCurrency, fromValue);
    if(result) setToValue(result.toFixed(2));
  }

  useEffect(() => {
    handleConvert();
  }, [fromCurrency, toCurrency]);

  const handleSwitchCurrencies = () => {
    setRotationDegree(rotationDegree + 180);
    document.getElementById(
      "rotateIcon"
    ).style.transform = `rotate(${rotationDegree}deg)`;
    let temp = fromCurrency;
    dispatch(setFrom(toCurrency));
    dispatch(setTo(temp));

    temp = fromValue;
    setFromValue(toValue);
    setToValue(temp);
  };

  return (
    <div className="w-full max-h-200 flex flex-col md:h-[60%] h-[60%]">
      <div className="mim-w-full h-full  grid gap-6 grid-cols-4 mt-3  grid-rows-4 relative">
        <ConverterSection
          currency={fromCurrency}
          setCurrency={setFrom}
          value={fromValue}
          setValue={setFromValue}
        />
        <div className="absolute self-center justify-self-center flex items-center justify-center bg-white p-2 w-20 h-20 rounded-full">
          <HiArrowPath
            id="rotateIcon"
            onClick={handleSwitchCurrencies}
            className="text-3xl w-full h-full text-[#6239eb] cursor-pointer transition-all duration-500 bg-[#f1eefd] rounded-full p-5"
          />
        </div>
        <ConverterSection
          currency={toCurrency}
          setCurrency={setTo}
          value={toValue}
          setValue={setToValue}
        />
      </div>
      <div className="w-full h-fit mt-5 text-2xl flex justify-center items-center">
        <button className="bg-purple-500 px-3 py-2 text-white font-semibold tracking-wider shadow-2xl active:shadow-none rounded-xl" onClick={handleConvert}>Convert</button>
      </div>
    </div>
  );
}

export default Converter;
