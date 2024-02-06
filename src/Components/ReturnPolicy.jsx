import React from 'react'
import { Link } from 'react-router-dom';
import '../Style/ReturnPolicy.css';

const ReturnPolicy = () => {
  return (
    <>

      <div className='return'>
        <div className='returnh2'>
          <h2>Return and Refund Policy</h2>

        </div>
        <div>
          <Link
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            to="/"
          >
            Home
          </Link>

          <span> &gt;&gt;Return and Refund Policy</span>
        </div>
      </div>
      <div className='returnmain'>
        <p>Triangle Space Private Limited does not provide the option to refund or exchange the services once purchased. The exact details of services are mentioned properly. However, if by mistake you paid for the wrong service, you can register a complaint by sending us an email at trianglespacelimited@gmail.com and we will initiate a refund.<br />

          The team will respond to the complaint query within 7 working days and get in touch with you.<br />

          If you are eligible for the refund, the team will refund the amount within 10 working days.<br />
          In case of service status showing started and you are not seeing any updates on your portal, then you can reach out to our technical team <a href="mailto:info@trianglespace.in"> trianglespacelimited@gmail.com.</a><br />

          Failing to do so within 48 hours doesn’t mean you are entitled to any refund or any support from our team.<br />

          If you do not receive the refund amount in the time duration mentioned, you can check your bank account again or contact the bank as the processing may take some time from their end. Or else, you can contact us at <a href="mailto:info@trianglespace.in"> trianglespacelimited@gmail.com.</a><br />

          Kindly note that the Services on sale cannot be refunded.<br />

          The Domain & Hosting charges are non-refundable.</p>
      </div>



    </>
  )
}

export default ReturnPolicy;