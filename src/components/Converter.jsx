import { useEffect, useState} from "react";
import { fetchCurrencies } from "../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { setCurrrencies } from "../slices/currenciesSlice";
import { HiArrowPath } from "react-icons/hi2";

function Converter() {
  const dispatch = useDispatch();
  const [rotationDegree, setRotationDegree] = useState(0);

  useEffect(() => {
    async function handleFetchCurrencies() {
      const data = await fetchCurrencies();
      dispatch(setCurrrencies(data));
    }
    handleFetchCurrencies();
  }, []);

  const handleSwitchCurrencies = () => {
    setRotationDegree(rotationDegree + 180);
    document.getElementById('rotateIcon').style.transform = `rotate(${rotationDegree}deg)`;
  };

  const currencies = useSelector((state) => state.currencies);

  return (
    <div className="mim-w-full grid gap-6 grid-cols-4 mt-3 h-[50%] grid-rows-4 relative">
      <div className="md:col-span-2 md:row-span-4 row-span-2 col-span-4 w-full bg-white rounded-xl shadow-2xl"></div>
      <div className="absolute self-center justify-self-center flex items-center justify-center bg-white p-2 w-20 h-20 rounded-full">
        <HiArrowPath id="rotateIcon" onClick={handleSwitchCurrencies} className="text-3xl w-full h-full text-[#6239eb] cursor-pointer transition-all duration-500 bg-[#f1eefd] rounded-full p-5"/>
      </div>
      <div className="md:col-span-2 md:row-span-4 row-span-2 col-span-4 w-full bg-white rounded-xl shadow-2xl"></div>
    </div>
  );
}

export default Converter;
