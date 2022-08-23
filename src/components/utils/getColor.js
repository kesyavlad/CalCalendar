const getColor = (calculated_cal, daily_kcal_limit, colors) => {
  //<1601
  if (calculated_cal <= daily_kcal_limit - daily_kcal_limit * 0.2) {
    return colors[0];
  }

  //1601-1800
  if (calculated_cal <= daily_kcal_limit - daily_kcal_limit * 0.1) {
    return colors[1];
  }

  //1801-2000
  if (calculated_cal <= daily_kcal_limit) {
    return colors[2];
  }

  //2001-2200
  if (calculated_cal <= daily_kcal_limit + daily_kcal_limit * 0.1) {
    return colors[3];
  }

  //2201-2400
  if (calculated_cal <= daily_kcal_limit + daily_kcal_limit * 0.2) {
    return colors[4];
  }

  //>2400
  if (calculated_cal > daily_kcal_limit + daily_kcal_limit * 0.2) {
    return colors[5];
  }
};

export default getColor;
