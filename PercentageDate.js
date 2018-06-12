class PercentageDate {
  constructor(date) {
    this.d = date;
    if (date instanceof Date === false) this.d = new Date();
  }

  asPercentage = (val, max) => val/max;
  
  get year() { return this.asPercentage(this.d.getFullYear(), 10000); }
  
  get month() { return this.asPercentage(this.d.getMonth()+1, 12); }
  
  get day() { return this.asPercentage(this.d.getDate(), 31); }
  
  get hour() { return this.asPercentage(this.d.getHours()+1, 24); }
  
  get minute() { return this.asPercentage(this.d.getMinutes()+1, 60); }
  
  get second() { return this.asPercentage(this.d.getSeconds()+1, 60); }
  
  get millisecond() { return this.asPercentage(this.d.getMilliseconds()+1, 1000); }
}
