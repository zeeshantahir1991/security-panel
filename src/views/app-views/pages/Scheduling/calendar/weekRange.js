import React, { useState } from 'react';
import { DatePicker } from 'antd';
import { EditableCard } from './../../../components/data-display/tabs/EditableCard';
import { Swal } from 'sweetalert2';

const { RangePicker } = DatePicker;

const WeekRange = ({getDateList}) => {
  const [dates, setDates] = useState([]);
  const [hackValue, setHackValue] = useState();
  const [value, setValue] = useState();
  const disabledDate = current => {
    if (!dates || dates.length === 0) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;
    const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;
    return tooEarly || tooLate;
  };

  const onOpenChange = open => {
    if (open) {
      setHackValue([]);
      setDates([]);
    } else {
      setHackValue(undefined);
    }
  };

  return (
    <RangePicker
      value={hackValue || value}
      disabledDate={disabledDate}
      onCalendarChange={val => setDates(val)}
      onChange={val => {
        console.log(val)
        let date = [];
        if(val?.length > 1){
        for (var m = val[0]; m.isBefore(val[1]._d); m.add(1, 'days')) {
          date.push(m.format('YYYY-MM-DD'));
        }

        // console.log("Shaking that ass ==>",date)
        if(date?.length > 6)
        {
          // console.log(date)
        getDateList(date)
        setValue(val)
        }
        else{
          alert('Please select a range between 7 Days')
        }
        }
      }}
      onOpenChange={onOpenChange}
    />
  );
};

export default WeekRange