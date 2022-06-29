import { useEffect, useState } from 'react';
import  { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement } from 'chart.js';
ChartJS.register(
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
);
const options={
  indexAxis: 'x',
  elements: {
    bar: {
      borderWidth: 0.5,
      innerWidth: 3,
    },
  },
  reponsive: true,
  plugins: {
    legend: {
      position: 'left',
    },
    title: {
      display: true,
      text: 'Last Month Statistics',
    },
  },
};

const Horizontalchart =() => {
  const [data, setData] = useState({
    labels:  ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'],
    datasets: [
      {
        label:"Dataset1",
        data:[],
        borderColor: 'rgb(70,130,180)',
        backgroundColor: 'rgb (240,248,255)',
      }
    ]
  });
  useEffect(()=>{
    const fetchData= async()=>{
      const url='http://localhost:5082/GetDistinct'
      await fetch(url).then((data)=> {
        console.log('Api data',data)
        const res= data.json();
        return res
      }).then((res)=>{
        console.log("ressss",res)
        setData({
          labels: res.label,
          datasets: [
            {
              label:"frequency",
              data: res.count,
              borderColor: 'rgb(70,130,180)',
              backgroundColor: '	rgb (240,248,255)',
            }
          ]
        })
        console.log("arr",res.label,res.count)
      }).catch(e => {
        console.log("error",e)
      })
    }
    
    fetchData();
  },[])
  return(<div style={{width:'50%', height:'50'}}><Bar data={data} options={options}/></div>)
}
export default Horizontalchart;