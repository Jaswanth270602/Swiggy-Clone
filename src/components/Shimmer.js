
import RestrauntCard from "./RestuarantCard";

const abc=[{},{},{}];

const ShimmerCards=()=>{
    return(
    <div className="SD1">
        <div className="SD2"></div>
    </div>
)};
const Shimmer=()=>
{
    // return( abc.map((element)=>
    // {
    //     return <shimmerCards />
    // }));
    
    
    //  for(i=0;i<20;i++)
    // { return (  <ShimmerCards key={i}/>)
    //   }
   return(<div className="sims"> 
    {
    Array(20).fill("").map((e,index)=><ShimmerCards key={index}/>)
    }


</div>);
    
    
}

export default Shimmer;