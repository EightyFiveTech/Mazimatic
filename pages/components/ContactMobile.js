import React from 'react'

const ContactMobile = () => {
  return (
   <section id="ContactMobile">
       <div className="row">
          <div className="col-md-12 text-center">
          <h2>Contact Us</h2>

          <input type="text" placeholder="Enter your name" className="mt-5" />
          <select className="mt-4">
  <option selected value="">India</option>
  <option value="">USA</option>
  <option value="">England</option>
</select>

<input type="text" placeholder="Enter your email Id" className="mt-4" />
<textarea placeholder="Write your message here..." rows="4" className="mt-4" />
          </div>
         </div>

   </section>
  )
}

export default ContactMobile