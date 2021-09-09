//external imports
import {Line} from 'react-chartjs-2';


//internal imports
import torqueData from './data.json';

//sample data for chartjs data. 
const data = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }
  


function OpenTorque(props){
    return <Line
    data={data}
    options={{
      title:{
        display:true,
        text:'Open',
        fontSize:20
      },
      legend:{
        display:true,
        position:'right'
      }
    }}
  />;

}
export default OpenTorque;