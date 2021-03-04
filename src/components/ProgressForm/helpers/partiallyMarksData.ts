const partiallyMarksData = {
  marksArray: [
    {
      value: 1,
      label: '1%',
    },
    {
      value: 20,
      label: '20%',
    },
    {
      value: 40,
      label: '40%',
    },
    {
      value: 60,
      label: '60%',
    },
    {
      value: 80,
      label: '80%',
    },
    {
      value: 99,
      label: '99%',
    },
  ],
  min: 1,
  max: 99,
  defaultValue: 50,
  description: 'Отметьте на сколько процентов ваша цель была выполнена',
  isDone: 'partially',
};

export default partiallyMarksData;
