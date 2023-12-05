import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsWebPSupport } from "../store/appSlice";

const useCheckWebpSupport = () => {
  const dispatch = useDispatch();

  const checkWebPSupport = (callback) => {
    const kTestImages = {
      lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
    };

    const img = new Image();
    img.onload = () => {
      const result = img.width > 0 && img.height > 0;
      callback(result);
    };

    img.onerror = function () {
      callback(false);
    };

    img.src = "data:image/webp;base64," + kTestImages.lossy;
  };

  useEffect(() => {
    checkWebPSupport((result) => {
      if (!result) {
        dispatch(setIsWebPSupport(result));
        return;
      }
    });
  }, [dispatch]);
};

export default useCheckWebpSupport;
