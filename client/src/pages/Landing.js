import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
      <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby semiotics flannel austin whatever pabst. Actually literally
            hexagon polaroid, stumptown XOXO shoreditch wolf mumblecore
            aesthetic man braid pour-over. La croix food truck actually unicorn
            pabst taxidermy. Tote bag drinking vinegar before they sold out,
            copper mug schlitz sriracha next level leggings tilde kale chips.
            Portland ugh pitchfork hashtag, narwhal tilde knausgaard quinoa
            live-edge art party pinterest sriracha disrupt snackwave kogi
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};



export default Landing;