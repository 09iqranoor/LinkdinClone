import styled from "styled-components";


const RightSide = (props)=>{
    return (


        <Container>
         <Follow>
           <Title>
               
            <h2>
              Add to your Feed
            </h2>
            <img  src="/images/feed-icon.svg"/>
           </Title>


      <FeedList>
        <li>
           <a>
          <Avator />
          
           </a>
            <div>
              <span>#Linkdin</span>
              <span>fOLLOW</span>
            </div>
        </li>
        <li>
          <a>
            <Avator/>

          </a>
          <div>
            <span>
                   #Video
            </span>
            <span>Follow</span>
          </div>
        </li>
      </FeedList>

         </Follow>
        </Container>
    )
};


const Container = styled.div`
  
  grid-area: Right;

`;


const Follow = styled.div`
   text-align: center;
    overflow:  hidden;
    margin-bottom: 8px;
     border-radius: 5px;
     background-color: #fff;
     border: none;
     box-shadow: 0 0 0 1px rgb(0 0 0 /15%) , 0 0 0 rgb(0 0 0 /20%);
     padding: 12px;
`;
const Title = styled.div`
display: inline-flex;
align-items: center;
justify-content: space-between;
font-size: 16px;
 width: 100%;
 color: rgba(0,0,0,0.6);
    

`;

const FeedList = styled.ul`
 

`;

const Avator = styled.div`
`;
export default RightSide;

