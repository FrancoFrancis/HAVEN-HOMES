import "./contact.css";
import Back from "../common/back";
import img from "../images/contact.jpg";
import send from "../images/send.svg";

export default function Contact() {
  return (
    <div className="contact mb" id="contact">
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
    </div>
  );
}
