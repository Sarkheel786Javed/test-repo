import { useRef, useState } from "react";
import styles from "./Contactus.module.css";
import emailjs from "@emailjs/browser";

function Contact() {
  interface handleValuesFromselect {
    name: string;
    phone: string;
    email: string;
    message: string;
  }

  const [handleValuesFromselect, setHandleValuesFromselect] =
    useState<handleValuesFromselect>({
      name: "",
      phone: "",
      email: "",
      message: "",
    });

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_gnyz3lx", "template_wrvliba", form.current, "KHpgBlKP0zbLgARz4")
        .then(
          () => {
            console.log("SUCCESS!");
            // Clear the form fields
            setHandleValuesFromselect({
              name: "",
              phone: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <div className={`w-100 p-5 mt-5 ${styles.cover_of_form}`}>
      <div className={`mt-3 ${styles.Content_style_background_color}`}>
        <div className={`w-50 ${styles.content_side}`}>
          <div className="text-light fw-bolder mx-2">
            <h2 className={`${styles.Headings}`}>
              Design
              <span className="fs-3"> and </span>
              <br />
              <h5 className="fs-3 text-warning">Innovation </h5>
            </h2>
            <p>
              Innovation Innovation Innovation Innovation Innovation Innovation
              Innovation Innovation Innovation Innovation Innovation Innovation
              Innovation Innovation Innovation Innovation
            </p>
            <div className="w-100 d-flex flex-wrap justify-content-between gap-2">
              <div className={`p-3 ${styles.Client_reviews}`}>
                <section className="text-center">
                  <i className="" style={{ width: "100px", height: "1000px" }}>
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
                  <i className="" style={{ width: "100px", height: "1000px" }}>
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
                type="text"
                className="form-control"
                value={handleValuesFromselect.name}
                onChange={(e) =>
                  setHandleValuesFromselect((prevState) => ({
                    ...prevState,
                    name: e.target.value,
                  }))
                }
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                value={handleValuesFromselect.phone}
                onChange={(e) =>
                  setHandleValuesFromselect((prevState) => ({
                    ...prevState,
                    phone: e.target.value,
                  }))
                }
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                value={handleValuesFromselect.email}
                onChange={(e) =>
                  setHandleValuesFromselect((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                value={handleValuesFromselect.message}
                onChange={(e) =>
                  setHandleValuesFromselect((prevState) => ({
                    ...prevState,
                    message: e.target.value,
                  }))
                }
                placeholder="Message"
                rows={3}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
