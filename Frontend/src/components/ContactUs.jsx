import React from "react";
import { Card, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
function ContactUs() {
  return (
    <>
      <section className="ezy__contact7 light">
        <div className="container">
          <div className="row justify-content-between py-4">
            <div className="col-lg-6 order-2 mb-3 mb-lg-0">
              <div className="contactswith"></div>
            </div>
            <div className="col-lg-5">
              <div className="">
                <div className="p-md-5">
                  <h2 className="ezy__contact7-heading mb-3">Contact Us</h2>
                  <p className="ezy__contact7-sub-heading mb-5">
                    We list your menu online, help you process orders.
                  </p>

                  <form>
                    <div className="form-group mb-3 mt-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                      />
                    </div>
                    <div className="form-group mb-3 mt-2">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <textarea
                        name="message"
                        className="form-control"
                        placeholder="Enter Message"
                        rows="3"
                      ></textarea>
                    </div>
                    <div className="text-end">
                      <button
                        type="submit"
                        className="btn btn-primary ezy__contact7-btn"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
