import { useEffect, useCallback } from "react";
import { setAction, setTimeAction } from "../store/appSlice";
import { useDispatch } from "react-redux";
import {
  intervalToDuration,
  differenceInDays,
  startOfDay,
  endOfDay,
  isAfter,
  parse,
} from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export const parseDate = (date, pattern) => {
  return parse(date, pattern, new Date());
};

export const makeInterval = (start, end) => {
  const { hours, minutes } = intervalToDuration({
    start,
    end,
  });

  const days = differenceInDays(end, start);

  function n(n) {
    const value = (n > 9 ? "" : "0") + n;
    return value.split("");
  }

  return {
    days: n(days),
    hours: n(hours),
    minutes: n(minutes),
  };
};

export const useGetTimeStatus = ({ startDate, endDate }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!startDate || !endDate) {
      return;
    }

    const startDayStartAction = startOfDay(startDate);
    const endDayEndAction = endOfDay(endDate);
    const current = utcToZonedTime(new Date(), "Europe/Moscow");

    if (isAfter(current, startDayStartAction)) {
      // акция идет
      // dispatch(setAction(0));
      // dispatch(setTimeAction(makeInterval(current, endDayEndAction)));
    }
    if (isAfter(startDayStartAction, current)) {
      // не началась
      // dispatch(setAction(-1));
      // dispatch(setTimeAction(makeInterval(current, startDayStartAction)));
    }
    if (isAfter(current, endDayEndAction)) {
      // закончилась
      // dispatch(setAction(1));
    }
  }, [dispatch, endDate, startDate]);
};

// const startDate = getStartDay(parseDate("20.12.2023", "dd.MM.yyyy"));
// const current = utcToZonedTime(new Date(), "Europe/Moscow");
// console.log(makeInterval(current, startDate));
