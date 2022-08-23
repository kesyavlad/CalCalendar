import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars/src/index';
import getColor from '../utils/getColor';
import getDaysInMonth from '../utils/getDaysInMonth';
import getActiveDays from '../utils/getActiveDays';
import info from '../../assets/info.json';
import styles from './styles';

const COLORS = [
  'green',
  'mediumseagreen',
  'palegreen',
  'lightsalmon',
  'red',
  'crimson',
]; // indication colors

const INITIAL_DATE = '2022-04-01'; // go to mock data

const CalCalendar = () => {
  const [daysInCurrentMonth, setDaysInCurrentMonth] = useState(0);
  const [activeDays, setActiveDays] = useState(0);

  const coloredDates = {};
  info.dates.map(data => {
    const {date, total_cal, total_cal_burned, daily_kcal_limit} = data;
    const calculated_cal = total_cal - total_cal_burned;
    coloredDates[date] = {
      color: getColor(calculated_cal, daily_kcal_limit, COLORS),
    };
  });

  const Palette = () => {
    return (
      <View style={styles.squareContainer}>
        {COLORS.map(color => (
          <View
            key={color}
            style={[styles.square, {backgroundColor: color}]}></View>
        ))}
      </View>
    );
  };

  return (
    <View>
      <Calendar
        initialDate={INITIAL_DATE}
        markingType={'period'}
        markedDates={coloredDates}
        onMonthChange={data => {
          setActiveDays(getActiveDays(data.month, data.year, info.dates));
          setDaysInCurrentMonth(getDaysInMonth(data.year, data.month));
        }}
      />
      <Palette />
      <View style={styles.info}>
        <View style={styles.box}>
          <Text style={styles.text}>Total Days Tracked</Text>
          <Text style={styles.text}>{activeDays} Days</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Days Missed </Text>
          <Text style={styles.text}>
            {daysInCurrentMonth - activeDays} Days
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>% Days of Green</Text>
          <Text style={styles.text}>
            {((activeDays / daysInCurrentMonth) * 100).toFixed()}%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CalCalendar;
