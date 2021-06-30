<template>
  <div>
    <client-only>
      <ApexChart
        width="500"
        type="bar"
        :options="options"
        :series="series"
      ></ApexChart
    ></client-only>
  </div>
</template>

<script>
import arabicApexChart from 'apexcharts/dist/locales/ar.json';
export default {
  data: function () {
    return {
      options: {
        chart: {
          locales: [arabicApexChart],
          defaultLocale: 'ar',
          id: 'vuechart-example',
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  },
};
</script>