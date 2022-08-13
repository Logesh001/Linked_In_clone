import styled from "styled-components";

const Main = (props) => {
  return (
  <Container>
    <ShareBox>Share
    <div>
        <img src="/images/user.svg" alt=""/>
        <button>Start a post</button>
    </div>

    <div>
        <button>
        <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/24/000000/external-photo-night-club-flaticons-lineal-color-flat-icons-2.png"/>
        <span>Photo</span>
        </button>
    
        <button>
        <img src="https://img.icons8.com/fluency/24/000000/video.png"/>
        <span>Video</span>
        </button>
    
        <button>
        <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/24/000000/external-event-camping-kiranshastry-lineal-color-kiranshastry.png"/>
        <span>Event</span>
        </button>
  
        <button>
        <img src="https://img.icons8.com/tiny-color/24/000000/experimental-news-tiny-color.png"/>
        <span>Write article</span>
        </button>
    </div>
    </ShareBox>
    <div>
      <Article>
          <SharedActor>
            <a>
              <img src="/images/user.svg" />
              <div>
                <span>Title </span>
                <span>Info </span>
                <span>Date </span>
              </div>
            </a>
            <button>
              <img src="https://img.icons8.com/ios-filled/24/000000/ellipsis.png"/>
            </button>
          </SharedActor>
          <Description>
              Description
          </Description>
          <SharedImg>
            <a>
              <img src="/images/Zugpsitze_mountain.jpg" alt=""/>
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                  <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt="like"/>
                  <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt="clap"/>
                  <img src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97" alt="heart"/>
                <span>75</span>
              </button>
            </li>
            <li>
              <a>2 comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
                        <button>
                            <img src="https://img.icons8.com/external-tanah-basah-detailed-outline-tanah-basah/24/000000/external-like-user-interface-tanah-basah-detailed-outline-tanah-basah.png" class="filter-blue" alt="like"/>
                            <span>Like</span>
                        </button>
                        <button>
                            <img src="https://img.icons8.com/material-outlined/24/000000/comments--v1.png" class="filter-blue" alt="comments"/>
                            <span>Comments</span>
                        </button>
                        <button>
                            <img src="https://img.icons8.com/ios-glyphs/24/000000/share--v1.png" class="filter-blue" alt="share"/>
                            <span>Share</span>
                        </button>
                        <button>
                            <img src="https://img.icons8.com/windows/24/000000/send.png" class="filter-blue" alt="send"/>
                            <span>Send</span>
                        </button>
                    </SocialActions>
      </Article>
    </div>
  </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
        outline: none;
        color: rgba(0, 0, 0, 0.6);
        font-size: 14px;
        line-height: 1.5;
        min-height: 48px;
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
        font-weight: 600;
    }
    &:first-child{
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img{
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button{
        margin: 4px 0;
        flex-grow: 1;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom:4px;

      button{
        img{
          margin: 0 4px 0 -2px;
      }
      span{
        color: #70b5f9;
      }
    }
  }
  }
`;

const Article = styled(CommonCard)`
 padding: 0;
 margin: 0 0 8px;
 overflow: visible;

`;

const SharedActor = styled.div`
  padding-right: 48px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
margin-bottom: 8px;
align-items: center;
display: flex;
a {
  margin-right: 12px;
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  text-decoration: none;

  img{
    width: 48px;
    height: 48px;
  }
  & > div{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
    margin-left: 8px;
    overflow: hidden;
    span{
      text-align: left;
      &:first-child{
        font-size: 14px;
        font-weight: 700;
        color: rgba(0, 0, 0, 1);
      }

      &:nth child(n+1){
        font-size: 12px;
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
}

button{
  position: absolute;
  right: 12px;
  top: 0;
  background: transparent;
  border: none;
  outline: none; 
}
`;

const Description =styled.div`
padding:0 16px;
 overflow:hidden;
 color:rgba(0,0,0,0.9);
 font-size:14px;
 text-align: left;
`;

const SharedImg = styled.div`
margin-top:8px;
width:100%;
display:block;
position:relative;
background-color: #f9fafb;
img{
    object-fit: contain;
    width:100%;
    height:100%;
}
`;

const SocialCounts=styled.ul`
line-height:1.3;
  display:flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding:8px 0;
  border-bottom:1px solid #e9e5df;
  list-style:none;
  cursor:pointer;
  li{
      margin-right: 5px;
      font-size:12px;
      button{
          display: flex;
          border:none;
          outline:none;
          background: transparent;
      }
      img{
          margin-right:5px;
      }
      span{
          color:rgba(0,0,0,0.6);
          &:hover{
              color:#0a66c2;
          }
      }
      a{
          color:rgba(0,0,0,0.6);
          align-items: center;
          &:hover{
              color:#0a66c2;
          }
      }
  }
`;

const SocialActions=styled.div `
 align-items: center;
 display:flex;
 justify-content:flex-start;
 margin:0;
 min-height:40px;
 padding:4px 8px;
 
 button{
     display: inline-flex;
     align-items: center;
     padding:8px;
     color:rgba(0,0,0,0.6);
     border:none;
     outline: none;
     background:transparent;
     cursor:pointer;
     @media (min-width:768px){
         span{
            margin-left:8px;
         }
        
     }
 }
 .filter-blue{
    filter: invert(28%) sepia(84%) saturate(1510%) hue-rotate(192deg) brightness(91%) contrast(99%);
 }
`;

export default Main;