import "./contact.css";
import Back from "../common/back";
import img from "../images/contact.jpg";
import send from "../images/send.svg";
import {motion} from "framer-motion"


export default function Contact() {
  return (
    <motion.div className="contact mb" id="contact"
    initial={{width:0}}
    animate={{width:"100vw"}}
    exit={{x:window.innerWidth, transition: { duration: 0.1 }}}
    >
      <Back name="Contact us" title="Get Help & Friendly Support" cover={img} />
      <div className="container">
        <form action="" className="shadow">
        <h4>Please fill up the form</h4>
          <div className="form-flex">
            <div className="illustration">
              <img src={send} />
            </div>
            <div className="inputs">
              <input type="text" name="" placeholder="Name" />
              <input type="text" name="" placeholder="Email" />
              <input type="text" name="" placeholder="Subject" />
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <button>Submit request</button>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
