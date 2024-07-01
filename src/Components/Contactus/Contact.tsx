import { useRef } from "react";
import styles from "./Contactus.module.css";
import emailjs from "@emailjs/browser";
import { Link, useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm("service_ilzimze", "template_6r9nsqb", form.current, {
        publicKey: "KHpgBlKP0zbLgARz4",
      })
      .then(
        () => {
          if (form.current) {
            form.current.reset();
          }
          alert("SUCCESS!");
          navigate("/");
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <div>
      <div className={`w-100 p-5 mt-5 ${styles.cover_of_form}`}>
        <div className={`mt-3 ${styles.Content_style_background_color}`}>
          <div className={`w-50 ${styles.content_side}`}>
            <div className="text-light fw-bolder mx-2 text-start">
              <h3 className={`d-sm-none ${styles.text}`}>
                <Link to="/" className={`${styles.home_Link}`}>
                  Portfolio
                </Link>
              </h3>
              <h2 className={`${styles.Headings}`}>
                Design
                <span className="fs-3"> and </span>
                <br />
                <h5 className="fs-3 text-warning">Innovation </h5>
              </h2>
              <p>
                Innovation Innovation Innovation Innovation Innovation
                Innovation Innovation Innovation Innovation Innovation
                Innovation Innovation Innovation Innovation Innovation
                Innovation
              </p>
              <div className="w-100 d-flex flex-wrap justify-content-between gap-2">
                <div className={`p-3 ${styles.Client_reviews}`}>
                  <section className="text-center">
                    <i
                      className=""
                      style={{ width: "100px", height: "1000px" }}
                    >
                      <img
                        src="images/icons/Frame 15.png"
                        alt="..."
                        style={{ objectFit: "cover" }}
                      />
                    </i>
                    <h4 className="">10k</h4>
                    <h6 className="">Complete Projects</h6>
                  </section>
                </div>
                <div className={`p-3 ${styles.Client_reviews}`}>
                  <section className="text-center">
                    <i
                      className=""
                      style={{ width: "100px", height: "1000px" }}
                    >
                      <img
                        src="images/icons/Frame 16.png"
                        alt="..."
                        style={{ objectFit: "cover" }}
                      />
                    </i>
                    <h4 className="">800+</h4>
                    <h6 className="">Client reviews </h6>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className={`p-3 text-light ${styles.form_side}`}>
            <h3 className={`d-lg-none ${styles.text}`}>
              <Link to="/" className={`${styles.home_Link}`}>
                Portfolio
              </Link>
            </h3>
            <h3 className="">GET TOUCH ME?</h3>
            <p className="">
              For your car we will do everything advice design in us repairs and
              maintenance We are the some preferred.
            </p>
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  name="from_name"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  name="from_phone"
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  name="from_email"
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  name="from_message"
                  className="form-control"
                  placeholder="Message"
                  rows={3}
                />
              </div>
              <div className="mb-3">
                <button
                  className="btn btn-outline-danger w-100"
                  type="submit"
                  value="Send"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
