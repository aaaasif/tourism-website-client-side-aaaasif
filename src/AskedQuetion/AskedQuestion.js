import React from 'react';
import "./AskedQuestion.css"

const AskedQuestion = () => {
    return (
        <div className="AskedQuestion">
        <h1 className="m-5">frequently asked questions</h1>
        <div className="d-flex justify-content-between col align-items-center">
            <div>
            <img className=" col-lg-8 col-sm-12" src='https://i.ibb.co/Tt3SPXz/Questions-bro.png' alt="Card image cap"/>
            </div>
            <div className="accordion accordion-flush col-lg-4 col-sm-12 pe-5 " id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  What is Travel Loan?
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Travel loan is the most flexible way to make your dream vacation come true! Partnering with IPDC Finance Ltd, Tourism brings an amazing opportunity to avail up to BDT 200,000 of Travel Loan. Now, you can purchase travel products and pay monthly at ease..</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  How it works
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">1:Apply= Online application with a few required documents. <br/> 2:Approval=IPDC will verify and approve the loan within 3 working days. <br/> 3:Avail=Tourism corporate team will reach out to assist with the purchases.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Who are eligible?
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Any salaried person with a monthly net salary of BDT 30,000 or more.</div>
                </div>
              </div>
            </div>
        </div>
        </div>
    );
};

export default AskedQuestion;