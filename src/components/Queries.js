import {useState} from "react";

const Section =({name,question,answer,isVisible,setIsVisible})=>
{
    
    return (
        <div className="Section_container" onClick={()=>(isVisible)? setIsVisible(false):setIsVisible(true)}>
        <h3>{question}</h3>
        <h5>{isVisible && answer}</h5>
        
        </div>
    );
}


const Queries=()=>
{
    const [visibleConfig,setVisibleConfig]=useState("");
    return (
        <div className="Instamart_section">
        <Section 
            name={"a"}
            question={"What is this app about ?"}
            answer={"This is a simple food delivery app. select any food from your fav near by restraunts ,then our agents provides you food in time for less delivery fee."}
            isVisible= {(visibleConfig === "a")}
            setIsVisible= {()=>(visibleConfig==="a")?setVisibleConfig(""):setVisibleConfig("a")}
        />

        <Section 
            name={"b"}
            question={"How many years of experience do you have ?"}
            answer={"Yeah ,its from many years, approximately from 2017. but did not get into light faster."}
            isVisible={(visibleConfig === "b")}
            setIsVisible={()=>(visibleConfig==="b")?setVisibleConfig(""):setVisibleConfig("b")}
        />

        <Section 
            name={"c"}
            question={"How can we beleive you ?"}
            answer={"There will be links to all our social media applications.Ping me and watch all the reviews."}
            isVisible={(visibleConfig === "c")}
            setIsVisible={()=>(visibleConfig==="c")?setVisibleConfig(""):setVisibleConfig("c")}
        />

        <Section 
            name={"d"}
            question={"Do you have any discounts ?"}
            answer={"We do have, but they vary from restraunt to restraunt.But there will be offer of free ddelivery from our side applied for your first delivery."}
            isVisible={(visibleConfig === "d")}
            setIsVisible={()=>(visibleConfig==="d")?setVisibleConfig(""):setVisibleConfig("d")}
        />

        <Section 
            name={"e"}
            question={"How can we Reach you for complaints ?"}
            answer={"You can post the pic of food and you get a call from our assistant.Negotiate with them and get proper coupons."}
            isVisible={(visibleConfig === "e")}
            setIsVisible={()=>(visibleConfig==="e")?setVisibleConfig(""):setVisibleConfig("e")}
        />

        </div>
    );
}

export default Queries;